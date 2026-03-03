---
title: "std::ranges::stride_view<V>::stride_view"
source_path: "cpp/ranges/stride_view/stride_view"
category: "ranges"
since: "C++23"
---

Constructs a stride_view initializing the underlying data members:

## Declarations
```cpp
constexpr explicit stride_view( V base, ranges::range_difference_t<V> stride );
```
_(since C++23)_

## Parameters
- `base`: the source view
- `stride`: the stride value

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <ranges>
#include <string_view>
 
void print(std::string_view rem, auto v, std::string_view term = "\n")
{
    std::cout << rem << ": ";
    std::ranges::copy(v, std::ostream_iterator<int>(std::cout, " "));
    std::cout << term;
};
 
int main()
{
    auto source = std::views::iota(1, 10);
    print("source", source);
 
    for (int stride_value : std::views::iota(1, 6))
    {
        auto strided_view = std::views::stride(source, stride_value);
 
        print("stride", std::views::single(stride_value), "-> ");
        print("result", strided_view);
    }
}
```
