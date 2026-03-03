---
title: "std::inplace_vector<T,N>::data"
source_path: "cpp/container/inplace_vector/data"
category: "container"
since: "C++26"
---

Returns a pointer to the underlying array serving as element storage. The pointer is such that range [data(),data() +size()) is always a [valid range](/cpp/iterator/#Ranges), even if the container is empty (data() is not dereferenceable in that case).

## Declarations
```cpp
constexpr T* data() noexcept;
```
_(since C++26)_

```cpp
constexpr const T* data() const noexcept;
```
_(since C++26)_

## Return value
Pointer to the underlying element storage. For non-empty containers, the returned pointer compares equal to the address of the first element, that is data() == [std::addressof](/cpp/memory/addressof/)(front()) is true.

## Notes
If size() is 0, data() may or may not return a null pointer.

## Example
```cpp
#include <cstddef>
#include <iostream>
#include <span>
#include <inplace_vector>
 
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
    std::inplace_vector<int, 4> container{1, 2, 3, 4};
 
    // Prefer container.data() over &container[0]
    pointer_func(container.data(), container.size());
 
    // std::span is a safer alternative to separated pointer/size.
    span_func({container.data(), container.size()});
}
```

## See also
- [front](/cpp/container/inplace_vector/front/)
- [back](/cpp/container/inplace_vector/back/)
- [size](/cpp/container/inplace_vector/size/)
- [operator[]](/cpp/container/inplace_vector/operator_at/)
- [span](/cpp/container/span/)
- [data](/cpp/iterator/data/)
