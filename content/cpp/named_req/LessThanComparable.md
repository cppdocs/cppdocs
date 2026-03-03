---
title: "C++ named requirements: LessThanComparable"
source_path: "cpp/named_req/LessThanComparable"
category: "named_req"
---

The type must work with < operator and the result should have standard semantics.

## Notes
To satisfy this requirement, types that do not have built-in [comparison operators](/cpp/language/operator_comparison/) have to provide a [user-defined operator<](/cpp/language/operators/#Comparison_operators).

For the types that are both [EqualityComparable](/cpp/named_req/equalitycomparable/) and LessThanComparable, the C++ standard library makes a distinction between

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2114(P2167R3) | C++98 | convertibility to bool was too weak to reflect the expectation of implementations | requirements strengthened |

## See also
- [Compare](/cpp/named_req/compare/)
- [BinaryPredicate](/cpp/named_req/binarypredicate/)
- [strict_weak_order](/cpp/concepts/strict_weak_order/)
- [relation](/cpp/concepts/relation/)
