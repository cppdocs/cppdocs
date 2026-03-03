---
title: "Templates"
source_path: "cpp/language/templates"
category: "language"
---

A template is a C++ entity that defines one of the following:

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2293 | C++98 | the rules of determining whether a templateidentifier is valid were not provided | provided |
| CWG 2682 | C++98C++14 | the definitions of templated function/template class(C++98)/templated variable (C++14) were missing | added |
| P2308R1 | C++98 | two template identifiers were different if theircorresponding non-type template argumentsare not template-argument-equivalent | they are different if their correspondingnon-type template parameter valuesare not template-argument-equivalent |

## See also
- [C documentation](/c/language/generic/)
