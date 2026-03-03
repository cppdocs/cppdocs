---
title: "std::ratio_add"
source_path: "cpp/numeric/ratio/ratio_add"
header: "<ratio>"
category: "numeric"
since: "C++11"
---

The alias template std::ratio_add denotes the result of adding two exact rational fractions represented by the [std::ratio](/cpp/numeric/ratio/ratio/) specializations R1 and R2.

## Declarations
```cpp
template< class R1, class R2 >
using ratio_add = /* see below */;
```
_(since C++11)_

## Notes
If U or V is not representable in [std::intmax_t](/cpp/types/integer/), the program is ill-formed. If Num or Denom is not representable in [std::intmax_t](/cpp/types/integer/), the program is ill-formed unless the implementation yields correct values for U and V.

The above definition requires that the result of std::ratio_add<R1, R2> be already reduced to lowest terms; for example, std::ratio_add<[std::ratio](/cpp/numeric/ratio/ratio/)<1, 3>, [std::ratio](/cpp/numeric/ratio/ratio/)<1, 6>> is the same type as [std::ratio](/cpp/numeric/ratio/ratio/)<1, 2>.

## Example
```cpp
#include <iostream>
#include <ratio>
 
int main()
{
    using two_third = std::ratio<2, 3>;
    using one_sixth = std::ratio<1, 6>;
    using sum = std::ratio_add<two_third, one_sixth>;
 
    std::cout << "2/3 + 1/6 = " << sum::num << '/' << sum::den << '\n';
}
```

## See also
- [ratio_subtract](/cpp/numeric/ratio/ratio_subtract/)
