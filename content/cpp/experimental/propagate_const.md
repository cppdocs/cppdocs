---
title: "std::experimental::propagate_const"
source_path: "cpp/experimental/propagate_const"
header: "<experimental/propagate_const>"
category: "experimental"
---

std::experimental::propagate_const is a const-propagating wrapper for pointers and pointer-like objects. It treats the wrapped pointer as a pointer to const when accessed through a const access path, hence the name.

## Declarations
```cpp
template< class T >
class propagate_const;
```
_(library fundamentals TS v2)_

## Example
```cpp
#include <experimental/propagate_const>
#include <iostream>
#include <memory>
 
struct X
{
    void g() const { std::cout << "X::g (const)\n"; }
    void g() { std::cout << "X::g (non-const)\n"; }
};
 
struct Y
{
    Y() : m_propConstX(std::make_unique<X>()), m_autoPtrX(std::make_unique<X>()) {}
 
    void f() const
    {
        std::cout << "Y::f (const)\n";
        m_propConstX->g();
        m_autoPtrX->g();
    }
 
    void f()
    {
        std::cout << "Y::f (non-const)\n";
        m_propConstX->g();
        m_autoPtrX->g();
    }
 
    std::experimental::propagate_const<std::unique_ptr<X>> m_propConstX;
    std::unique_ptr<X> m_autoPtrX;
};
 
int main()
{
    Y y;
    y.f();
 
    const Y cy;
    cy.f();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3136 | LFTSv2 | meaningless T like int* const, void*, or const PtrLike were allowed | disallowed |
