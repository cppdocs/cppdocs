---
title: "Character sets and encodings"
source_path: "cpp/language/charset"
category: "language"
---

This page describes several character sets specified by the C++ standard.

## Notes
The standard names of some character sets are changed in C++23 via [P2314R4](https://wg21.link/P2314R4).

Mapping from source file (other than a UTF-8 source file)(since C++23) characters to the basic character set(until C++23)translation character set(since C++23) during [translation phase 1](/cpp/language/translation_phases/#Phase1) is implementation-defined, so an implementation is required to document how the basic source characters are represented in source files.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 788 | C++98 | the values of the members of the execution character setswere implementation-defined, but were not locale-specific | they are locale-specific |
| CWG 1796 | C++98 | the representation of the null (wide) character inbasic execution (wide-)character set had all zero bits | only required value to be zero |

## See also
- [ASCII chart](/cpp/language/ascii/)
- [C documentation](/c/language/charset/)
