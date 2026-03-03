---
title: "std::ranges::min_max_result"
source_path: "cpp/algorithm/ranges/return_types/min_max_result"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

ranges::min_max_result is a class template that provides a way to store two objects or references of the same type as a single unit.

## Declarations
```cpp
template< class T >
struct min_max_result;
```
_(since C++20)_

## Notes
Each standard library algorithm that uses this family of return types declares a new [alias type](/cpp/language/type_alias/), e.g. using merge_result = in_in_out_result<I1, I2, O>;.

The names for such aliases are formed by adding the suffix "_result" to the algorithm's name. So, the return type of std::ranges::merge can be named as std::ranges::merge_result.

Unlike [std::pair](/cpp/utility/pair/) and [std::tuple](/cpp/utility/tuple/), this class template has data members of meaningful names.

## Example
```cpp
#include <algorithm>
#include <ranges>
 
int main()
{
    constexpr static auto v = {3, 1, 4, 1, 5, 9, 2};
    {
        constexpr auto result = std::ranges::minmax(v);
        static_assert(1 == result.min && 9 == result.max);
    }
    {
        constexpr auto result = std::ranges::minmax_element(v);
        static_assert(1 == *result.min && 9 == *result.max);
    }
}
```

## See also
- [pair](/cpp/utility/pair/)
- [tuple](/cpp/utility/tuple/)
