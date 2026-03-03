---
title: "explicit specifier"
source_path: "cpp/language/explicit"
category: "language"
since: "C++11"
---

[1 Syntax](#Syntax)

## Notes
A constructor with a single non-default parameter(until C++11) that is declared without the function specifier explicit is called a [converting constructor](/cpp/language/converting_constructor/).

Both constructors (other than [copy](/cpp/language/copy_constructor/)/[move](/cpp/language/move_constructor/)) and user-defined conversion functions may be function templates; the meaning of explicit does not change.

A ( token that follows explicit is always parsed as part of the explicit specifier:

## Example
```cpp
struct A
{
    A(int) {}      // converting constructor
    A(int, int) {} // converting constructor (C++11)
    operator bool() const { return true; }
};
 
struct B
{
    explicit B(int) {}
    explicit B(int, int) {}
    explicit operator bool() const { return true; }
};
 
int main()
{
    A a1 = 1;      // OK: copy-initialization selects A::A(int)
    A a2(2);       // OK: direct-initialization selects A::A(int)
    A a3 {4, 5};   // OK: direct-list-initialization selects A::A(int, int)
    A a4 = {4, 5}; // OK: copy-list-initialization selects A::A(int, int)
    A a5 = (A)1;   // OK: explicit cast performs static_cast
    if (a1) { }    // OK: A::operator bool()
    bool na1 = a1; // OK: copy-initialization selects A::operator bool()
    bool na2 = static_cast<bool>(a1); // OK: static_cast performs direct-initialization
 
//  B b1 = 1;      // error: copy-initialization does not consider B::B(int)
    B b2(2);       // OK: direct-initialization selects B::B(int)
    B b3 {4, 5};   // OK: direct-list-initialization selects B::B(int, int)
//  B b4 = {4, 5}; // error: copy-list-initialization does not consider B::B(int, int)
    B b5 = (B)1;   // OK: explicit cast performs static_cast
    if (b2) { }    // OK: B::operator bool()
//  bool nb1 = b2; // error: copy-initialization does not consider B::operator bool()
    bool nb2 = static_cast<bool>(b2); // OK: static_cast performs direct-initialization
 
    [](...){}(a4, a5, na1, na2, b5, nb2); // suppresses “unused variable” warnings
}
```

## See also
- [converting constructor](/cpp/language/converting_constructor/)
- [initialization](/cpp/language/initialization/)
- [copy initialization](/cpp/language/copy_initialization/)
- [direct initialization](/cpp/language/direct_initialization/)
