---
title: "cimagf, cimag, cimagl"
source_path: "c/numeric/complex/cimag"
header: "<complex.h>"
category: "c"
---

1-3) Returns the imaginary part of z.

## Declarations
```cpp
float cimagf( float complex z );
```
_(since C99)_

```cpp
double cimag( double complex z );
```
_(since C99)_

```cpp
long double cimagl( long double complex z );
```
_(since C99)_

```cpp
#define cimag( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
The imaginary part of z.

## Notes
For any complex variable z, z == [creal](/c/numeric/complex/creal/)(z) + I*cimag(z).

## Example
```cpp
#include <stdio.h>
#include <complex.h>
 
int main(void)
{    
    double complex z = 1.0 + 2.0*I;
    printf("%f%+fi\n", creal(z), cimag(z));
}
```

## See also
- [crealcrealfcreall](/c/numeric/complex/creal/)
- [C++ documentation](/cpp/numeric/complex/imag2/)
