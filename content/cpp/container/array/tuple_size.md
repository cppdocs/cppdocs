---
title: "std::tuple_size<std::array>"
source_path: "cpp/container/array/tuple_size"
header: "<array>"
category: "container"
since: "C++11"
---

Provides access to the number of elements in an [std::array](/cpp/container/array/) as a compile-time constant expression.

## Declarations
```cpp
template< class T, std::size_t N >
struct tuple_size< std::array<T, N> > :
std::integral_constant<std::size_t, N>
{ };
```
_(since C++11)_

## Example
```cpp
#include <array>
 
int main()
{
    auto arr = std::to_array("ABBA");
    static_assert(std::tuple_size<decltype(arr)>{} == 5);
}
```

## See also
- [Structured binding](/cpp/language/structured_binding/)
- [tuple_size](/cpp/utility/tuple_size/)
- [std::tuple_size<std::tuple>](/cpp/utility/tuple/tuple_size/)
- [std::tuple_size<std::pair>](/cpp/utility/pair/tuple_size/)
- [std::tuple_size<std::ranges::subrange>](/cpp/ranges/subrange/tuple_size/)
- [std::ranges::subrange](/cpp/ranges/subrange/)
