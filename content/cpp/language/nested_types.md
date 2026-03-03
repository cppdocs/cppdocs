---
title: "Nested classes"
source_path: "cpp/language/nested_types"
category: "language"
---

A declaration of a [class/struct](/cpp/language/class/) or [union](/cpp/language/union/) may appear within another class. Such declaration declares a nested class.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 45 | C++98 | the members of a nested class cannotaccess the enclosing class and its friends | they have the same access rights asother members of the enclosing class(also resolves CWG issues #8 and #10) |
