---
title: "std::ratio_greater_equal"
source_path: "cpp/numeric/ratio/ratio_greater_equal"
header: "<ratio>"
category: "numeric"
since: "C++11"
---

If the ratio R1 is greater than or equal to the ratio R2, provides the member constant value equal true. Otherwise, value is false.

## Declarations
```cpp
template< class R1, class R2 >
struct ratio_greater_equal : std::integral_constant<bool, /* see below */> { };
```
_(since C++11)_

## Example
```cpp
#include <ratio>
 
int main()
{
    static_assert(std::ratio_greater_equal<
        std::ratio<2, 3>,
        std::ratio<2, 3>>::value, "2/3 >= 2/3");
 
    // since C++17
    static_assert(std::ratio_greater_equal_v<
        std::ratio<999'998, 999'999>,
        std::ratio<999'997, 999'998>>);
}
```

## See also
- [ratio_equal](/cpp/numeric/ratio/ratio_equal/)
- [ratio_less](/cpp/numeric/ratio/ratio_less/)
