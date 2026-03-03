---
title: "FE_DOWNWARD, FE_TONEAREST, FE_TOWARDZERO, FE_UPWARD"
source_path: "cpp/numeric/fenv/FE_round"
header: "<cfenv>"
category: "numeric"
since: "C++11"
---

Each of these macro constants expands to a nonnegative integer constant expression, which can be used with [std::fesetround](/cpp/numeric/fenv/feround/) and [std::fegetround](/cpp/numeric/fenv/feround/) to indicate one of the supported floating-point rounding modes. The implementation may define additional rounding mode constants in [<cfenv>](/cpp/header/cfenv/), which should all begin with FE_ followed by at least one uppercase letter. Each macro is only defined if it is supported.

## Declarations
```cpp
#define FE_DOWNWARD /*implementation defined*/
```
_(since C++11)_

```cpp
#define FE_TONEAREST /*implementation defined*/
```
_(since C++11)_

```cpp
#define FE_TOWARDZERO /*implementation defined*/
```
_(since C++11)_

```cpp
#define FE_UPWARD /*implementation defined*/
```
_(since C++11)_

## Example
```cpp
#include <cfenv>
#include <cmath>
#include <iomanip>
#include <iostream>
#include <string>
// #pragma STDC FENV_ACCESS ON
 
int main()
{
    std::fesetround(FE_DOWNWARD);
    std::cout << "rounding down: \n" << std::setprecision(50)
              << "         pi = " << std::acos(-1.f) << '\n'
              << "stof(\"1.1\") = " << std::stof("1.1") << '\n'
              << "  rint(2.1) = " << std::rint(2.1) << "\n\n";
    std::fesetround(FE_UPWARD);
    std::cout << "rounding up: \n"
              << "         pi = " << std::acos(-1.f) << '\n'
              << "stof(\"1.1\") = " << std::stof("1.1") << '\n'
              << "  rint(2.1) = " << std::rint(2.1) << '\n';
}
```

## See also
- [float_round_style](/cpp/types/numeric_limits/float_round_style/)
- [fegetroundfesetround](/cpp/numeric/fenv/feround/)
- [C documentation](/c/numeric/fenv/FE_round/)
