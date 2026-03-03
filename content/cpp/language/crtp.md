---
title: "Curiously Recurring Template Pattern"
source_path: "cpp/language/crtp"
category: "language"
since: "C++20"
---

The [Curiously Recurring Template Pattern](https://en.wikipedia.org/wiki/Curiously_Recurring_Template_Pattern) is an idiom in which a class X derives from a class template Y, taking a template parameter Z, where Y is instantiated with Z = X. For example,

## Example
```cpp
#include <cstdio>
 
#ifndef __cpp_explicit_this_parameter // Traditional syntax
 
template <class Derived>
struct Base
{
    void name() { static_cast<Derived*>(this)->impl(); }
protected:
    Base() = default; // prohibits the creation of Base objects, which is UB
};
struct D1 : public Base<D1> { void impl() { std::puts("D1::impl()"); } };
struct D2 : public Base<D2> { void impl() { std::puts("D2::impl()"); } };
 
#else // C++23 deducing-this syntax
 
struct Base { void name(this auto&& self) { self.impl(); } };
struct D1 : public Base { void impl() { std::puts("D1::impl()"); } };
struct D2 : public Base { void impl() { std::puts("D2::impl()"); } };
 
#endif
 
int main()
{
    D1 d1; d1.name();
    D2 d2; d2.name();
}
```

## See also
- [Explicit object member functions (deducing this)](/cpp/language/member_functions/#Explicit_object_member_functions)
- [enable_shared_from_this](/cpp/memory/enable_shared_from_this/)
- [ranges::view_interface](/cpp/ranges/view_interface/)
- [view](/cpp/ranges/view/)
