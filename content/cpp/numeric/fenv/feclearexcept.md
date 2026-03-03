---
title: "std::feclearexcept"
source_path: "cpp/numeric/fenv/feclearexcept"
header: "<cfenv>"
category: "numeric"
since: "C++11"
---

Attempts to clear the floating-point exceptions that are listed in the bitmask argument excepts, which is a bitwise OR of the [floating point exception macros](/cpp/numeric/fenv/fe_exceptions/).

## Declarations
```cpp
int feclearexcept( int excepts );
```
_(since C++11)_

## Parameters
- `excepts`: bitmask listing the exception flags to clear

## Return value
0 if all indicated exceptions were successfully cleared or if excepts is zero. Returns a non-zero value on error.

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
- [fetestexcept](/cpp/numeric/fenv/fetestexcept/)
- [C documentation](/c/numeric/fenv/feclearexcept/)
