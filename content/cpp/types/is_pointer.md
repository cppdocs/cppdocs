---
title: "std::is_pointer"
source_path: "cpp/types/is_pointer"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_pointer is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_pointer;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
 
int main()
{
    struct A
    {
        int m;
        void f() {}
    };
 
    int A::*mem_data_ptr = &A::m;     // a pointer to member data
    void (A::*mem_fun_ptr)() = &A::f; // a pointer to member function
 
    static_assert(
           ! std::is_pointer<A>::value
        && ! std::is_pointer_v<A>    // same thing as above, but in C++17!
        && ! std::is_pointer<A>()    // same as above, using inherited operator bool
        && ! std::is_pointer<A>{}    // ditto
        && ! std::is_pointer<A>()()  // same as above, using inherited operator()
        && ! std::is_pointer<A>{}()  // ditto
        &&   std::is_pointer_v<A*>
        &&   std::is_pointer_v<A const* volatile>
        && ! std::is_pointer_v<A&>
        && ! std::is_pointer_v<decltype(mem_data_ptr)>
        && ! std::is_pointer_v<decltype(mem_fun_ptr)>
        &&   std::is_pointer_v<void*>
        && ! std::is_pointer_v<int>
        &&   std::is_pointer_v<int*>
        &&   std::is_pointer_v<int**>
        && ! std::is_pointer_v<int[10]>
        && ! std::is_pointer_v<std::nullptr_t>
        &&   std::is_pointer_v<void (*)()>
    );
}
```

## See also
- [is_member_pointer](/cpp/types/is_member_pointer/)
- [is_member_object_pointer](/cpp/types/is_member_object_pointer/)
- [is_member_function_pointer](/cpp/types/is_member_function_pointer/)
- [is_array](/cpp/types/is_array/)
- [is_scalar](/cpp/types/is_scalar/)
