---
title: "nextafter, nextafterf, nextafterl, nexttoward, nexttowardf, nexttowardl"
source_path: "c/numeric/math/nextafter"
header: "<math.h>"
category: "c"
---

1-3) First, converts both arguments to the type of the function, then returns the next representable value of from in the direction of to. If from equals to to, to is returned.

## Declarations
```cpp
float nextafterf( float from, float to );
```
_(since C99)_

```cpp
double nextafter( double from, double to );
```
_(since C99)_

```cpp
long double nextafterl( long double from, long double to );
```
_(since C99)_

```cpp
float nexttowardf( float from, long double to );
```
_(since C99)_

```cpp
double nexttoward( double from, long double to );
```
_(since C99)_

```cpp
long double nexttowardl( long double from, long double to );
```
_(since C99)_

```cpp
#define nextafter(from, to)
```
_(since C99)_

```cpp
#define nexttoward(from, to)
```
_(since C99)_

## Parameters
- `from, to`: floating-point values

## Return value
If no errors occur, the next representable value of from in the direction of to. is returned. If from equals to, then to is returned, converted to the type of the function.

## Notes
[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/nextafter.html) that the overflow and the underflow conditions are range errors ([errno](/c/error/errno/) may be set).

IEC 60559 recommends that from is returned whenever from == to. These functions return to instead, which makes the behavior around zero consistent: nextafter(-0.0, +0.0) returns +0.0 and nextafter(+0.0, -0.0) returns -0.0.

nextafter is typically implemented by manipulation of IEEE representation ([glibc](https://github.com/bminor/glibc/blob/master/math/s_nextafter.c) [musl](https://github.com/ifduyue/musl/blob/master/src/math/nextafter.c)).

## Example
```cpp
#include <fenv.h>
#include <float.h>
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    float from1 = 0, to1 = nextafterf(from1, 1);
    printf("The next representable float after %.2f is %.20g (%a)\n", from1, to1, to1);
 
    float from2 = 1, to2 = nextafterf(from2, 2);
    printf("The next representable float after %.2f is %.20f (%a)\n", from2, to2, to2);
 
    double from3 = nextafter(0.1, 0), to3 = 0.1;
    printf("The number 0.1 lies between two valid doubles:\n"
           "    %.56f (%a)\nand %.55f  (%a)\n", from3, from3, to3, to3);
 
    // difference between nextafter and nexttoward:
    long double dir = nextafterl(from1, 1); // first subnormal long double
    float x = nextafterf(from1, dir); // first converts dir to float, giving 0
    printf("Using nextafter, next float after %.2f (%a) is %.20g (%a)\n",
           from1, from1, x, x);
    x = nexttowardf(from1, dir);
    printf("Using nexttoward, next float after %.2f (%a) is %.20g (%a)\n",
           from1, from1, x, x);
 
    // special values
    {
        #pragma STDC FENV_ACCESS ON
        feclearexcept(FE_ALL_EXCEPT);
        double from4 = DBL_MAX, to4 = nextafter(from4, INFINITY);
        printf("The next representable double after %.2g (%a) is %.23f (%a)\n",
               from4, from4, to4, to4);
        if(fetestexcept(FE_OVERFLOW)) puts("   raised FE_OVERFLOW");
        if(fetestexcept(FE_INEXACT)) puts("   raised FE_INEXACT");
    } // end FENV_ACCESS block
 
    float from5 = 0.0, to5 = nextafter(from5, -0.0);
    printf("nextafter(+0.0, -0.0) gives %.2g (%a)\n", to5, to5);
}
```

## See also
- [C++ documentation](/cpp/numeric/math/nextafter/)
