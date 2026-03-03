---
title: "std::tuple_size<std::pair>"
source_path: "cpp/utility/pair/tuple_size"
header: "<utility>"
category: "utility"
since: "C++11"
---

The partial specialization of [std::tuple_size](/cpp/utility/tuple_size/) for pairs provides a compile-time way to obtain the number of elements in a pair, which is always 2, using tuple-like syntax.

## Declarations
```cpp
template< class T1, class T2 >
struct tuple_size<std::pair<T1, T2>>
: std::integral_constant<std::size_t, 2> { };
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <tuple>
#include <utility>
 
template<class T>
void test([[maybe_unused]]T t)
{
    [[maybe_unused]]
    int a[std::tuple_size<T>::value]; // can be used at compile time
    std::cout << std::tuple_size<T>::value << '\n'; // or at run time
}
 
int main()
{
    test(std::make_tuple(1, 2, 3.14));
    test(std::make_pair(1, 3.14));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2313 | C++11 | specializations for pair were not required to be derived from integral_constant | required |

## See also
- [Structured binding](/cpp/language/structured_binding/)
- [tuple_size](/cpp/utility/tuple_size/)
- [std::tuple_size<std::array>](/cpp/container/array/tuple_size/)
- [std::tuple_size<std::tuple>](/cpp/utility/tuple/tuple_size/)
- [std::tuple_size<std::ranges::subrange>](/cpp/ranges/subrange/tuple_size/)
- [std::ranges::subrange](/cpp/ranges/subrange/)
- [std::tuple_element<std::pair>](/cpp/utility/pair/tuple_element/)
