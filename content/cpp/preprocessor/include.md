---
title: "Source file inclusion"
source_path: "cpp/preprocessor/include"
category: "preprocessor"
---

Includes other source file into current source file at the line immediately after the directive.

## Notes
Typical implementations search only standard include directories for syntax (1). The standard C++ library and the standard C library are implicitly included in these standard include directories. The standard include directories usually can be controlled by the user through compiler options.

The intent of syntax (2) is to search for the files that are not controlled by the implementation. Typical implementations first search the directory where the current file resides then falls back to (1).

When a file is included, it is processed by [translation phases](/cpp/language/translation_phases/) 1-4, which may include, recursively, expansion of the nested #include directives, up to an implementation-defined nesting limit. To avoid repeated inclusion of the same file and endless recursion when a file includes itself, perhaps transitively, header guards are commonly used: the entire header is wrapped in

Many compilers also implement the non-standard [pragma](/cpp/preprocessor/impl/) #pragma once with similar effects: it disables processing of a file if the same file (where file identity is determined in OS-specific way) has already been included.

A sequence of characters that resembles an escape sequence in q-char-sequence or h-char-sequence might result in an error, be interpreted as the character corresponding to the escape sequence, or have a completely different meaning, depending on the implementation.

A __has_include result of 1 only means that a header or source file with the specified name exists. It does not mean that the header or source file, when included, would not cause an error or would contain anything useful. For example, on a C++ implementation that supports both C++14 and C++17 modes (and provides __has_include in its C++14 mode as a conforming extension), __has_include(<optional>) may be 1 in C++14 mode, but actually #include <optional> may cause an error.

## Example
```cpp
#if __has_include(<optional>)
    #include <optional>
    #define has_optional 1
    template<class T>
    using optional_t = std::optional<T>;
#elif __has_include(<experimental/optional>)
    #include <experimental/optional>
    #define has_optional -1
    template<class T>
    using optional_t = std::experimental::optional<T>;
#else
    #define has_optional 0
    template<class V>
    class optional_t
    {
        V v{};
        bool has{};
 
    public:
        optional_t() = default;
        optional_t(V&& v) : v(v), has{true} {}
        V value_or(V&& alt) const&
        {
            return has ? v : alt;
        }
        // etc.
    };
#endif
 
#include <iostream>
 
int main()
{
    if (has_optional > 0)
        std::cout << "<optional> is present\n";
    else if (has_optional < 0)
        std::cout << "<experimental/optional> is present\n";
    else
        std::cout << "<optional> is not present\n";
 
    optional_t<int> op;
    std::cout << "op = " << op.value_or(-1) << '\n';
    op = 42;
    std::cout << "op = " << op.value_or(-1) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 787 | C++98 | the behavior is undefined if an escape sequence isresembled in q-char-sequence or h-char-sequence | it is conditionally-supported |

## See also
- [A list of C++ Standard Library header files](/cpp/headers/)
- [C documentation](/c/preprocessor/include/)
