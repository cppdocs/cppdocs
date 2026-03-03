---
title: "std::ratio"
source_path: "cpp/numeric/ratio/ratio"
header: "<ratio>"
category: "numeric"
since: "C++11"
---

The class template std::ratio provides [compile-time rational arithmetic](/cpp/numeric/ratio/) support. Each instantiation of this template exactly represents any finite rational number as long as its numerator Num and denominator Denom are representable as compile-time constants of type [std::intmax_t](/cpp/types/integer/). In addition, Denom may not be zero and both Num and Denom may not be equal to the most negative value.

## Declarations
```cpp
template<
std::intmax_t Num,
std::intmax_t Denom = 1
> class ratio;
```
_(since C++11)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_ratio
202306L
(C++26)
Adding the new 2022 SI prefixes: quecto, quetta, ronto, ronna

## Example
```cpp
#include <ratio>
 
static_assert
(
    std::ratio_equal_v<std::ratio_multiply<std::femto, std::exa>, std::kilo>
);
 
int main() {}
```

## See also
- [Mathematical constants](/cpp/numeric/constants/)
- [std::numbers::e](/cpp/numeric/constants/)
