---
title: "Attribute specifier sequence (since C++11)"
source_path: "cpp/language/attributes"
category: "language"
since: "C++11"
---

Introduces implementation-defined attributes for types, objects, code, etc.

## Notes
The presence of each individual attribute on a given platform can be checked with [__has_cpp_attribute](/cpp/feature_test/#Attributes) preprocessor macro.

## Example
```cpp
[[gnu::always_inline]] [[gnu::hot]] [[gnu::const]] [[nodiscard]]
inline int f(); // declare f with four attributes
 
[[gnu::always_inline, gnu::const, gnu::hot, nodiscard]]
int f(); // same as above, but uses a single attr specifier that contains four attributes
 
// C++17:
[[using gnu : const, always_inline, hot]] [[nodiscard]]
int f[[gnu::always_inline]](); // an attribute may appear in multiple specifiers
 
int f() { return 0; }
 
int main() {}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2079 | C++11 | [[ could not appear inside an attribute argument | allowed |
| CWG 2538 | C++11 | it was unclear whether standard attributes can be syntactically ignored | prohibited |
| CWG 2695 | C++11 | it was unclear whether standard attributes can be semantically ignored | prohibited |
| P2156R1 | C++11 | every standard attribute was required to appear at most once in an attribute-list | not required |

## See also
- [__has_cpp_attribute](/cpp/feature_test/#Attributes)
- [C documentation](/c/language/attributes/)
