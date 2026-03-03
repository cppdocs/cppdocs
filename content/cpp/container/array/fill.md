---
title: "std::array<T,N>::fill"
source_path: "cpp/container/array/fill"
category: "container"
---

Assigns the value to all elements in the container.

## Declarations
```cpp
void fill( const T& value );
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `value`: the value to assign to the elements

## Return value
(none)

## Example
```cpp
#include <array>
#include <cstddef>
#include <iostream>
 
int main()
{
    constexpr std::size_t xy = 4;
 
    using Cell = std::array<unsigned char, 8>;
 
    std::array<Cell, xy * xy> board;
 
    board.fill({0xE2, 0x96, 0x84, 0xE2, 0x96, 0x80, 0, 0}); // "▄▀";
 
    for (std::size_t count{}; Cell c : board)
        std::cout << c.data() << ((++count % xy) ? "" : "\n");
}
```

## See also
- [fill](/cpp/algorithm/fill/)
- [fill_n](/cpp/algorithm/fill_n/)
- [ranges::fill](/cpp/algorithm/ranges/fill/)
