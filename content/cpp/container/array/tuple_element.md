---
title: "std::tuple_element<std::array>"
source_path: "cpp/container/array/tuple_element"
header: "<array>"
category: "container"
since: "C++11"
---

Provides compile-time indexed access to the type of the elements of the array using tuple-like interface.

## Declarations
```cpp
template< std::size_t I, class T, std::size_t N >
struct tuple_element< I, std::array<T, N> >;
```
_(since C++11)_

## Example
```cpp
#include <array>
#include <tuple>
#include <type_traits>
 
int main()
{
    // define array and get the type of the element at position 0
    std::array<int, 10> data{0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    using T = std::tuple_element<0, decltype(data)>::type; // int
    static_assert(std::is_same_v<T, int>);
 
    const auto const_data = data;
    using CT = std::tuple_element<0, decltype(const_data)>::type; // const int
 
    // the result of tuple_element depends on the cv-qualification of the tuple-like type
    static_assert(!std::is_same_v<T, CT>);
    static_assert(std::is_same_v<CT, const int>);
}
```

## See also
- [Structured binding](/cpp/language/structured_binding/)
- [std::tuple_element<std::tuple>](/cpp/utility/tuple/tuple_element/)
- [std::tuple_element<std::pair>](/cpp/utility/pair/tuple_element/)
