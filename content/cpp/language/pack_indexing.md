---
title: "Pack indexing (since C++26)"
source_path: "cpp/language/pack_indexing"
category: "language"
since: "C++26"
---

Accesses the element of a [pack](/cpp/language/parameter_pack/) at a specified index.

## Notes
Before C++26, Ts...[N] was a valid syntax for declaring function parameter pack of unnamed arrays of size N, where the parameter types were further adjusted to pointers. Since C++26, Ts...[1] is interpreted as a pack indexing specifier which would change the behavior below to #2. To preserve the first behavior, the function parameter pack must be named, or manually adjusted to a pack of pointer types.

## Example
```cpp
#include <tuple>
 
template <std::size_t... Indices, typename Decomposable>
constexpr auto splice(Decomposable d)
{
    auto [...elems] = d;
    return std::make_tuple(elems...[Indices]...);
}
 
struct Point
{
    int x;
    int y;
    int z;
};
 
int main() 
{
    constexpr Point p { .x = 1, .y = 4, .z = 3 };
    static_assert(splice<2, 1, 0>(p) == std::make_tuple(3, 4, 1));
    static_assert(splice<1, 1, 0, 0>(p) == std::make_tuple(4, 4, 1, 1));
}
```
