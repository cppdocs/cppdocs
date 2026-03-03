---
title: "std::ranges::chunk_view<V>::inner-iterator"
source_path: "cpp/ranges/chunk_view/inner_iterator"
category: "ranges"
---

The return type of [chunk_view::outer-iterator::value_type::begin](/cpp/ranges/chunk_view/outer_iterator/value_type/#begin) if V models [input_range](/cpp/ranges/input_range/).

## Declarations
```cpp
class /*inner-iterator*/
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
    auto letters = std::istringstream{"ABCDEFGHIJK"};
 
    auto chunks = std::ranges::istream_view<char>(letters)
                | std::views::chunk(4);
 
    for (auto chunk : chunks)
    {
        // chunk is an object of type chunk_view::outer_iterator::value_type
        std::cout << '[';
        for (auto inner_iter = chunk.begin(); inner_iter != std::default_sentinel;
             ++inner_iter)
            std::cout << *inner_iter;
        std::cout << "] ";
    }
    std::cout << '\n';
}
```
