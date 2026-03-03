---
title: "cabsf, cabs, cabsl"
source_path: "c/numeric/complex/cabs"
header: "<complex.h>"
category: "c"
---

1-3) Computes the complex absolute value (also known as norm, modulus, or magnitude) of z.

## Declarations
```cpp
float cabsf( float complex z );
```
_(since C99)_

```cpp
double cabs( double complex z );
```
_(since C99)_

```cpp
long double cabsl( long double complex z );
```
_(since C99)_

```cpp
#define fabs( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
If no errors occur, returns the absolute value (norm, magnitude) of z.

## Example
```cpp
#include <stdio.h>
#include <complex.h>
 
int main(void)
{
    double complex z = 1.0 + 1.0*I;
    printf("%.1f%+.1fi cartesian is rho=%f theta=%f polar\n",
           creal(z), cimag(z), cabs(z), carg(z));
}
```

## See also
- [cargcargfcargl](/c/numeric/complex/carg/)
- [abslabsllabs](/c/numeric/math/abs/)
- [fabsfabsffabsl](/c/numeric/math/fabs/)
- [hypothypotfhypotl](/c/numeric/math/hypot/)
- [C++ documentation](/cpp/numeric/complex/abs/)
