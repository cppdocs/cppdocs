---
title: "std::dynamic_extent"
source_path: "cpp/container/span/dynamic_extent"
header: "<span>"
category: "container"
since: "C++20"
---

std::dynamic_extent is a constant of type [std::size_t](/cpp/types/size_t/) that is generally used to indicate that any type using std::dynamic_extent will dynamically store its value (e.g., size) rather than having the value statically known in the type.

## Declarations
```cpp
inline constexpr std::size_t dynamic_extent = std::numeric_limits<std::size_t>::max();
```
_(since C++20)_

## Example
```cpp
#include <array>
#include <cassert>
#include <cstddef>
#include <iostream>
#include <span>
#include <string_view>
#include <vector>
 
int main()
{
    auto print = [](std::string_view const name, std::size_t ex)
    {
        std::cout << name << ", ";
        if (std::dynamic_extent == ex)
            std::cout << "dynamic extent\n";
        else
            std::cout << "static extent = " << ex << '\n';
    };
 
    int a[]{1, 2, 3, 4, 5};
 
    std::span span1{a};
    print("span1", span1.extent);
 
    std::span<int, std::dynamic_extent> span2{a};
    print("span2", span2.extent);
 
    std::array ar{1, 2, 3, 4, 5};
    std::span span3{ar};
    print("span3", span3.extent);
 
    std::vector v{1, 2, 3, 4, 5};
    std::span span4{v};
    print("span4", span4.extent);
}
```

## See also
- [span](/cpp/container/span/)
- [extents](/cpp/container/mdspan/extents/)
