---
title: "std::ranges::lazy_split_view<V,Pattern>::base"
source_path: "cpp/ranges/lazy_split_view/base"
category: "ranges"
since: "C++20"
---

Returns a copy of the underlying view [base_](/cpp/ranges/lazy_split_view/#base).

## Declarations
```cpp
constexpr V base() const& requires std::copy_constructible<V>;
```
_(since C++20)_

```cpp
constexpr V base() &&;
```
_(since C++20)_

## Return value
A copy of the underlying view [base_](/cpp/ranges/lazy_split_view/#base).

## Example
```cpp
#include <iostream>
#include <ranges>
#include <string_view>
 
void print(std::string_view rem, auto const& r, std::string_view post = "\n")
{
    for (std::cout << rem; auto const& e : r)
        std::cout << e;
    std::cout << post;
}
 
int main()
{
    constexpr std::string_view keywords{ "this,..throw,..true,..try,.." };
    constexpr std::string_view pattern{",.."};
    constexpr std::ranges::lazy_split_view lazy_split_view{keywords, pattern};
    print("base() = [", lazy_split_view.base(), "]\n"
          "substrings: ");
    for (auto const& split: lazy_split_view)
        print("[", split, "] ");
}
```

## See also
- [base](/cpp/ranges/split_view/base/)
