---
title: "Assignment operators"
source_path: "cpp/language/operator"
category: "language"
---

Assignment operators modify the value of the object.

## Declarations
```cpp
T*& operator=(T*&, T*);
```

```cpp
T*volatile & operator=(T*volatile &, T*);
```

## Example
```cpp
#include <iostream>
 
int main()
{
    int n = 0;        // not an assignment
 
    n = 1;            // direct assignment
    std::cout << n << ' ';
 
    n = {};           // zero-initialization, then assignment
    std::cout << n << ' ';
 
    n = 'a';          // integral promotion, then assignment
    std::cout << n << ' ';
 
    n = {'b'};        // explicit cast, then assignment
    std::cout << n << ' ';
 
    n = 1.0;          // floating-point conversion, then assignment
    std::cout << n << ' ';
 
//  n = {1.0};        // compiler error (narrowing conversion)
 
    int& r = n;       // not an assignment
    r = 2;            // assignment through reference
    std::cout << n << ' ';
 
    int* p;
    p = &n;           // direct assignment
    p = nullptr;      // null-pointer conversion, then assignment
    std::cout << p << ' ';
 
    struct { int a; std::string s; } obj;
    obj = {1, "abc"}; // assignment from a braced-init-list
    std::cout << obj.a << ':' << obj.s << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1527 | C++11 | for assignments to class type objects, the right operandcould be an initializer list only when the assignmentis defined by a user-defined assignment operator | removed user-definedassignment constraint |
| CWG 1538 | C++11 | E1 = {E2} was equivalent to E1 = T(E2)(T is the type of E1), this introduced a C-style cast | it is equivalentto E1 = T{E2} |
| CWG 2654 | C++20 | compound assignment operators for volatile-qualified types were inconsistently deprecated | none of themis deprecated |
| CWG 2768 | C++11 | an assignment from a non-expression initializer clauseto a scalar value would perform direct-list-initialization | performs copy-list-initialization instead |
| CWG 2901 | C++98 | the value assigned to an unsigned intobject through an int lvalue is unclear | made clear |
| P2327R1 | C++20 | bitwise compound assignment operators for volatile typeswere deprecated while being useful for some platforms | they are notdeprecated |

## See also
- [Operator precedence](/cpp/language/operator_precedence/)
- [Operator overloading](/cpp/language/operators/)
- [incrementdecrement](/cpp/language/operator_incdec/)
- [arithmetic](/cpp/language/operator_arithmetic/)
- [logical](/cpp/language/operator_logical/)
- [comparison](/cpp/language/operator_comparison/)
- [memberaccess](/cpp/language/operator_member_access/)
- [other](/cpp/language/operator_other/)
- [static_cast](/cpp/language/static_cast/)
- [dynamic_cast](/cpp/language/dynamic_cast/)
- [const_cast](/cpp/language/const_cast/)
- [cv](/cpp/language/cv/)
- [reinterpret_cast](/cpp/language/reinterpret_cast/)
- [C-style cast](/cpp/language/explicit_cast/)
- [new](/cpp/language/new/)
- [delete](/cpp/language/delete/)
- [sizeof](/cpp/language/sizeof/)
- [sizeof...](/cpp/language/sizeof.../)
- [pack](/cpp/language/parameter_pack/)
- [typeid](/cpp/language/typeid/)
- [noexcept](/cpp/language/noexcept/)
- [alignof](/cpp/language/alignof/)
- [C documentation](/c/language/operator_assignment/)
