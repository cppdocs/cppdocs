---
title: "std::tuple_element<std::tuple>"
source_path: "cpp/utility/tuple/tuple_element"
header: "<tuple>"
category: "utility"
since: "C++11"
---

Provides compile-time indexed access to the types of the elements of the tuple.

## Declarations
```cpp
template< std::size_t I, class... Types >
struct tuple_element< I, std::tuple<Types...> >;
```
_(since C++11)_

## Example
```cpp
#include <boost/type_index.hpp>
#include <cstddef>
#include <iostream>
#include <string>
#include <tuple>
#include <utility>
 
template<typename TupleLike, std::size_t I = 0>
void printTypes()
{
    if constexpr (I == 0)
        std::cout << boost::typeindex::type_id_with_cvr<TupleLike>() << '\n';
 
    if constexpr (I < std::tuple_size_v<TupleLike>)
    {
        using SelectedType = std::tuple_element_t<I, TupleLike>;
 
        std::cout << "  The type at index " << I << " is: "
                  << boost::typeindex::type_id_with_cvr<SelectedType>() << '\n';
        printTypes<TupleLike, I + 1>();
    }
}
 
struct MyStruct {};
 
using MyTuple = std::tuple<int, long&, const char&, bool&&,
                           std::string, volatile MyStruct>;
 
using MyPair = std::pair<char, bool&&>;
 
static_assert(std::is_same_v<std::tuple_element_t<0, MyPair>, char>);
static_assert(std::is_same_v<std::tuple_element_t<1, MyPair>, bool&&>);
 
int main()
{
    printTypes<MyTuple>();
    printTypes<MyPair>();
}
```

## See also
- [Structured binding](/cpp/language/structured_binding/)
- [tuple_element](/cpp/utility/tuple_element/)
