---
title: "Destructors"
source_path: "cpp/language/destructor"
category: "language"
---

A destructor is a special [member function](/cpp/language/member_functions/) that is called when the [lifetime of an object](/cpp/language/lifetime/) ends. The purpose of the destructor is to free the resources that the object may have acquired during its lifetime.

## Notes
Calling a destructor directly for an ordinary object, such as a local variable, invokes undefined behavior when the destructor is called again, at the end of scope.

In generic contexts, the destructor call syntax can be used with an object of non-class type; this is known as pseudo-destructor call: see [member access operator](/cpp/language/operator_member_access/#Built-in_member_access_operators).

## Example
```cpp
#include <iostream>
 
struct A
{
    int i;
 
    A(int num) : i(num)
    {
        std::cout << "ctor a" << i << '\n';
    }
 
    ~A()
    {
        std::cout << "dtor a" << i << '\n';
    }
};
 
A a0(0);
 
int main()
{
    A a1(1);
    A* p;
 
    { // nested scope
        A a2(2);
        p = new A(3);
    } // a2 out of scope
 
    delete p; // calls the destructor of a3
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 193 | C++98 | whether automatic objects in a destructor aredestroyed before or after the destruction of theclass's base and member subobjects was unspecified | they are destroyedbefore destroyingthose subobjects |
| CWG 344 | C++98 | the declarator syntax of destructor was defective (had thesame problem as CWG issue 194 and CWG issue 263 | changed the syntax to a specializedfunction declarator syntax |
| CWG 1241 | C++98 | static members might be destroyedright after destructor execution | only destroy non-static members |
| CWG 1353 | C++98 | the conditions where implicitly-declared destructors areundefined did not consider multi-dimensional array types | consider these types |
| CWG 1435 | C++98 | the meaning of “class name” in thedeclarator syntax of destructor was unclear | changed the syntax to a specializedfunction declarator syntax |
| CWG 2180 | C++98 | the destructor of class X called thedestructors for X's virtual direct base classes | those destructors are not called |
| CWG 2807 | C++20 | the declaration specifiers could contain consteval | prohibited |

## See also
- [copy elision](/cpp/language/copy_elision/)
- [new](/cpp/language/new/)
- [delete](/cpp/language/delete/)
