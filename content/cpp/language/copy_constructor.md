---
title: "Copy constructors"
source_path: "cpp/language/copy_constructor"
category: "language"
---

A copy constructor is a [constructor](/cpp/language/initializer_list/) which can be called with an argument of the same class type and copies the content of the argument without mutating the argument.

## Notes
In many situations, copy constructors are optimized out even if they would produce observable side-effects, see [copy elision](/cpp/language/copy_elision/).

## Example
```cpp
struct A
{
    int n;
    A(int n = 1) : n(n) {}
    A(const A& a) : n(a.n) {} // user-defined copy constructor
};
 
struct B : A
{
    // implicit default constructor B::B()
    // implicit copy constructor B::B(const B&)
};
 
struct C : B
{
    C() : B() {}
private:
    C(const C&); // non-copyable, C++98 style
};
 
int main()
{
    A a1(7);
    A a2(a1); // calls the copy constructor
 
    B b;
    B b2 = b;
    A a3 = b; // conversion to A& and copy constructor
 
    volatile A va(10);
    // A a4 = va; // compile error
 
    C c;
    // C c2 = c; // compile error
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1353 | C++98 | the conditions where implicitly-declared copy constructorsare undefined did not consider multi-dimensional array types | consider these types |
| CWG 2094 | C++11 | volatile members make copy non-trivial (CWG issue 496) | triviality not affected |
| CWG 2171 | C++11 | X(X&) = default was non-trivial | made trivial |
| CWG 2595 | C++20 | a copy constructor was not eligible if there isanother copy constructor which is more constrainedbut does not satisfy its associated constraints | it can be eligible in this case |

## See also
- [converting constructor](/cpp/language/converting_constructor/)
- [copy assignment](/cpp/language/as_operator/)
- [copy elision](/cpp/language/copy_elision/)
- [default constructor](/cpp/language/default_constructor/)
- [destructor](/cpp/language/destructor/)
- [explicit](/cpp/language/explicit/)
- [initialization](/cpp/language/initialization/)
- [aggregate initialization](/cpp/language/aggregate_initialization/)
- [constant initialization](/cpp/language/constant_initialization/)
- [copy initialization](/cpp/language/copy_initialization/)
- [default initialization](/cpp/language/default_initialization/)
- [direct initialization](/cpp/language/direct_initialization/)
- [initializer list](/cpp/language/initializer_list/)
- [list initialization](/cpp/language/list_initialization/)
- [reference initialization](/cpp/language/reference_initialization/)
- [value initialization](/cpp/language/value_initialization/)
- [zero initialization](/cpp/language/zero_initialization/)
- [move assignment](/cpp/language/move_operator/)
- [move constructor](/cpp/language/move_constructor/)
- [new](/cpp/language/new/)
