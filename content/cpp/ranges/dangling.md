---
title: "std::ranges::dangling"
source_path: "cpp/ranges/dangling"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

dangling is a placeholder type and an empty class type, used together with the template aliases [ranges::borrowed_iterator_t](/cpp/ranges/borrowed_iterator_t/) and [ranges::borrowed_subrange_t](/cpp/ranges/borrowed_iterator_t/).

## Declarations
```cpp
struct dangling;
```
_(since C++20)_

## Example
```cpp
#include <algorithm>
#include <array>
#include <iostream>
#include <ranges>
#include <type_traits>
#include <string_view>
 
int main()
{
    auto get_array_by_value = [] { return std::array{0, 1, 0, 1}; };
    auto dangling_iter = std::ranges::max_element(get_array_by_value());
    static_assert(std::is_same_v<std::ranges::dangling, decltype(dangling_iter)>);
//  std::cout << *dangling_iter << '\n'; // compilation error: no match for 'operator*'
                                         // (operand type is 'std::ranges::dangling')
 
    auto get_persistent_array = []() -> const std::array<int, 4>& {
        static constexpr std::array a{0, 1, 0, 1};
        return a;
    };
    auto valid_iter = std::ranges::max_element(get_persistent_array());
    static_assert(!std::is_same_v<std::ranges::dangling, decltype(valid_iter)>);
    std::cout << *valid_iter << ' '; // 1
 
 
    auto get_string_view = [] { return std::string_view{"alpha"}; };
    auto valid_iter2 = std::ranges::min_element(get_string_view());
        // OK: std::basic_string_view models borrowed_range
    static_assert(!std::is_same_v<std::ranges::dangling, decltype(valid_iter2)>);
    std::cout << '\'' << *valid_iter2 << '\'' << '\n'; // 'a'
}
```

## See also
- [ranges::borrowed_iterator_tranges::borrowed_subrange_t](/cpp/ranges/borrowed_iterator_t/)
- [borrowed_range](/cpp/ranges/borrowed_range/)
- [ranges::borrowed_range](/cpp/ranges/borrowed_range/)
- [range](/cpp/ranges/range/)
