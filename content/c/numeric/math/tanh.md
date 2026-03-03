---
title: "tanh, tanhf, tanhl"
source_path: "c/numeric/math/tanh"
header: "<math.h>"
category: "c"
---

1-3) Computes the hyperbolic tangent of arg.

## Declarations
```cpp
float tanhf( float arg );
```
_(since C99)_

```cpp
double tanh( double arg );
```

```cpp
long double tanhl( long double arg );
```
_(since C99)_

```cpp
#define tanh( arg )
```
_(since C99)_

## Parameters
- `arg`: floating-point value representing a hyperbolic angle

## Return value
If a range error occurs due to underflow, the correct result (after rounding) is returned.

## Notes
[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/tanh.html) that in case of underflow, arg is returned unmodified, and if that is not supported, an implementation-defined value no greater than [DBL_MIN](/c/types/limits/), [FLT_MIN](/c/types/limits/), and [LDBL_MIN](/c/types/limits/) is returned.

## Example
```cpp
#include <math.h>
#include <stdio.h>
 
int main(void)
{
    printf("tanh(1) = %f\ntanh(-1) = %f\n", tanh(1), tanh(-1));
    printf("tanh(0.1)*sinh(0.2)-cosh(0.2) = %f\n", tanh(0.1) * sinh(0.2) - cosh(0.2));
    // special values
    printf("tanh(+0) = %f\ntanh(-0) = %f\n", tanh(0.0), tanh(-0.0));
}
```

## See also
- [sinhsinhfsinhl](/c/numeric/math/sinh/)
- [coshcoshfcoshl](/c/numeric/math/cosh/)
- [atanhatanhfatanhl](/c/numeric/math/atanh/)
- [ctanhctanhfctanhl](/c/numeric/complex/ctanh/)
- [C++ documentation](/cpp/numeric/math/tanh/)
