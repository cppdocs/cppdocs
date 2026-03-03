---
title: "std::ranges::chunk_view<V>::outer-iterator"
source_path: "cpp/ranges/chunk_view/outer_iterator"
category: "ranges"
---

The return type of [chunk_view::begin](/cpp/ranges/chunk_view/begin/) if V models [input_range](/cpp/ranges/input_range/).

## Declarations
```cpp
class /*outer-iterator*/
```
_(since C++23) (exposition only*)_

## Example
```cpp
#include <iostream>
#include <iterator>
#include <ranges>
#include <sstream>
 
int main()
{
    const std::string source{"ABCDEFGHIJ"};
 
    auto letters = std::istringstream{source};
    auto chunks = std::ranges::istream_view<char>(letters)
                | std::views::chunk(4);
 
    for (auto outer_iter = chunks.begin(); outer_iter != std::default_sentinel;
         ++outer_iter)
    {
        auto chunk = *outer_iter; // chunk is an object of type
                                  // chunk_view::outer_iterator::value_type
        std::cout << '[';
        for (auto inner_iter = chunk.begin(); inner_iter != std::default_sentinel;
             ++inner_iter)
            std::cout << *inner_iter;
        std::cout << "] ";
    }
    std::cout << '\n';
 
    // The same output using range-for loops
    auto letters2 = std::istringstream{source};
    auto chunks2 = std::ranges::istream_view<char>(letters2)
                 | std::views::chunk(4);
    for (auto chunk : chunks2)
    {
        std::cout << '[';
        for (auto ch : chunk)
            std::cout << ch;
        std::cout << "] ";
    }
    std::cout << '\n';
}
```
