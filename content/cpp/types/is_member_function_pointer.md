---
title: "std::is_member_function_pointer"
source_path: "cpp/types/is_member_function_pointer"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_member_function_pointer is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_member_function_pointer;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
 
class A
{
public:
    void member() {}
};
 
int main()
{
    // fails at compile time if A::member is a data member and not a function
    static_assert(std::is_member_function_pointer<decltype(&A::member)>::value,
                  "A::member is not a member function."); 
}
```

## See also
- [is_pointer](/cpp/types/is_pointer/)
- [is_member_object_pointer](/cpp/types/is_member_object_pointer/)
- [is_member_pointer](/cpp/types/is_member_pointer/)
