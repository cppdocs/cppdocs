---
title: "std::is_placeholder"
source_path: "cpp/utility/functional/is_placeholder"
header: "<functional>"
category: "utility"
since: "C++11"
---

If T is the type of a standard placeholder (_1, _2, _3, ...), then this template is derived from [std::integral_constant](/cpp/types/integral_constant/)<int, 1>, [std::integral_constant](/cpp/types/integral_constant/)<int, 2>, [std::integral_constant](/cpp/types/integral_constant/)<int, 3>, respectively.

## Declarations
```cpp
template< class T >
struct is_placeholder;
```
_(since C++11)_

## Example
```cpp
#include <functional>
#include <iostream>
#include <type_traits>
 
struct My_2 {} my_2;
 
namespace std
{
    template<>
    struct is_placeholder<My_2> : public integral_constant<int, 2> {};
}
 
int f(int n1, int n2)
{
    return n1 + n2;
}
 
int main()
{
    std::cout << "Standard placeholder _5 is for the argument number "
              << std::is_placeholder_v<decltype(std::placeholders::_5)>
              << '\n';
 
    auto b = std::bind(f, my_2, 2);
    std::cout << "Adding 2 to 11 selected with a custom placeholder gives " 
              << b(10, 11) // the first argument, namely 10, is ignored
              << '\n';
}
```

## See also
- [bind](/cpp/utility/functional/bind/)
- [_1, _2, _3, _4, ...](/cpp/utility/functional/placeholders/)
