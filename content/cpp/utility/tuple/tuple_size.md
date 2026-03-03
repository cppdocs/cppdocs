---
title: "std::tuple_size<std::tuple>"
source_path: "cpp/utility/tuple/tuple_size"
header: "<tuple>"
category: "utility"
since: "C++11"
---

Provides access to the number of elements in a tuple as a compile-time constant expression.

## Declarations
```cpp
template< class... Types >
struct tuple_size< std::tuple<Types...> >
: std::integral_constant<std::size_t, sizeof...(Types)> { };
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <tuple>
 
template <class T>
void test(T value)
{
    int a[std::tuple_size_v<T>]; // can be used at compile time
 
    std::cout << std::tuple_size<T>{} << ' ' // or at run time
              << sizeof a << ' '
              << sizeof value << '\n';
}
 
int main()
{
    test(std::make_tuple(1, 2, 3.14));
}
```

## See also
- [Structured binding](/cpp/language/structured_binding/)
- [tuple_size](/cpp/utility/tuple_size/)
- [std::tuple_size<std::pair>](/cpp/utility/pair/tuple_size/)
- [std::tuple_size<std::array>](/cpp/container/array/tuple_size/)
- [std::tuple_size<std::ranges::subrange>](/cpp/ranges/subrange/tuple_size/)
- [std::ranges::subrange](/cpp/ranges/subrange/)
- [get(std::tuple)](/cpp/utility/tuple/get/)
