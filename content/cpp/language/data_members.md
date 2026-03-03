---
title: "Non-static data members"
source_path: "cpp/language/data_members"
category: "language"
---

Non-static data members are declared in a [member specification](/cpp/language/class/) of a class.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_nsdmi
200809L
(C++11)
Non-static data member initializers
__cpp_aggregate_nsdmi
201304L
(C++14)
Aggregate classes with default member initializers

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 80 | C++98 | all data members cannot have the same nameas the name of the class (breaks C compatibility) | allow non-static data membersshare the class name if there isno user-declared constructor |
| CWG 190 | C++98 | when determining layout compatibility,all members were considered | only consider non-static data members |
| CWG 613 | C++98 | unevaluated uses of non-static data members not allowed | such uses are allowed |
| CWG 645 | C++98 | it was unspecified whether bit-field andnon-bit-field members are layout compatible | not layout compatible |
| CWG 1397 | C++11 | class was regarded as completein the default member initializers | default member init cannot triggerdefinition of default constructor |
| CWG 1425 | C++98 | it was unclear whether a standard-layout objectshares the same address with the first non-staticdata member or the first base class subobject | non-static data memberif present, otherwise baseclass subobject if present |
| CWG 1696 | C++98 | reference members could be initialized to temporaries(whose lifetime would end at the end of constructor) | such init is ill-formed |
| CWG 1719 | C++98 | differently cv-qualified types weren't layout-compatible | cv-quals ignored, spec improved |
| CWG 2254 | C++11 | pointer to standard-layout class with no datamembers can be reinterpret_cast to its first base class | can be reinterpret_castto any of its base classes |
| CWG 2583 | C++11 | common initial sequence did notconsider alignment requirements | considered |
| CWG 2759 | C++20 | common initial sequence could includemembers declared [[no_unique_address]] | they are not included |

## See also
- [classes](/cpp/language/classes/)
- [static members](/cpp/language/static/)
- [non-static member functions](/cpp/language/member_functions/)
- [is_standard_layout](/cpp/types/is_standard_layout/)
- [standard-layout](#Standard-layout)
- [offsetof](/cpp/types/offsetof/)
- [standard-layout](/cpp/named_req/standardlayouttype/)
