---
title: "Member templates"
source_path: "cpp/language/member_template"
category: "language"
---

Template declarations ([class](/cpp/language/class_template/), [function](/cpp/language/function_template/), and [variables](/cpp/language/variable_template/)(since C++14)) can appear inside a [member specification](/cpp/language/class/) of any class, struct, or union that are not [local classes](/cpp/language/class/#Local_classes).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1878 | C++14 | operator auto was technically allowed | operator auto forbidden |
