---
title: "Conflicting declarations"
source_path: "cpp/language/conflicting_declarations"
category: "language"
---

Unless otherwise specified, two declarations cannot (re)introduce the same entity. The program is ill-formed if such declarations exist.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 279(P1787R6) | C++98 | it was unclear whether an unnamed class or enumeration canbe redeclared if it has a typedef name for linkage purposes | it can be redeclared |
| CWG 338(P1787R6) | C++98 | it was unclear whether an unnamed enumeration can beredeclared if it has an enumerator as a name for linkage purposes | it can be redeclared |
| CWG 1884(P1787R6) | C++98 | the restrictions applied to multipledeclarations of the same entity were unclear | made clear |
