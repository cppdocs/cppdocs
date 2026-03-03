---
title: "C++ named requirements: StandardLayoutType (since C++11)"
source_path: "cpp/named_req/StandardLayoutType"
category: "named_req"
since: "C++11"
---

Specifies that a type is a standard layout type. Standard layout types are useful for communicating with code written in other programming languages.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1672 | C++11 | first non-static data member rule ignoredexistence of empty base classes | first non-static data member rulemade recursive |
| CWG 1813 | C++11 | class with a member defined in an indirect basewasn't technically standard-layout | all member declarations must bein the same class |
| CWG 2120 | C++11 | array as first member wasn't considered whencomparing the first element type with type of a base | array members are considered |

## See also
- [is_standard_layout](/cpp/types/is_standard_layout/)
- [standard-layout](/cpp/language/data_members/#Standard-layout)
