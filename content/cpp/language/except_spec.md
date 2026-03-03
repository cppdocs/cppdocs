---
title: "Dynamic exception specification (until C++17)"
source_path: "cpp/language/except_spec"
category: "language"
---

Lists the exceptions that a function might directly or indirectly throw.

## Notes
Clang considers the rule of instantiation of dynamic exception specification is changed in C++11 by [CWG1330](https://cplusplus.github.io/CWG/issues/1330.html), see [LLVM #56349](https://github.com/llvm/llvm-project/issues/56439).

## Example
```cpp
#include <cstdlib>
#include <exception>
#include <iostream>
 
class X {};
class Y {};
class Z : public X {};
class W {};
 
void f() throw(X, Y) 
{
    bool n = false;
 
    if (n)
        throw X(); // OK, would call std::terminate()
    if (n)
        throw Z(); // also OK
 
    throw W(); // will call std::unexpected()
}
 
void handler()
{
    std::cerr << "That was unexpected!\n"; // flush needed
    std::abort();
}
 
int main()
{
    std::set_unexpected(handler);
    f();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 25 | C++98 | the behavior of assignment and initializationbetween pointers to members with differentexception specifications was unspecified | apply the restrictionfor function pointersand references |
| CWG 973 | C++98 | exception specification may contain functions types, but thecorresponding function pointer conversion was not specified | specified |
| CWG 1330 | C++98 | an exception specification might be eagerly instantiated | it is only instantiated only if needed |
| CWG 1267 | C++11 | rvalue reference types were allowed in exception specifications | not allowed |
| CWG 1351 | C++98C++11 | default argument (C++98) and default member initializer(C++11) were ignored in implicit exception specification | made considered |
| CWG 1777 | C++11 | throw(T...) was not a non-throwingspecification even if T is an empty pack | it is non-throwingif the pack is empty |
| CWG 2191 | C++98 | the set of potential exceptions of a typeid expressionmight contain bad_typeid even if it cannot be thrown | contains bad_typeidonly if it can be thrown |

## See also
- [noexcept specifier](/cpp/language/noexcept_spec/)
