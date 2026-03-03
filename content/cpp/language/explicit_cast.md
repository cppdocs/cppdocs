---
title: "Explicit type conversion"
source_path: "cpp/language/explicit_cast"
category: "language"
---

Converts between types using a combination of explicit and implicit conversions.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_auto_cast
202110L
(C++23)
auto(x) and auto{x}

## Example
```cpp
#include <cassert>
#include <iostream>
 
double f = 3.14;
unsigned int n1 = (unsigned int)f; // C-style cast
unsigned int n2 = unsigned(f);     // function-style cast
 
class C1;
class C2;
C2* foo(C1* p)
{
    return (C2*)p; // casts incomplete type to incomplete type
}
 
void cpp23_decay_copy_demo()
{
    auto inc_print = [](int& x, const int& y)
    {
        ++x;
        std::cout << "x:" << x << ", y:" << y << '\n';
    };
 
    int p{1};
    inc_print(p, p); // prints x:2 y:2, because param y here is an alias of p
    int q{1};
    inc_print(q, auto{q}); // prints x:2 y:1, auto{q} (C++23) casts to prvalue,
                           // so the param y is a copy of q (not an alias of q)
}
 
// In this example, C-style cast is interpreted as static_cast
// even though it would work as reinterpret_cast
struct A {};
struct I1 : A {};
struct I2 : A {};
struct D : I1, I2 {};
 
int main()
{
    D* d = nullptr;
//  A* a = (A*)d;                   // compile-time error
    A* a = reinterpret_cast<A*>(d); // this compiles
    assert(a == nullptr);
 
    cpp23_decay_copy_demo();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1223(P2915R0) | C++11 | the addition of trailing return type introduced more ambiguities | resolves them |
| CWG 1893 | C++11 | function-style cast did not consider pack expansions | considers them |
| CWG 2351 | C++11 | void{} was ill-formed | made well-formed |
| CWG 2620 | C++98 | the resolution of ambiguous functionparameters might be misinterpreted | improved the wording |
| CWG 2828 | C++98 | a C-style cast was ill-formed if multiple interpretationsof a static_cast followed by a const_cast exist,regardless of whether these conversions are actually used | only considers theconversionspossibly being used |
| CWG 2894 | C++98 | function-style casts could create reference rvalues | can only create reference lvalues |

## See also
- [const_cast conversion](/cpp/language/const_cast/)
- [static_cast conversion](/cpp/language/static_cast/)
- [dynamic_cast conversion](/cpp/language/dynamic_cast/)
- [reinterpret_cast conversion](/cpp/language/reinterpret_cast/)
- [standard conversions](/cpp/language/implicit_cast/)
- [C documentation](/c/language/cast/)
