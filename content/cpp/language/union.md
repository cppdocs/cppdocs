---
title: "Union declaration"
source_path: "cpp/language/union"
category: "language"
---

A union is a special class type that can hold only one of its non-static [data members](/cpp/language/data_members/) at a time.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1940 | C++11 | anonymous unions only allowed non-static data members | static_assert also allowed |

## See also
- [variant](/cpp/utility/variant/)
- [C documentation](/c/language/union/)
