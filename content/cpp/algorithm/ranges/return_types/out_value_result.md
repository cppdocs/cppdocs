---
title: "std::ranges::out_value_result"
source_path: "cpp/algorithm/ranges/return_types/out_value_result"
header: "<algorithm>"
category: "algorithm"
since: "C++23"
---

ranges::out_value_result is a class template that provides a way to store an iterator and a value as a single unit.

## Declarations
```cpp
template< class O, class T >
struct out_value_result;
```
_(since C++23)_

## Notes
Each standard library algorithm that uses this family of return types declares a new [alias type](/cpp/language/type_alias/), e.g. using merge_result = in_in_out_result<I1, I2, O>;.

The names for such aliases are formed by adding the suffix "_result" to the algorithm's name. So, the return type of std::ranges::merge can be named as std::ranges::merge_result.

Unlike [std::pair](/cpp/utility/pair/) and [std::tuple](/cpp/utility/tuple/), this class template has data members of meaningful names.

## Example
```cpp
#include <algorithm>
#include <array>
#include <cassert>
#include <numeric>
#include <ranges>
 
int main()
{
    std::array<int, 4> a{};
    constexpr std::array expected{2, 3, 4, 5};
    const auto result = std::ranges::iota(a, 2);
    assert(std::ranges::distance(a.cbegin(), result.out) == 4);
    assert(result.value == 6);
    assert(a == expected);
}
```

## See also
- [pair](/cpp/utility/pair/)
- [tuple](/cpp/utility/tuple/)
