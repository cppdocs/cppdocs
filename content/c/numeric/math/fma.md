---
title: "fma, fmaf, fmal"
source_path: "c/numeric/math/fma"
header: "<math.h>"
category: "c"
---

1-3) Computes (x * y) + z as if to infinite precision and rounded only once to fit the result type.

## Declarations
```cpp
float fmaf( float x, float y, float z );
```
_(since C99)_

```cpp
double fma( double x, double y, double z );
```
_(since C99)_

```cpp
long double fmal( long double x, long double y, long double z );
```
_(since C99)_

```cpp
#define FP_FAST_FMA /* implementation-defined */
```
_(since C99)_

```cpp
#define FP_FAST_FMAF /* implementation-defined */
```
_(since C99)_

```cpp
#define FP_FAST_FMAL /* implementation-defined */
```
_(since C99)_

```cpp
#define fma( x, y, z )
```
_(since C99)_

## Parameters
- `x, y, z`: floating-point values

## Return value
If successful, returns the value of (x * y) + z as if calculated to infinite precision and rounded once to fit the result type (or, alternatively, calculated as a single ternary floating-point operation).

## Notes
This operation is commonly implemented in hardware as [fused multiply-add](https://en.wikipedia.org/wiki/Multiply%E2%80%93accumulate_operation) CPU instruction. If supported by hardware, the appropriate FP_FAST_FMA* macros are expected to be defined, but many implementations make use of the CPU instruction even when the macros are not defined.

[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/fma.html) that the situation where the value x * y is invalid and z is a NaN is a domain error.

Due to its infinite intermediate precision, fma is a common building block of other correctly-rounded mathematical operations, such as [sqrt](/c/numeric/math/sqrt/) or even the division (where not provided by the CPU, e.g. [Itanium](https://en.wikipedia.org/wiki/Itanium)).

As with all floating-point expressions, the expression (x * y) + z may be compiled as a fused mutiply-add unless the [#pragma](/c/preprocessor/impl/) STDC FP_CONTRACT is off.

## Example
```cpp
#include <fenv.h>
#include <float.h>
#include <math.h>
#include <stdio.h>
// #pragma STDC FENV_ACCESS ON
 
int main(void)
{
    // demo the difference between fma and built-in operators
    double in = 0.1;
    printf("0.1 double is %.23f (%a)\n", in, in);
    printf("0.1*10 is 1.0000000000000000555112 (0x8.0000000000002p-3),"
           " or 1.0 if rounded to double\n");
    double expr_result = 0.1 * 10 - 1;
    printf("0.1 * 10 - 1 = %g : 1 subtracted after "
           "intermediate rounding to 1.0\n", expr_result);
    double fma_result = fma(0.1, 10, -1);
    printf("fma(0.1, 10, -1) = %g (%a)\n", fma_result, fma_result);
 
    // fma use in double-double arithmetic
    printf("\nin double-double arithmetic, 0.1 * 10 is representable as ");
    double high = 0.1 * 10;
    double low = fma(0.1, 10, -high);
    printf("%g + %g\n\n", high, low);
 
    // error handling
    feclearexcept(FE_ALL_EXCEPT);
    printf("fma(+Inf, 10, -Inf) = %f\n", fma(INFINITY, 10, -INFINITY));
    if (fetestexcept(FE_INVALID))
        puts("    FE_INVALID raised");
}
```

## See also
- [remainderremainderfremainderl](/c/numeric/math/remainder/)
- [remquoremquofremquol](/c/numeric/math/remquo/)
- [C++ documentation](/cpp/numeric/math/fma/)
