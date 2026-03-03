---
title: "std::ratio_divide"
source_path: "cpp/numeric/ratio/ratio_divide"
header: "<ratio>"
category: "numeric"
since: "C++11"
---

The alias template std::ratio_divide denotes the result of dividing two exact rational fractions represented by the [std::ratio](/cpp/numeric/ratio/ratio/) specializations R1 and R2.

## Declarations
```cpp
template< class R1, class R2 >
using ratio_divide = /* see below */;
```
_(since C++11)_

## Notes
If U or V is not representable in [std::intmax_t](/cpp/types/integer/), the program is ill-formed. If Num or Denom is not representable in [std::intmax_t](/cpp/types/integer/), the program is ill-formed unless the implementation yields correct values for U and V.

The above definition requires that the result of std::ratio_divide<R1, R2> be already reduced to lowest terms; for example, std::ratio_divide<[std::ratio](/cpp/numeric/ratio/ratio/)<1, 12>, [std::ratio](/cpp/numeric/ratio/ratio/)<1, 6>> is the same type as [std::ratio](/cpp/numeric/ratio/ratio/)<1, 2>.

## Example
```cpp
#include <iostream>
#include <ratio>
 
int main()
{
    using two_third = std::ratio<2, 3>;
    using one_sixth = std::ratio<1, 6>;
    using quotient = std::ratio_divide<two_third, one_sixth>;
    static_assert(std::ratio_equal_v<quotient, std::ratio<0B100, 0X001>>);
    std::cout << "(2/3) / (1/6) = " << quotient::num << '/' << quotient::den << '\n';
}
```

## See also
- [ratio_multiply](/cpp/numeric/ratio/ratio_multiply/)
