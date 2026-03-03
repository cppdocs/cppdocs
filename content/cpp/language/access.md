---
title: "Access specifiers"
source_path: "cpp/language/access"
category: "language"
---

In a member-specification of a [class/struct](/cpp/language/class/) or [union](/cpp/language/union/), define the accessibility of subsequent members.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1873 | C++98 | protected members were accessible to friends of derived classes | made inaccessible |
