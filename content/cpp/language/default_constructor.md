---
title: "Default constructors"
source_path: "cpp/language/default_constructor"
category: "language"
---

A default constructor is a [constructor](/cpp/language/initializer_list/) which can be called with no arguments.

## Example
```cpp
struct A
{
    int x;
    A(int x = 1): x(x) {} // user-defined default constructor
};
 
struct B : A
{
    // B::B() is implicitly-defined, calls A::A()
};
 
struct C
{
    A a;
    // C::C() is implicitly-defined, calls A::A()
};
 
struct D : A
{
    D(int y) : A(y) {}
    // D::D() is not declared because another constructor exists
};
 
struct E : A
{
    E(int y) : A(y) {}
    E() = default; // explicitly defaulted, calls A::A()
};
 
struct F
{
    int& ref; // reference member
    const int c; // const member
    // F::F() is implicitly defined as deleted
};
 
// user declared copy constructor (either user-provided, deleted or defaulted)
// prevents the implicit generation of a default constructor
 
struct G
{
    G(const G&) {}
    // G::G() is implicitly defined as deleted
};
 
struct H
{
    H(const H&) = delete;
    // H::H() is implicitly defined as deleted
};
 
struct I
{
    I(const I&) = default;
    // I::I() is implicitly defined as deleted
};
 
int main()
{
    A a;
    B b;
    C c;
//  D d; // compile error
    E e;
//  F f; // compile error
//  G g; // compile error
//  H h; // compile error
//  I i; // compile error
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1353 | C++98 | the conditions where implicitly-declared default constructorsare undefined did not consider multi-dimensional array types | consider these types |
| CWG 2084 | C++11 | default member initializers had no effect on whethera defaulted default constructor of a union is deleted | they prevent the defaulted defaultconstructor from being deleted |
| CWG 2595 | C++20 | a default constructor was not eligible if there isanother default constructor which is more constrainedbut does not satisfy its associated constraints | it can be eligible in this case |
| CWG 2871 | C++98 | a default constructor would be implicitly declaredeven if there is a user-declared constructor template | no implicit declarationin this case |

## See also
- [constructor](/cpp/language/initializer_list/)
- [initialization](/cpp/language/initialization/)
- [aggregate initialization](/cpp/language/aggregate_initialization/)
- [constant initialization](/cpp/language/constant_initialization/)
- [copy initialization](/cpp/language/copy_initialization/)
- [default initialization](/cpp/language/default_initialization/)
- [direct initialization](/cpp/language/direct_initialization/)
- [list initialization](/cpp/language/list_initialization/)
- [reference initialization](/cpp/language/reference_initialization/)
- [value initialization](/cpp/language/value_initialization/)
- [zero initialization](/cpp/language/zero_initialization/)
- [new](/cpp/language/new/)
