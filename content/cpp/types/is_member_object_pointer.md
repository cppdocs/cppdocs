---
title: "std::is_member_object_pointer"
source_path: "cpp/types/is_member_object_pointer"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_member_object_pointer is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_member_object_pointer;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <type_traits>
 
int main()
{
    class C {};
    std::cout << "Is member object pointer?\n" << std::boolalpha
              << std::is_member_object_pointer_v<int(C::*)>
              << ": int(C::*)\n"
              << std::is_member_object_pointer_v<int(C::*)()>
              << ": int(C::*)()\n";
}
```

## See also
- [is_pointer](/cpp/types/is_pointer/)
- [is_member_pointer](/cpp/types/is_member_pointer/)
- [is_member_function_pointer](/cpp/types/is_member_function_pointer/)
