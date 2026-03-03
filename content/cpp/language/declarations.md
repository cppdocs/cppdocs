---
title: "Declarations"
source_path: "cpp/language/declarations"
category: "language"
since: "C++11"
---

Declarations are how names are introduced (or re-introduced) into the C++ program. Not all declarations actually declare anything, and each kind of entity is declared differently. [Definitions](/cpp/language/definition/) are declarations that are sufficient to use the entity identified by the name.

## Notes
When a block-declaration appears [inside a block](/cpp/language/statements/#Compound_statements), and an identifier introduced by a declaration was previously declared in an outer block, the [outer declaration is hidden](/cpp/language/scope/) for the remainder of the block.

If a declaration introduces a variable with automatic storage duration, it is initialized when its declaration statement is executed. All automatic variables declared in a block are destroyed on exit from the block (regardless how the block is exited: via [exception](/cpp/language/exceptions/), [goto](/cpp/language/goto/), or by reaching its end), in order opposite to their order of initialization.

## Example
```cpp
#include <type_traits>
 
struct S
{
    int member;
    // decl-specifier-seq is "int"
    // declarator is "member"
} obj, *pObj(&obj);
// decl-specifier-seq is "struct S { int member; }"
// declarator "obj" declares an object of type S
// declarator "*pObj" declares a pointer to S,
//     and initializer "(&obj)" initializes it
 
int i = 1, *p = nullptr, f(), (*pf)(double);
// decl-specifier-seq is "int"
// declarator "i" declares a variable of type int,
//     and initializer "= 1" initializes it
// declarator "*p" declares a variable of type int*,
//     and initializer "= nullptr" initializes it
// declarator "f()" declares (but doesn't define)
//     a function taking no arguments and returning int
// declarator "(*pf)(double)" declares a pointer to function
//     taking double and returning int
 
int (*(*var1)(double))[3] = nullptr;
// decl-specifier-seq is "int"
// declarator is "(*(*var1)(double))[3]"
// initializer is "= nullptr"
 
// 1. declarator "(*(*var1)(double))[3]" is an array declarator:
//    Type declared is: "(*(*var1)(double))" array of 3 elements
// 2. declarator "(*(*var1)(double))" is a pointer declarator:
//    Type declared is: "(*var1)(double)" pointer to array of 3 elements
// 3. declarator "(*var1)(double)" is a function declarator:
//    Type declared is: "(*var1)" function taking "(double)",
//    returning pointer to array of 3 elements.
// 4. declarator "(*var1)" is a pointer declarator:
//    Type declared is: "var1" pointer to function taking "(double)",
//    returning pointer to array of 3 elements.
// 5. declarator "var1" is an identifier.
// This declaration declares the object var1 of type "pointer to function
// taking double and returning pointer to array of 3 elements of type int"
// The initializer "= nullptr" provides the initial value of this pointer.
 
// C++11 alternative syntax:
auto (*var2)(double) -> int (*)[3] = nullptr;
// decl-specifier-seq is "auto"
// declarator is "(*var2)(double) -> int (*)[3]"
// initializer is "= nullptr"
 
// 1. declarator "(*var2)(double) -> int (*)[3]" is a function declarator:
//    Type declared is: "(*var2)" function taking "(double)", returning "int (*)[3]"
// ...
 
int main()
{
    static_assert(std::is_same_v<decltype(var1), decltype(var2)>);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 482 | C++98 | the declarators of redeclarations could not be qualified | qualified declarators allowed |
| CWG 569 | C++98 | a single standalone semicolon was not a valid declaration | it is an empty declaration,which has no effect |
| CWG 1830 | C++98 | repetition of a function specifier in a decl-specifier-seq was allowed | repetition is forbidden |

## See also
- [C documentation](/c/language/declarations/)
