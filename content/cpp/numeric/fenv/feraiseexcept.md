---
title: "std::feraiseexcept"
source_path: "cpp/numeric/fenv/feraiseexcept"
header: "<cfenv>"
category: "numeric"
since: "C++11"
---

Attempts to raise all floating point exceptions listed in excepts (a bitwise OR of the [floating point exception macros](/cpp/numeric/fenv/fe_exceptions/)). If one of the exceptions is [FE_OVERFLOW](/cpp/numeric/fenv/fe_exceptions/) or [FE_UNDERFLOW](/cpp/numeric/fenv/fe_exceptions/), this function may additionally raise [FE_INEXACT](/cpp/numeric/fenv/fe_exceptions/). The order in which the exceptions are raised is unspecified, except that [FE_OVERFLOW](/cpp/numeric/fenv/fe_exceptions/) and [FE_UNDERFLOW](/cpp/numeric/fenv/fe_exceptions/) are always raised before [FE_INEXACT](/cpp/numeric/fenv/fe_exceptions/).

## Declarations
```cpp
int feraiseexcept( int excepts );
```
_(since C++11)_

## Parameters
- `excepts`: bitmask listing the exception flags to raise

## Return value
0 if all listed exceptions were raised, non-zero value otherwise.

## Example
```cpp
#include <cfenv>
#include <iostream>
 
// #pragma STDC FENV_ACCESS ON
 
int main()
{
    std::feclearexcept(FE_ALL_EXCEPT);
    const int r = std::feraiseexcept(FE_UNDERFLOW | FE_DIVBYZERO);
    std::cout << "Raising divbyzero and underflow simultaneously "
              << (r ? "fails" : "succeeds") << " and results in\n";
 
    const int e = std::fetestexcept(FE_ALL_EXCEPT);
    if (e & FE_DIVBYZERO)
        std::cout << "division by zero\n";
    if (e & FE_INEXACT)
        std::cout << "inexact\n";
    if (e & FE_INVALID)
        std::cout << "invalid\n";
    if (e & FE_UNDERFLOW)
        std::cout << "underflow\n";
    if (e & FE_OVERFLOW)
        std::cout << "overflow\n";
}
```

## See also
- [feclearexcept](/cpp/numeric/fenv/feclearexcept/)
- [fetestexcept](/cpp/numeric/fenv/fetestexcept/)
- [C documentation](/c/numeric/fenv/feraiseexcept/)
