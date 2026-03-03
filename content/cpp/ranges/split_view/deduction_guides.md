---
title: "deduction guides for std::ranges::split_view"
source_path: "cpp/ranges/split_view/deduction_guides"
category: "ranges"
since: "C++20"
---

These [deduction guides](/cpp/language/ctad/) are provided for split_view to allow deduction from a range and a delimiter.

## Declarations
```cpp
template< class R, class P >
split_view( R&&, P&& )
-> split_view<views::all_t<R>, views::all_t<P>>;
```
_(since C++20)_

```cpp
template< ranges::input_range R >
split_view( R&&, ranges::range_value_t<R> )
-> split_view<views::all_t<R>, ranges::single_view<ranges::range_value_t<R>>>;
```
_(since C++20)_

## Example
```cpp
#include <ranges>
#include <string_view>
#include <type_traits>
using std::operator""sv;
 
int main() {
    std::ranges::split_view w1{"a::b::c"sv, "::"sv};
    static_assert(std::is_same_v<
        decltype(w1),
        std::ranges::split_view<std::string_view, std::string_view>>);
 
    std::ranges::split_view w2{"x,y,z"sv, ','};
    static_assert(std::is_same_v<
        decltype(w2),
        std::ranges::split_view<std::string_view, std::ranges::single_view<char>>>);
}
```
