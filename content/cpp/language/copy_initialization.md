---
title: "Copy-initialization"
source_path: "cpp/language/copy_initialization"
category: "language"
---

Initializes an object from another object.

## Notes
Copy-initialization is less permissive than direct-initialization: [explicit constructors](/cpp/language/explicit/) are not [converting constructors](/cpp/language/converting_constructor/) and are not considered for copy-initialization.

In addition, the implicit conversion in copy-initialization must produce T directly from the initializer, while, e.g. direct-initialization expects an implicit conversion from the initializer to an argument of T's constructor.

If other is an rvalue expression, a [move constructor](/cpp/language/move_constructor/) will be selected by overload resolution and called during copy-initialization. This is still considered copy-initialization; there is no special term (e.g., move-initialization) for this case.

[Implicit conversion](/cpp/language/implicit_cast/) is defined in terms of copy-initialization: if an object of type T can be copy-initialized with expression E, then E is implicitly convertible to T.

The equals sign, =, in copy-initialization of a named variable is not related to the assignment operator. Assignment operator overloads have no effect on copy-initialization.

## Example
```cpp
#include <memory>
#include <string>
#include <utility>
 
struct A
{
    operator int() { return 12;}
};
 
struct B
{
    B(int) {}
};
 
int main()
{
    std::string s = "test";        // OK: constructor is non-explicit
    std::string s2 = std::move(s); // this copy-initialization performs a move
 
//  std::unique_ptr<int> p = new int(1); // error: constructor is explicit
    std::unique_ptr<int> p(new int(1));  // OK: direct-initialization
 
    int n = 3.14;    // floating-integral conversion
    const int b = n; // const doesn't matter
    int c = b;       // ...either way
 
    A a;
    B b0 = 12;
//  B b1 = a;       // < error: conversion from 'A' to non-scalar type 'B' requested
    B b2{a};        // < identical, calling A::operator int(), then B::B(int)
    B b3 = {a};     // <
    auto b4 = B{a}; // <
 
//  b0 = a;         // < error, assignment operator overload needed
 
    [](...){}(c, b0, b3, b4); // pretend these variables are used
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 5 | C++98 | the cv-qualification of the destination type is applied tothe temporary initialized by a converting constructor | the temporary is not cv-qualified |
| CWG 177 | C++98 | the value category of the temporary created duringcopy-initialization of a class object is unspecified | specified as rvalue |

## See also
- [copy elision](/cpp/language/copy_elision/)
- [converting constructor](/cpp/language/converting_constructor/)
- [copy assignment](/cpp/language/as_operator/)
- [copy constructor](/cpp/language/copy_constructor/)
- [default constructor](/cpp/language/default_constructor/)
- [destructor](/cpp/language/destructor/)
- [explicit](/cpp/language/explicit/)
- [initialization](/cpp/language/initialization/)
- [aggregate initialization](/cpp/language/aggregate_initialization/)
- [constant initialization](/cpp/language/constant_initialization/)
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
