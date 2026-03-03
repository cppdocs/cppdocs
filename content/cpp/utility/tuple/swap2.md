---
title: "std::swap(std::tuple)"
source_path: "cpp/utility/tuple/swap2"
header: "<tuple>"
category: "utility"
since: "C++20"
---

Swaps the contents of lhs and rhs. Equivalent to lhs.swap(rhs).

## Declarations
```cpp
template< class... Types >
void swap( std::tuple<Types...>& lhs,
std::tuple<Types...>& rhs ) noexcept(/* see below */);
```
_(since C++11) (until C++20)_

```cpp
template< class... Types >
constexpr void swap( std::tuple<Types...>& lhs,
std::tuple<Types...>& rhs ) noexcept(/* see below */);
```
_(since C++20)_

```cpp
template< class... Types >
constexpr void swap( const std::tuple<Types...>& lhs,
const std::tuple<Types...>& rhs ) noexcept(/* see below */);
```
_(since C++23)_

## Parameters
- `lhs, rhs`: tuples whose contents to swap

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <string>
#include <tuple>
 
int main()
{
    std::tuple<int, std::string, float> p1{42, "ABCD", 2.71}, p2;
    p2 = std::make_tuple(10, "1234", 3.14);
 
    auto print_p1_p2 = [&](auto rem)
    {
        std::cout << rem
                  << "p1 = {" << std::get<0>(p1)
                  << ", "     << std::get<1>(p1)
                  << ", "     << std::get<2>(p1) << "}, "
                  << "p2 = {" << std::get<0>(p2)
                  << ", "     << std::get<1>(p2)
                  << ", "     << std::get<2>(p2) << "}\n";
    };
 
    print_p1_p2("Before p1.swap(p2): ");
    p1.swap(p2);
    print_p1_p2("After  p1.swap(p2): ");
    swap(p1, p2);
    print_p1_p2("After swap(p1, p2): ");
}
```

## See also
- [swap](/cpp/utility/tuple/swap/)
- [std::swap(std::pair)](/cpp/utility/pair/swap2/)
- [std::swap](/cpp/utility/swap/)
