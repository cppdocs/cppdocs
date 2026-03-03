---
title: "crealf, creal, creall"
source_path: "c/numeric/complex/creal"
header: "<complex.h>"
category: "c"
---

1-3) Returns the real part of z.

## Declarations
```cpp
float crealf( float complex z );
```
_(since C99)_

```cpp
double creal( double complex z );
```
_(since C99)_

```cpp
long double creall( long double complex z );
```
_(since C99)_

```cpp
#define creal( z )
```
_(since C99)_

## Parameters
- `z`: complex argument

## Return value
The real part of z.

## Notes
For any complex variable z, z == creal(z) + I*[cimag](/c/numeric/complex/cimag/)(z).

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
- [cimagcimagfcimagl](/c/numeric/complex/cimag/)
- [C++ documentation](/cpp/numeric/complex/real2/)
