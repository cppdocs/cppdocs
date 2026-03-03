---
title: "std::make_tuple"
source_path: "cpp/utility/tuple/make_tuple"
header: "<tuple>"
category: "utility"
---

Creates a tuple object, deducing the target type from the types of arguments.

## Declarations
```cpp
template< class... Types >
std::tuple<VTypes...> make_tuple( Types&&... args );
```
_(since C++11) (constexpr since C++14)_

## Parameters
- `args`: zero or more arguments to construct the tuple from

## Return value
A [std::tuple](/cpp/utility/tuple/) object containing the given values, created as if by [std::tuple](/cpp/utility/tuple/)<VTypes...>([std::forward](/cpp/utility/forward/)<Types>(t)...).

## Example
```cpp
#include <iostream>
#include <tuple>
#include <functional>
 
std::tuple<int, int> f() // this function returns multiple values
{
    int x = 5;
    return std::make_tuple(x, 7); // return {x,7}; in C++17
}
 
int main()
{
    // heterogeneous tuple construction
    int n = 1;
    auto t = std::make_tuple(10, "Test", 3.14, std::ref(n), n);
    n = 7;
    std::cout << "The value of t is ("
              << std::get<0>(t) << ", "
              << std::get<1>(t) << ", "
              << std::get<2>(t) << ", "
              << std::get<3>(t) << ", "
              << std::get<4>(t) << ")\n";
 
    // function returning multiple values
    int a, b;
    std::tie(a, b) = f();
    std::cout << a << ' ' << b << '\n';
}
```

## See also
- [tie](/cpp/utility/tuple/tie/)
- [tuple](/cpp/utility/tuple/)
- [forward_as_tuple](/cpp/utility/tuple/forward_as_tuple/)
- [forwarding references](/cpp/language/reference/#Forwarding_references)
- [tuple_cat](/cpp/utility/tuple/tuple_cat/)
- [apply](/cpp/utility/apply/)
