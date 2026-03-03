---
title: "std::add_pointer"
source_path: "cpp/types/add_pointer"
header: "<type_traits>"
category: "types"
since: "C++11"
---

If T is a [referenceable type](/cpp/meta/#Definitions) or (possibly cv-qualified) void, the member typedef type provided is typename [std::remove_reference](/cpp/types/remove_reference/)<T>::type*.

## Declarations
```cpp
template< class T >
struct add_pointer;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <type_traits>
 
template<typename F, typename Class>
void ptr_to_member_func_cvref_test(F Class::*)
{
    // F is an “abominable function type”
    using FF = std::add_pointer_t<F>;
    static_assert(std::is_same_v<F, FF>, "FF should be precisely F");
}
 
struct S
{
    void f_ref() & {}
    void f_const() const {}
};
 
int main()
{
    int i = 123;
    int& ri = i;
    typedef std::add_pointer<decltype(i)>::type IntPtr;
    typedef std::add_pointer<decltype(ri)>::type IntPtr2;
    IntPtr pi = &i;
    std::cout << "i = " << i << '\n';
    std::cout << "*pi = " << *pi << '\n';
 
    static_assert(std::is_pointer_v<IntPtr>, "IntPtr should be a pointer");
    static_assert(std::is_same_v<IntPtr, int*>, "IntPtr should be a pointer to int");
    static_assert(std::is_same_v<IntPtr2, IntPtr>, "IntPtr2 should be equal to IntPtr");
 
    typedef std::remove_pointer<IntPtr>::type IntAgain;
    IntAgain j = i;
    std::cout << "j = " << j << '\n';
 
    static_assert(!std::is_pointer_v<IntAgain>, "IntAgain should not be a pointer");
    static_assert(std::is_same_v<IntAgain, int>, "IntAgain should be equal to int");
 
    ptr_to_member_func_cvref_test(&S::f_ref);
    ptr_to_member_func_cvref_test(&S::f_const);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2101 | C++11 | the program was ill-formed if T is a function type with cv or ref | the type produced is T in this case |

## See also
- [is_pointer](/cpp/types/is_pointer/)
- [remove_pointer](/cpp/types/remove_pointer/)
