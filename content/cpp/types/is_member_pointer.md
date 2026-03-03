---
title: "std::is_member_pointer"
source_path: "cpp/types/is_member_pointer"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_member_pointer is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_member_pointer;
```
_(since C++11)_

## Example
```cpp
#include <cassert>
#include <type_traits>
 
static_assert(!std::is_member_pointer_v<int*>);
 
struct S
{
    int i{42};
    int foo() { return 0xF00; }
};
using mem_int_ptr_t = int S::*;
using mem_fun_ptr_t = int (S::*)();
static_assert(std::is_member_pointer_v<mem_int_ptr_t>);
static_assert(std::is_member_pointer_v<mem_fun_ptr_t>);
 
int main()
{
    S s;
 
    mem_int_ptr_t pm = &S::i;
    assert(s.i == s.*pm);
 
    mem_fun_ptr_t pmf = &S::foo;
    assert((s.*pmf)() == s.foo());
}
```

## See also
- [is_pointer](/cpp/types/is_pointer/)
- [is_member_object_pointer](/cpp/types/is_member_object_pointer/)
- [is_member_function_pointer](/cpp/types/is_member_function_pointer/)
