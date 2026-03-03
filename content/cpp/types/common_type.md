---
title: "std::common_type"
source_path: "cpp/types/common_type"
header: "<type_traits>"
category: "types"
since: "C++11"
---

Determines the common type among all types T..., that is the type all T... can be implicitly converted to. If such a type exists (as determined according to the rules below), the member type names that type. Otherwise, there is no member type.

## Declarations
```cpp
template< class... T >
struct common_type;
```
_(since C++11)_

## Notes
For arithmetic types not subject to promotion, the common type may be viewed as the type of the (possibly mixed-mode) arithmetic expression such as T0() + T1() + ... + Tn().

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2141 | C++11 | the result type of the conditional operator was not decayed | decayed the result type |
| LWG 2408 | C++11 | common_type was not SFINAE-friendly | made SFINAE-friendly |
| LWG 2460 | C++11 | common_type specializations were nearly impossible to write | reduced the number ofspecializations needed |

## See also
- [common_with](/cpp/concepts/common_with/)
