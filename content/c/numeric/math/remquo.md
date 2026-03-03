---
title: "remquo, remquof, remquol"
source_path: "c/numeric/math/remquo"
header: "<math.h>"
category: "c"
---

1-3) Computes the floating-point remainder of the division operation x/y as the [remainder()](/c/numeric/math/remainder/) function does. Additionally, the sign and at least the three of the last bits of x/y will be stored in quo, sufficient to determine the octant of the result within a period.

## Declarations
```cpp
float remquof( float x, float y, int *quo );
```
_(since C99)_

```cpp
double remquo( double x, double y, int *quo );
```
_(since C99)_

```cpp
long double remquol( long double x, long double y, int *quo );
```
_(since C99)_

```cpp
#define remquo( x, y, quo )
```
_(since C99)_

## Parameters
- `x, y`: floating-point values
- `quo`: pointer to an integer value to store the sign and some bits of x/y

## Return value
If successful, returns the floating-point remainder of the division x/y as defined in [remainder](/c/numeric/math/remainder/), and stores, in *quo, the sign and at least three of the least significant bits of x/y (formally, stores a value whose sign is the sign of x/y and whose magnitude is congruent modulo 2n to the magnitude of the integral quotient of x/y, where n is an implementation-defined integer greater than or equal to 3).

## Notes
[POSIX requires](https://pubs.opengroup.org/onlinepubs/9699919799/functions/remquo.html) that a domain error occurs if x is infinite or y is zero.

This function is useful when implementing periodic functions with the period exactly representable as a floating-point value: when calculating sin(πx) for a very large x, calling [sin](/c/numeric/math/sin/) directly may result in a large error, but if the function argument is first reduced with remquo, the low-order bits of the quotient may be used to determine the sign and the octant of the result within the period, while the remainder may be used to calculate the value with high precision.

On some platforms this operation is supported by hardware (and, for example, on Intel CPU, FPREM1 leaves exactly 3 bits of precision in the quotient).

## Example
```cpp
#include <fenv.h>
#include <math.h>
#include <stdio.h>
 
#ifndef __GNUC__
#pragma STDC FENV_ACCESS ON
#endif
 
double cos_pi_x_naive(double x)
{
    const double pi = acos(-1);
    return cos(pi * x);
}
 
// the period is 2, values are (0;0.5) positive, (0.5;1.5) negative, (1.5,2) positive
double cos_pi_x_smart(double x)
{
    const double pi = acos(-1);
    int extremum;
    double rem = remquo(x, 1, &extremum);
    extremum = (unsigned)extremum % 2; // keep 1 bit to determine nearest extremum
    return extremum ? -cos(pi * rem) : cos(pi * rem);
}
 
int main(void)
{
    printf("cos(pi * 0.25) = %f\n", cos_pi_x_naive(0.25));
    printf("cos(pi * 1.25) = %f\n", cos_pi_x_naive(1.25));
    printf("cos(pi * 1000000000000.25) = %f\n", cos_pi_x_naive(1000000000000.25));
    printf("cos(pi * 1000000000001.25) = %f\n", cos_pi_x_naive(1000000000001.25));
    printf("cos(pi * 1000000000000.25) = %f\n", cos_pi_x_smart(1000000000000.25));
    printf("cos(pi * 1000000000001.25) = %f\n", cos_pi_x_smart(1000000000001.25));
 
    // error handling
    feclearexcept(FE_ALL_EXCEPT);
    int quo;
    printf("remquo(+Inf, 1) = %.1f\n", remquo(INFINITY, 1, &quo));
    if (fetestexcept(FE_INVALID))
        puts("    FE_INVALID raised");
}
```

## See also
- [divldivlldiv](/c/numeric/math/div/)
- [fmodfmodffmodl](/c/numeric/math/fmod/)
- [remainderremainderfremainderl](/c/numeric/math/remainder/)
- [C++ documentation](/cpp/numeric/math/remquo/)
