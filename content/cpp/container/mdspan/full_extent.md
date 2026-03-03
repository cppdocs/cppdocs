---
title: "std::full_extent, std::full_extent_t"
source_path: "cpp/container/mdspan/full_extent"
header: "<mdspan>"
category: "container"
since: "C++26"
---

1) The class std::full_extent_t is a slice specifier type that can be used in std::submdspan.

## Declarations
```cpp
struct full_extent_t { explicit full_extent_t() = default; };
```
_(since C++26)_

```cpp
inline constexpr std::full_extent_t full_extent {};
```
_(since C++26)_

## Example
```cpp
#include <mdspan>
#include <print>
 
void print(auto view)
{
    static_assert(view.rank() <= 2);
 
    if constexpr (view.rank() == 2)
    {
        for (std::size_t i = 0; i != view.extent(0); ++i)
        {
            for (std::size_t j = 0; j != view.extent(1); ++j)
                std::print("{} ", view[i, j]);
            std::println();
        }
    }
    else if constexpr (view.rank() == 1)
    {
        for (std::size_t i = 0; i != view.extent(0); ++i)
            std::print("{} ", view[i]);
        std::println();
    }
    else
        std::println("{}", view[]);
 
    std::println();
}
 
int main()
{
    const char letters []{'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'};
    const std::mdspan view(letters, 3, 3);
 
    print(view);
    print(std::submdspan(view, std::full_extent, std::full_extent));
    print(std::submdspan(view, std::full_extent, 1));
    print(std::submdspan(view, 1, std::full_extent));
    print(std::submdspan(view, 2, 1));
}
```
