---
title: "Reference initialization"
source_path: "cpp/language/reference_initialization"
category: "language"
---

Binds a reference to an object.

## Notes
References appear without initializers only in function parameter declaration, in function return type declaration, in the declaration of a class member, and with the [extern](/cpp/language/storage_duration/) specifier.

Until the resolution of [CWG issue 1696](https://cplusplus.github.io/CWG/issues/1696.html), a temporary is permitted to bound to a reference member in a constructor [initializer list](/cpp/language/initializer_list/), and it persists only until the constructor exits, not as long as the object exists. Such initialization is ill-formed since [CWG 1696](https://cplusplus.github.io/CWG/issues/1696.html), although many compilers still support it (a notable exception is clang).

## Example
```cpp
#include <sstream>
#include <utility>
 
struct S
{
    int mi;
    const std::pair<int, int>& mp; // reference member
};
 
void foo(int) {}
 
struct A {};
 
struct B : A
{
    int n;
    operator int&() { return n; }
};
 
B bar() { return B(); }
 
//int& bad_r;      // error: no initializer
extern int& ext_r; // OK
 
int main()
{
//  Lvalues
    int n = 1;
    int& r1 = n;                    // lvalue reference to the object n
    const int& cr(n);               // reference can be more cv-qualified
    volatile int& cv{n};            // any initializer syntax can be used
    int& r2 = r1;                   // another lvalue reference to the object n
//  int& bad = cr;                  // error: less cv-qualified
    int& r3 = const_cast<int&>(cr); // const_cast is needed
 
    void (&rf)(int) = foo; // lvalue reference to function
    int ar[3];
    int (&ra)[3] = ar;     // lvalue reference to array
 
    B b;
    A& base_ref = b;        // reference to base subobject
    int& converted_ref = b; // reference to the result of a conversion
 
//  Rvalues
//  int& bad = 1;        // error: cannot bind lvalue ref to rvalue
    const int& cref = 1; // bound to rvalue
    int&& rref = 1;      // bound to rvalue
 
    const A& cref2 = bar(); // reference to A subobject of B temporary
    A&& rref2 = bar();      // same
 
    int&& xref = static_cast<int&&>(n); // bind directly to n
//  int&& copy_ref = n;                 // error: can't bind to an lvalue
    double&& copy_ref = n;              // bind to an rvalue temporary with value 1.0
 
//  Restrictions on temporary lifetimes
//  std::ostream& buf_ref = std::ostringstream() << 'a';
                     // the ostringstream temporary was bound to the left operand
                     // of operator<< but its lifetime ended at the semicolon so
                     // the buf_ref is a dangling reference
 
    S a {1, {2, 3}}; // temporary pair {2, 3} bound to the reference member
                     // a.mp and its lifetime is extended to match 
                     // the lifetime of object a
 
    S* p = new S{1, {2, 3}}; // temporary pair {2, 3} bound to the reference
                             // member p->mp, but its lifetime ended at the semicolon
                             // p->mp is a dangling reference
    delete p;
 
    // Imitate [[maybe_unused]] applied to the following variables:
    [](...){}
    (
        cv, r2, r3, rf, ra, base_ref, converted_ref,
        a, cref, rref, cref2, rref2, copy_ref, xref
    );
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 391 | C++98 | initialize a reference to const-qualified type with a class typervalue might create a temporary, and a constructor of that classwas required in order to copy the rvalue into that temporary | no temporary iscreated, constructoris not required |
| CWG 450 | C++98 | a reference to const-qualified array could not beinitialized with a reference-compatible array rvalue | allowed |
| CWG 589 | C++98 | a reference could not bind directly to an array or class rvalue | allowed |
| CWG 656 | C++98 | a reference to const-qualified type initialized with a type which is notreference-compatible but has a conversion function to a reference-compatible type was bound to a temporary copied from the returnvalue (or its base class subobject) of the conversion function | bound to the returnvalue (or its base classsubobject) directly |
| CWG 1287 | C++11 | the conversion from target of class type to anotherreference-compatible type could only be implicit | allow explicitconversions |
| CWG 1295 | C++11 | a reference could bind to a bit-field xvalue | prohibited |
| CWG 1299 | C++98 | the definition of temporary was unclear | made clear |
| CWG 1571 | C++98 | user-defined conversions in indirectbinding did not consider the type of target | considered |
| CWG 1604 | C++98 | user-defined conversions were not considered in indirect binding | considered |
| CWG 2352 | C++98 | reference compatibility did not consider qualification conversions | considered |
| CWG 2481 | C++17 | cv-qualification was not added to the result typeof temporary materialization in indirect binding | added |
| CWG 2657 | C++17 | cv-qualification was not added to the result typeof temporary materialization in direct binding | added |
| CWG 2801 | C++98 | reference-related types were allowed for indirect binding | prohibited |

## See also
- [constructor](/cpp/language/initializer_list/)
- [converting constructor](/cpp/language/converting_constructor/)
- [copy assignment](/cpp/language/as_operator/)
- [copy constructor](/cpp/language/copy_constructor/)
- [explicit](/cpp/language/explicit/)
- [initialization](/cpp/language/initialization/)
- [constant initialization](/cpp/language/constant_initialization/)
- [copy initialization](/cpp/language/copy_initialization/)
- [direct initialization](/cpp/language/direct_initialization/)
- [list initialization](/cpp/language/list_initialization/)
- [move assignment](/cpp/language/move_operator/)
- [move constructor](/cpp/language/move_constructor/)
- [new](/cpp/language/new/)
