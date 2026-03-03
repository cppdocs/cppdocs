---
title: "dynamic_cast conversion"
source_path: "cpp/language/dynamic_cast"
category: "language"
---

Safely converts pointers and references to classes up, down, and sideways along the inheritance hierarchy.

## Notes
A downcast can also be performed with static_cast, which avoids the cost of the runtime check, but it is only safe if the program can guarantee (through some other logic) that the object pointed to by expression is definitely Derived.

Some forms of dynamic_cast rely on [run-time type identification](https://en.wikipedia.org/wiki/Run-time_type_information) (RTTI), that is, information about each polymorphic class in the compiled program. Compilers typically have options to disable the inclusion of this information.

## Example
```cpp
#include <iostream>
 
struct V
{
    virtual void f() {} // must be polymorphic to use runtime-checked dynamic_cast
};
 
struct A : virtual V {};
 
struct B : virtual V
{
    B(V* v, A* a)
    {
        // casts during construction (see the call in the constructor of D below)
        dynamic_cast<B*>(v); // well-defined: v of type V*, V base of B, results in B*
        dynamic_cast<B*>(a); // undefined behavior: a has type A*, A not a base of B
    }
};
 
struct D : A, B
{
    D() : B(static_cast<A*>(this), this) {}
};
 
struct Base
{
    virtual ~Base() {}
};
 
struct Derived : Base
{
    virtual void name() {}
};
 
int main()
{
    D d; // the most derived object
    A& a = d; // upcast, dynamic_cast may be used, but unnecessary
 
    [[maybe_unused]]
    D& new_d = dynamic_cast<D&>(a); // downcast
    [[maybe_unused]]
    B& new_b = dynamic_cast<B&>(a); // sidecast
 
    Base* b1 = new Base;
    if (Derived* d = dynamic_cast<Derived*>(b1); d != nullptr)
    {
        std::cout << "downcast from b1 to d successful\n";
        d->name(); // safe to call
    }
 
    Base* b2 = new Derived;
    if (Derived* d = dynamic_cast<Derived*>(b2); d != nullptr)
    {
        std::cout << "downcast from b2 to d successful\n";
        d->name(); // safe to call
    }
 
    delete b1;
    delete b2;
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1269 | C++11 | the runtime check was not performed for xvalueexpression ﻿s if target-type is an rvalue reference type | performed |
| CWG 2861 | C++98 | expression could point/refer to a type-inaccessible object | the behavior is undefined in this case |

## See also
- [const_cast](/cpp/language/const_cast/)
- [static_cast](/cpp/language/static_cast/)
- [reinterpret_cast](/cpp/language/reinterpret_cast/)
- [explicit cast](/cpp/language/explicit_cast/)
- [implicit conversions](/cpp/language/implicit_cast/)
