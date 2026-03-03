---
title: "deduction guides for std::ranges::lazy_split_view"
source_path: "cpp/ranges/lazy_split_view/deduction_guides"
category: "ranges"
since: "C++20"
---

These [deduction guides](/cpp/language/ctad/) are provided for lazy_split_view to allow deduction from a range and a delimiter.

## Declarations
```cpp
template< class R, class P >
lazy_split_view( R&&, P&& )
-> lazy_split_view<views::all_t<R>, views::all_t<P>>;
```
_(since C++20)_

```cpp
template< ranges::input_range R >
lazy_split_view( R&&, ranges::range_value_t<R> )
-> lazy_split_view<views::all_t<R>,
ranges::single_view<ranges::range_value_t<R>>>;
```
_(since C++20)_

## Example
```cpp
#include <ranges>
#include <string_view>
#include <type_traits>
using std::operator""sv;
 
int main()
{
    std::ranges::lazy_split_view w1{"a::b::c"sv, "::"sv};
    // type of w1 is lazy_split_view<string_view, string_view>:
    static_assert(std::is_same_v<
        decltype(w1),
        std::ranges::lazy_split_view<
            std::basic_string_view<char, std::char_traits<char>>,
            std::basic_string_view<char, std::char_traits<char>>>>);
 
    std::ranges::lazy_split_view w2{"x,y,z"sv, ','};
    // type of w2 is lazy_split_view<string_view, single_view<char>>:
    static_assert(std::is_same_v<
        decltype(w2),
        std::ranges::lazy_split_view<
            std::basic_string_view<char, std::char_traits<char>>,
            std::ranges::single_view<char>>>);
}
```
