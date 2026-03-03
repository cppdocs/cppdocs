---
title: "MATH_ERRNO, MATH_ERREXCEPT, math_errhandling"
source_path: "cpp/numeric/math/math_errhandling"
header: "<cmath>"
category: "numeric"
since: "C++11"
---

The macro constant math_errhandling expands to an expression of type int that is either equal to MATH_ERRNO, or equal to MATH_ERREXCEPT, or equal to their bitwise OR (MATH_ERRNO | MATH_ERREXCEPT).

## Declarations
```cpp
#define MATH_ERRNO 1
```
_(since C++11)_

```cpp
#define MATH_ERREXCEPT 2
```
_(since C++11)_

```cpp
#define math_errhandling /*implementation defined*/
```
_(since C++11)_

## Notes
Whether [FE_INEXACT](/cpp/numeric/fenv/fe_exceptions/) is raised by the mathematical library functions is unspecified in general, but may be explicitly specified in the description of the function (e.g. [std::rint](/cpp/numeric/math/rint/) vs [std::nearbyint](/cpp/numeric/math/nearbyint/)).

Before C++11, floating-point exceptions were not specified, [EDOM](/cpp/error/errno_macros/) was required for any domain error, [ERANGE](/cpp/error/errno_macros/) was required for overflows and implementation-defined for underflows.

## Example
```cpp
#include <cerrno>
#include <cfenv>
#include <cmath>
#include <cstring>
#include <iostream>
// #pragma STDC FENV_ACCESS ON
 
int main()
{
    std::cout << "MATH_ERRNO is "
              << (math_errhandling & MATH_ERRNO ? "set" : "not set") << '\n'
              << "MATH_ERREXCEPT is "
              << (math_errhandling & MATH_ERREXCEPT ? "set" : "not set") << '\n';
    std::feclearexcept(FE_ALL_EXCEPT);
    errno = 0;
    std::cout <<  "log(0) = " << std::log(0) << '\n';
    if (errno == ERANGE)
        std::cout << "errno = ERANGE (" << std::strerror(errno) << ")\n";
    if (std::fetestexcept(FE_DIVBYZERO))
        std::cout << "FE_DIVBYZERO (pole error) reported\n";
}
```

## See also
- [FE_ALL_EXCEPTFE_DIVBYZEROFE_INEXACTFE_INVALIDFE_OVERFLOWFE_UNDERFLOW](/cpp/numeric/fenv/fe_exceptions/)
- [errno](/cpp/error/errno/)
- [C documentation](/c/numeric/math/math_errhandling/)
