---
title: "inline specifier"
source_path: "cpp/language/inline"
category: "language"
---

The inline specifier, when used in a function's [decl-specifier-seq](/cpp/language/declarations/#Specifiers), declares the function to be an inline function.

## Notes
If an inline functionor variable(since C++17) with external linkage is defined differently in different translation units, the program is ill-formed, no diagnostic required.

The inline specifier cannot be used with a functionor variable(since C++17) declaration at block scope (inside another function).

The inline specifier cannot re-declare a functionor variable(since C++17) that was already defined in the translation unit as non-inline.

The implicitly-generated member functions and any member function declared as defaulted on its first declaration are inline just like any other function defined inside a class definition.

If an inline function is declared in different translation units, the accumulated sets of [default arguments](/cpp/language/default_arguments/) must be the same at the end of each translation unit.

In C, inline functions do not have to be declared inline in every translation unit (at most one may be non-inline or extern inline), the function definitions do not have to be identical (but the behavior of the program is unspecified if it depends on which one is called), and the function-local statics are distinct between different definitions of the same function.

See [static data members](/cpp/language/static/) for additional rules about inline static members.

Inline variables eliminate the main obstacle to packaging C++ code as header-only libraries.

## Example
```cpp
#ifndef EXAMPLE_H
#define EXAMPLE_H
 
#include <atomic>
 
// function included in multiple source files must be inline
inline int sum(int a, int b)
{
    return a + b;
}
 
// variable with external linkage included in multiple source files must be inline
inline std::atomic<int> counter(0);
 
#endif
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 281 | C++98 | a friend function declaration could use the inline specifiereven if the friended function is not an inline function | prohibit such uses |
| CWG 317 | C++98 | a function could be declared inline even if it has a non-inlinedefinition in the same translation unit before the declaration | the program is ill-formed in this case |
| CWG 765 | C++98 | a type defined in an inline function mightbe different in different translation units | such types are the samein all translation units |
| CWG 1823 | C++98 | string literals in all definitions of an inlinefunction were shared across all translation units | the requirement is removed due toconsistency and implementations |
| CWG 2531 | C++17 | a static data member could be implicitly inline even ifit was not declared constexpr on its first declaration | it is not implicitlyinline in this case |

## See also
- [C documentation](/c/language/inline/)
