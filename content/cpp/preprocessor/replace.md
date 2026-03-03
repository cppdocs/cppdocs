---
title: "Replacing text macros"
source_path: "cpp/preprocessor/replace"
category: "preprocessor"
---

The preprocessor supports text macro replacement. Function-like text macro replacement is also supported.

## Notes
The [function-local predefined variable __func__](/cpp/language/function/#func) is not a predefined macro, but it is usually used together with __FILE__ and __LINE__, e.g. by [assert](/cpp/error/assert/).

## Example
```cpp
#include <iostream>
 
// Make function factory and use it
#define FUNCTION(name, a) int fun_##name() { return a; }
 
FUNCTION(abcd, 12)
FUNCTION(fff, 2)
FUNCTION(qqq, 23)
 
#undef FUNCTION
#define FUNCTION 34
#define OUTPUT(a) std::cout << "output: " #a << '\n'
 
// Using a macro in the definition of a later macro
#define WORD "Hello "
#define OUTER(...) WORD #__VA_ARGS__
 
int main()
{
    std::cout << "abcd: " << fun_abcd() << '\n';
    std::cout << "fff: " << fun_fff() << '\n';
    std::cout << "qqq: " << fun_qqq() << '\n';
 
    std::cout << FUNCTION << '\n';
    OUTPUT(million); //note the lack of quotes
 
    std::cout << OUTER(World) << '\n';
    std::cout << OUTER(WORD World) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2908 | C++98 | it was unclear whether __LINE__ expands to the currentphysical line number or the current logical line number | expands to the currentphysical line number |
| LWG 294 | C++98 | a translation unit that includes a standard library header could containmacros that define names declared in other standard library headers | prohibited |
| P2621R2 | C++23 | universal character names were not allowedto be formed by token concatenation | allowed |

## See also
- [C++ documentation](/cpp/symbol_index/macro/)
- [C documentation](/c/preprocessor/replace/)
