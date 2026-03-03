---
title: "FE_DIVBYZERO, FE_INEXACT, FE_INVALID, FE_OVERFLOW, FE_UNDERFLOW, FE_ALL_EXCEPT"
source_path: "cpp/numeric/fenv/FE_exceptions"
header: "<cfenv>"
category: "numeric"
since: "C++11"
---

All these macro constants (except FE_ALL_EXCEPT) expand to integer constant expressions that are distinct powers of 2, which uniquely identify all supported floating-point exceptions. Each macro is defined only if it is supported.

## Declarations
```cpp
#define FE_DIVBYZERO /*implementation defined power of 2*/
```
_(since C++11)_

```cpp
#define FE_INEXACT /*implementation defined power of 2*/
```
_(since C++11)_

```cpp
#define FE_INVALID /*implementation defined power of 2*/
```
_(since C++11)_

```cpp
#define FE_OVERFLOW /*implementation defined power of 2*/
```
_(since C++11)_

```cpp
#define FE_UNDERFLOW /*implementation defined power of 2*/
```
_(since C++11)_

```cpp
#define FE_ALL_EXCEPT FE_DIVBYZERO | FE_INEXACT | \
FE_INVALID | FE_OVERFLOW | \
FE_UNDERFLOW
```
_(since C++11)_

## Example
```cpp
#include <cfenv>
#include <cmath>
#include <iostream>
 
// #pragma STDC FENV_ACCESS ON
 
volatile double zero = 0.0; // volatile not needed where FENV_ACCESS is supported
volatile double one = 1.0;  // volatile not needed where FENV_ACCESS is supported
 
int main()
{
    std::feclearexcept(FE_ALL_EXCEPT);
    std::cout <<  "1.0/0.0 = " << 1.0 / zero << '\n';
    if (std::fetestexcept(FE_DIVBYZERO))
        std::cout << "division by zero reported\n";
    else
        std::cout << "division by zero not reported\n";
 
    std::feclearexcept(FE_ALL_EXCEPT);
    std::cout << "1.0/10 = " << one / 10 << '\n';
    if (std::fetestexcept(FE_INEXACT))
        std::cout << "inexact result reported\n";
    else
        std::cout << "inexact result not reported\n";
 
    std::feclearexcept(FE_ALL_EXCEPT);
    std::cout << "sqrt(-1) = " << std::sqrt(-1) << '\n';
    if (std::fetestexcept(FE_INVALID))
        std::cout << "invalid result reported\n";
    else
        std::cout << "invalid result not reported\n";
}
```

## See also
- [math_errhandlingMATH_ERRNOMATH_ERREXCEPT](/cpp/numeric/math/math_errhandling/)
- [C documentation](/c/numeric/fenv/FE_exceptions/)
