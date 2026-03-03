---
title: "std::ratio_less_equal"
source_path: "cpp/numeric/ratio/ratio_less_equal"
header: "<ratio>"
category: "numeric"
since: "C++11"
---

If the ratio R1 is less than or equal to the ratio R2, provides the member constant value equal true. Otherwise, value is false.

## Declarations
```cpp
template< class R1, class R2 >
struct ratio_less_equal : std::integral_constant<bool, /* see below */> { };
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <ratio>
 
int main()
{
    static_assert(std::ratio_less_equal<std::ratio<1, 2>, std::ratio<3, 4>>::value,
                  "1/2 <= 3/4");
 
    if (std::ratio_less_equal<std::ratio<10,11>, std::ratio<11,12>>::value)
        std::cout << "10/11 <= 11/12" "\n";
 
    static_assert(std::ratio_less_equal_v<std::ratio<10, 11>, std::ratio<11, 12>>);
 
    if constexpr (std::ratio_less_equal_v<std::ratio<10, 11>, std::ratio<11, 12>>)
        std::cout << "11/12 <= 12/13" "\n";
}
```

## See also
- [ratio_equal](/cpp/numeric/ratio/ratio_equal/)
- [ratio_not_equal](/cpp/numeric/ratio/ratio_not_equal/)
