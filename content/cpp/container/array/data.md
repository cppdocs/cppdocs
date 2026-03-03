---
title: "std::array<T,N>::data"
source_path: "cpp/container/array/data"
category: "container"
---

Returns a pointer to the underlying array serving as element storage. The pointer is such that range [data(),data() +[size()](/cpp/container/array/size/)) is always a [valid range](/cpp/iterator/#Ranges), even if the container is empty (data() is not dereferenceable in that case).

## Declarations
```cpp
T* data() noexcept;
```
_(since C++11) (constexpr since C++17)_

```cpp
const T* data() const noexcept;
```
_(since C++11) (constexpr since C++17)_

## Return value
Pointer to the underlying element storage. For non-empty containers, the returned pointer compares equal to the address of the first element.

## Notes
If [size()](/cpp/container/array/size/) is 0, data() may or may not return a null pointer.

## Example
```cpp
#include <cstddef>
#include <iostream>
#include <span>
#include <array>
 
void pointer_func(const int* p, std::size_t size)
{
    std::cout << "data = ";
    for (std::size_t i = 0; i < size; ++i)
        std::cout << p[i] << ' ';
    std::cout << '\n';
}
 
void span_func(std::span<const int> data) // since C++20
{
    std::cout << "data = ";
    for (const int e : data)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::array<int, 4> container{1, 2, 3, 4};
 
    // Prefer container.data() over &container[0]
    pointer_func(container.data(), container.size());
 
    // std::span is a safer alternative to separated pointer/size.
    span_func({container.data(), container.size()});
}
```

## See also
- [front](/cpp/container/array/front/)
- [back](/cpp/container/array/back/)
- [size](/cpp/container/array/size/)
- [operator[]](/cpp/container/array/operator_at/)
- [span](/cpp/container/span/)
- [data](/cpp/iterator/data/)
