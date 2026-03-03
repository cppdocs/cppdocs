---
title: "std::ratio_equal"
source_path: "cpp/numeric/ratio/ratio_equal"
header: "<ratio>"
category: "numeric"
since: "C++11"
---

If the ratios R1 and R2 are equal, provides the member constant value equal true. Otherwise, value is false.

## Declarations
```cpp
template< class R1, class R2 >
struct ratio_equal : std::integral_constant<bool, /* see below */> { };
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <ratio>
 
int main()
{
    constexpr bool equ = std::ratio_equal_v<std::ratio<2,3>,
                                            std::ratio<6,9>>;
    static_assert(equ);
    std::cout << "2/3 " << (equ ? "==" : "!=") << " 6/9\n";
}
```

## See also
- [ratio_not_equal](/cpp/numeric/ratio/ratio_not_equal/)
