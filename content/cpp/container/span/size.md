---
title: "std::span<T,Extent>::size"
source_path: "cpp/container/span/size"
category: "container"
since: "C++20"
---

Returns the number of elements in the span.

## Declarations
```cpp
constexpr size_type size() const noexcept;
```
_(since C++20)_

## Return value
The number of elements in the span.

## Example
```cpp
#include <iostream>
#include <span>
 
void show_sizes(std::span<const int> span)
{
    std::cout
        << span                 .size() << ' ' // 8
        << span.first(7)        .size() << ' ' // 7
        << span.first<6>()      .size() << ' ' // 6
        << span.last(5)         .size() << ' ' // 5
        << span.last<4>()       .size() << ' ' // 4
        << span.subspan(2, 3)   .size() << ' ' // 3
        << span.subspan<3, 2>() .size() << ' ' // 2
        << '\n';
}
 
int main()
{
    int antique_array[]{1, 2, 3, 4, 5, 6, 7, 8};
    show_sizes(antique_array);
}
```

## See also
- [(constructor)](/cpp/container/span/span/)
- [size_bytes](/cpp/container/span/size_bytes/)
