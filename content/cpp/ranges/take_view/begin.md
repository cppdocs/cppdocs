---
title: "std::ranges::take_view<V>::begin"
source_path: "cpp/ranges/take_view/begin"
category: "ranges"
since: "C++20"
---

Returns an iterator to the first element of the take_view.

## Declarations
```cpp
constexpr auto begin() requires (!/*simple-view*/<V>);
```
_(since C++20)_

```cpp
constexpr auto begin() const requires ranges::range<const V>;
```
_(since C++20)_

## Return value
The result depends on the concepts satisfied by possibly const-qualified underlying view type Base, which is V for ([1](#Version_1)) or const V for ([2](#Version_2)).

## Example
```cpp
#include <concepts>
#include <forward_list>
#include <iostream>
#include <ranges>
#include <string_view>
#include <type_traits>
using namespace std::literals;
 
int main()
{
    {
        static constexpr auto v = {"∀x"sv, "∃y"sv, "ε"sv, "δ"sv};
        auto view = std::ranges::take_view(v, 8);
        auto iter = view.begin();
        std::cout << *iter << '\n';
        static_assert(
            std::ranges::sized_range<decltype(v)> and
            std::ranges::random_access_range<decltype(v)> and
            std::is_same_v<decltype(iter), decltype(std::ranges::begin(v))>
        );
    }
 
    {
        std::forward_list v = {"Ax"sv, "Ey"sv, "p"sv, "q"sv};
        auto view = std::ranges::take_view(v, 8);
        auto iter = view.begin();
        std::cout << *iter << '\n';
        static_assert(
            not std::ranges::sized_range<decltype(v)> and
            not std::ranges::random_access_range<decltype(v)> and
            std::is_same_v<decltype(iter),
                std::counted_iterator<
                    std::forward_list<std::string_view>::iterator>>
        );
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2393R1 | C++20 | implicit conversions between signed and unsigned integer-class types might fail | made explicit |

## See also
- [end](/cpp/ranges/take_view/end/)
- [counted_iterator](/cpp/iterator/counted_iterator/)
- [operator==](/cpp/ranges/take_view/sentinel/operator_cmp/)
