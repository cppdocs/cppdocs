---
title: "std::ratio_greater"
source_path: "cpp/numeric/ratio/ratio_greater"
header: "<ratio>"
category: "numeric"
since: "C++11"
---

If the ratio R1 is greater than the ratio R2, provides the member constant value equal true. Otherwise, value is false.

## Declarations
```cpp
template< class R1, class R2 >
struct ratio_greater : std::integral_constant<bool, /* see below */> { };
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <ratio>
 
int main()
{
    static_assert(std::ratio_greater<std::ratio<3, 4>, std::ratio<1, 2>>::value,
                  "3/4 > 1/2");
 
    if (std::ratio_greater<std::ratio<11, 12>, std::ratio<10, 11>>::value)
        std::cout << "11/12 > 10/11" "\n";
 
    // Since C++17
    static_assert(std::ratio_greater_v<std::ratio<12, 13>, std::ratio<11, 12>>);
 
    if constexpr (std::ratio_greater_v<std::ratio<12, 13>, std::ratio<11, 12>>)
        std::cout << "12/13 > 11/12" "\n";
}
```

## See also
- [ratio_greater_equal](/cpp/numeric/ratio/ratio_greater_equal/)
