---
title: "std::remove_reference"
source_path: "cpp/types/remove_reference"
header: "<type_traits>"
category: "types"
since: "C++11"
---

If the type T is a reference type, provides the member typedef type which is the type referred to by T. Otherwise type is T.

## Declarations
```cpp
template< class T >
struct remove_reference;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <type_traits>
 
int main()
{
    std::cout << std::boolalpha;
 
    std::cout << "std::remove_reference<int>::type is int? "
              << std::is_same<int, std::remove_reference<int>::type>::value << '\n';
    std::cout << "std::remove_reference<int&>::type is int? "
              << std::is_same<int, std::remove_reference<int&>::type>::value << '\n';
    std::cout << "std::remove_reference<int&&>::type is int? "
              << std::is_same<int, std::remove_reference<int&&>::type>::value << '\n';
    std::cout << "std::remove_reference<const int&>::type is const int? "
              << std::is_same<const int,
                              std::remove_reference<const int&>::type>::value << '\n';
}
```

## See also
- [is_reference](/cpp/types/is_reference/)
- [add_lvalue_referenceadd_rvalue_reference](/cpp/types/add_reference/)
- [remove_cvref](/cpp/types/remove_cvref/)
- [std::remove_cv](/cpp/types/remove_cv/)
