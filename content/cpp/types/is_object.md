---
title: "std::is_object"
source_path: "cpp/types/is_object"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_object is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_object;
```
_(since C++11)_

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <type_traits>
 
#define IS_OBJECT(...) \
    std::cout << std::boolalpha << std::left << std::setw(9) << #__VA_ARGS__ \
              << (std::is_object_v<__VA_ARGS__> ? " is object\n" \
                                                : " is not an object\n")
 
int main()
{
    class cls {};
 
    IS_OBJECT(void);
    IS_OBJECT(int);
    IS_OBJECT(int&);
    IS_OBJECT(int*);
    IS_OBJECT(int*&);
    IS_OBJECT(cls);
    IS_OBJECT(cls&);
    IS_OBJECT(cls*);
    IS_OBJECT(int());
    IS_OBJECT(int(*)());
    IS_OBJECT(int(&)());
}
```

## See also
- [is_scalar](/cpp/types/is_scalar/)
- [is_array](/cpp/types/is_array/)
- [is_union](/cpp/types/is_union/)
- [is_class](/cpp/types/is_class/)
