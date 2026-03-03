---
title: "std::ranges::elements_of"
source_path: "cpp/ranges/elements_of"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

Encapsulates a [range](/cpp/ranges/range/). Specializations of elements_of act as a tag in overload sets to disambiguate when a range should be treated as a sequence rather than a single value.

## Declarations
```cpp
template< ranges::range R, class Allocator = std::allocator<std::byte> >
struct elements_of;
```
_(since C++23)_

## Example
```cpp
#include <any>
#include <generator>
#include <iostream>
#include <ranges>
#include <string_view>
 
template<bool Elementwise>
std::generator<std::any> gen(std::ranges::input_range auto&& r)
{
    if constexpr (Elementwise)
        co_yield std::ranges::elements_of(r); // yield each element of r
    else
        co_yield r;                           // yield r as a single value
}
 
int main()
{
    auto test = std::string_view{"test"};
 
    for (std::any a : gen<true>(test))
        std::cout << '[' << std::any_cast<char>(a) << "] ";
    std::cout << '\n';
 
    for (std::any a : gen<false>(test))
        std::cout << '[' << std::any_cast<std::string_view>(a) << "] ";
    std::cout << '\n';
}
```
