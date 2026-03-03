---
title: "C++ named requirements: EqualityComparable"
source_path: "cpp/named_req/EqualityComparable"
category: "named_req"
---

The type must work with == operator and the result should have standard semantics.

## Notes
To satisfy this requirement, types that do not have built-in [comparison operators](/cpp/language/operator_comparison/) have to provide a [user-defined operator==](/cpp/language/operators/).

For the types that are both EqualityComparable and [LessThanComparable](/cpp/named_req/lessthancomparable/), the C++ standard library makes a distinction between

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 283 | C++98 | even if T is EqualityComparable, therequirements did not apply to const T objects | they apply toconst T instead of T |
| LWG 2114(P2167R3) | C++98 | convertibility to bool was too weak to reflect the expectation of implementations | requirements strengthened |

## See also
- [equality_comparableequality_comparable_with](/cpp/concepts/equality_comparable/)
