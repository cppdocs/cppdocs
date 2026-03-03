---
title: "Reference declaration"
source_path: "cpp/language/reference"
category: "language"
---

Declares a named variable as a reference, that is, an alias to an already-existing object or function.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_rvalue_references
200610L
(C++11)
Rvalue references

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 453 | C++98 | it was unclear which object or function a reference cannot be bound to | made clear |
| CWG 1510 | C++11 | cv-qualified references could not be formed in the operand of decltype | allowed |
| CWG 2550 | C++98 | parameters could have type “reference to void” | disallowed |
| CWG 2933 | C++98 | the behavior of accessing dangling references was unclear | made clear |
