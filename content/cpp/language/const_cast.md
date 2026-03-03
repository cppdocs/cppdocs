---
title: "const_cast conversion"
source_path: "cpp/language/const_cast"
category: "language"
---

Converts between types with different cv-qualification.

## Notes
Pointers to functions and pointers to member functions are not subject to const_cast.

const_cast makes it possible to form a reference or pointer to non-const type that is actually referring to a [const object](/cpp/language/cv/) or a reference or pointer to non-volatile type that is actually referring to a [volatile object](/cpp/language/cv/). Modifying a const object through a non-const access path and referring to a volatile object through a non-volatile [glvalue](/cpp/language/value_category/#glvalue) results in undefined behavior.

## Example
```cpp
#include <iostream>
 
struct type
{
    int i;
 
    type(): i(3) {}
 
    void f(int v) const
    {
        // this->i = v;                 // compile error: this is a pointer to const
        const_cast<type*>(this)->i = v; // OK as long as the type object isn't const
    }
};
 
int main()
{
    int i = 3;                 // i is not declared const
    const int& rci = i;
    const_cast<int&>(rci) = 4; // OK: modifies i
    std::cout << "i = " << i << '\n';
 
    type t; // if this was const type t, then t.f(4) would be undefined behavior
    t.f(4);
    std::cout << "type::i = " << t.i << '\n';
 
    const int j = 3; // j is declared const
    [[maybe_unused]]
    int* pj = const_cast<int*>(&j);
    // *pj = 4;      // undefined behavior
 
    [[maybe_unused]]
    void (type::* pmf)(int) const = &type::f; // pointer to member function
    // const_cast<void(type::*)(int)>(pmf);   // compile error: const_cast does
                                              // not work on function pointers
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1965 | C++11 | const_cast could not bind rvalue references to array prvalues | allowed to bind such references |
| CWG 2879 | C++17 | pointer pvalue operands were materialized | they are not materialized |

## See also
- [static_cast](/cpp/language/static_cast/)
- [dynamic_cast](/cpp/language/dynamic_cast/)
- [reinterpret_cast](/cpp/language/reinterpret_cast/)
- [explicit cast](/cpp/language/explicit_cast/)
- [implicit conversions](/cpp/language/implicit_cast/)
