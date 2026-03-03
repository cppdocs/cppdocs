---
title: "std::tuple<Types...>::swap"
source_path: "cpp/utility/tuple/swap"
header: "<tuple>"
category: "utility"
since: "C++23"
---

Calls swap (which might be [std::swap](/cpp/utility/swap/), or might be found via [ADL](/cpp/language/adl/)) for each element in *this and its corresponding element in other.

## Declarations
```cpp
void swap( tuple& other ) noexcept(/* see below */);
```
_(since C++11) (constexpr since C++20)_

```cpp
constexpr void swap( const tuple& other ) noexcept(/* see below */) const;
```
_(since C++23)_

## Parameters
- `other`: tuple of values to swap

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

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2456 | C++11 | the noexcept specification is ill-formed | made to work |

## See also
- [std::swap(std::tuple)](/cpp/utility/tuple/swap2/)
- [std::swap](/cpp/utility/swap/)
- [swap](/cpp/utility/pair/swap/)
