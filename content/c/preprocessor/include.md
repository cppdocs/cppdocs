---
title: "Source file inclusion"
source_path: "c/preprocessor/include"
category: "c"
---

Includes another source file into the current source file at the line immediately after the directive.

## Notes
Typical implementations search only standard include directories for syntax (1). The standard C library is implicitly included in these standard include directories. The standard include directories usually can be controlled by the user through compiler options.

The intent of syntax (2) is to search for the files that are not controlled by the implementation. Typical implementations first search the directory where the current file resides then falls back to (1).

When a file is included, it is processed by [translation phases](/c/language/translation_phases/) 1-4, which may include, recursively, expansion of the nested #include directives, up to an implementation-defined nesting limit. To avoid repeated inclusion of the same file and endless recursion when a file includes itself, perhaps transitively, header guards are commonly used: the entire header is wrapped in

Many compilers also implement the non-standard [pragma](/c/preprocessor/impl/) #pragma once with similar effects: it disables processing of a file if the same file (where file identity is determined in OS-specific way) has already been included.

A __has_include result of 1 only means that a header or source file with the specified name exists. It does not mean that the header or source file, when included, would not cause an error or would contain anything useful.

## Example
This section is incompleteReason: no example

## See also
- [A list of C Standard Library header files](/c/header/)
- [C++ documentation](/cpp/preprocessor/include/)
