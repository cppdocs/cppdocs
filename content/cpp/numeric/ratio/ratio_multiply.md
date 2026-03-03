---
title: "std::ratio_multiply"
source_path: "cpp/numeric/ratio/ratio_multiply"
header: "<ratio>"
category: "numeric"
since: "C++11"
---

The alias template std::ratio_multiply denotes the result of multiplying two exact rational fractions represented by the [std::ratio](/cpp/numeric/ratio/ratio/) specializations R1 and R2.

## Declarations
```cpp
template< class R1, class R2 >
using ratio_multiply = /* see below */;
```
_(since C++11)_

## Notes
If U or V is not representable in [std::intmax_t](/cpp/types/integer/), the program is ill-formed. If Num or Denom is not representable in [std::intmax_t](/cpp/types/integer/), the program is ill-formed unless the implementation yields correct values for U and V.

The above definition requires that the result of std::ratio_multiply<R1, R2> be already reduced to lowest terms; for example, std::ratio_multiply<[std::ratio](/cpp/numeric/ratio/ratio/)<1, 6>, [std::ratio](/cpp/numeric/ratio/ratio/)<4, 5>> is the same type as [std::ratio](/cpp/numeric/ratio/ratio/)<2, 15>.

## Example
```cpp
#include <iostream>
#include <ratio>
 
int main()
{
    using two_third = std::ratio<2, 3>;
    using one_sixth = std::ratio<1, 6>;
    using product = std::ratio_multiply<two_third, one_sixth>;
    static_assert(std::ratio_equal_v<product, std::ratio<13, 117>>);
    std::cout << "2/3 * 1/6 = " << product::num << '/' << product::den << '\n';
}
```

## See also
- [ratio_divide](/cpp/numeric/ratio/ratio_divide/)
