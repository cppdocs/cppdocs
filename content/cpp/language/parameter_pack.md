---
title: "Pack (since C++11)"
source_path: "cpp/language/parameter_pack"
category: "language"
since: "C++11"
---

A pack is a C++ entity that defines one of the following:

## Notes
This section is incompleteReason: a few words about partial specializations and other ways to access individual elements? Mention recursion vs logarithmic vs shortcuts such as fold expressions
Feature-test macro
Value
Std
Feature
__cpp_variadic_templates
200704L
(C++11)
Variadic templates
__cpp_pack_indexing
202311L
(C++26)
Pack indexing

## Example
```cpp
#include <iostream>
 
void tprintf(const char* format) // base function
{
    std::cout << format;
}
 
template<typename T, typename... Targs>
void tprintf(const char* format, T value, Targs... Fargs) // recursive variadic function
{
    for (; *format != '\0'; format++)
    {
        if (*format == '%')
        {
            std::cout << value;
            tprintf(format + 1, Fargs...); // recursive call
            return;
        }
        std::cout << *format;
    }
}
 
int main()
{
    tprintf("% world% %\n", "Hello", '!', 123);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1533 | C++11 | a pack expansion could occur in a member initializer for a member | not allowed |
| CWG 2717 | C++11 | instantiations of alignment specifiers were comma-separated | they are space-separated |

## See also
- [Function template](/cpp/language/function_template/)
- [Class template](/cpp/language/class_template/)
- [sizeof...](/cpp/language/sizeof.../)
- [C-style variadic function](/cpp/utility/variadic/)
- [Preprocessor macros](/cpp/preprocessor/replace/)
- [Fold expression](/cpp/language/fold/)
- [Pack indexing](/cpp/language/pack_indexing/)
