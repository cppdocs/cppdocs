---
title: "Language linkage"
source_path: "cpp/language/language_linkage"
category: "language"
---

Provides for linkage between program units written in different programming languages.

## Notes
Language specifications can only appear in [namespace scope](/cpp/language/scope/#Namespace_scope).

The braces of the language specification do not establish a scope.

When language specifications nest, the innermost specification is the one that is in effect.

A declaration directly contained in a language linkage specification is treated as if it contains the [extern specifier](/cpp/language/storage_duration/) for the purpose of determining the [linkage](/cpp/language/storage_duration/#Linkage) of the declared name and whether it is a [definition](/cpp/language/definition/).

extern "C" makes it possible to include header files containing declarations of C library functions in a C++ program, but if the same header file is shared with a C program, extern "C" (which is not allowed in C) must be hidden with an appropriate [#ifdef](/cpp/preprocessor/conditional/), typically [__cplusplus](/cpp/preprocessor/replace/#Predefined_macros):

The only modern compiler that differentiates function types with "C" and "C++" language linkages is Oracle Studio, others do not permit overloads that are only different in language linkage, including the overload sets required by the C++ standard ([std::qsort](/cpp/algorithm/qsort/), [std::bsearch](/cpp/algorithm/bsearch/), [std::signal](/cpp/utility/program/signal/), [std::atexit](/cpp/utility/program/atexit/), and [std::at_quick_exit](/cpp/utility/program/at_quick_exit/)): [GCC bug 2316](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=2316), [Clang bug 6277](https://bugs.llvm.org/show_bug.cgi?id=6277), [CWG issue 1555](https://cplusplus.github.io/CWG/issues/1555.html).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 4 | C++98 | names with internal linkage can have language linkages | limited to names with external linkage |
| CWG 341 | C++98 | a function with "C" language linkage canhave the same name as a global variable | the program is ill-formed in this case(no diagnostic required if theyappear in different translation units) |
| CWG 564 | C++98 | the program was ill-formed if two declarationsonly differ in language linkage specifications(i.e. different string literals following 'extern') | the actual language linkages given bythe declarations are compared instead |
| CWG 2460 | C++20 | friend functions with a trailing requires clauseand "C" language linkage had conflict behaviors | "C" language linkageis ignored in this case |
| CWG 2483 | C++98 | the linkage of the types of static member functionsappear in "C" language blocks was "C++" | the linkage is "C" |
