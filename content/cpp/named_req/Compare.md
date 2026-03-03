---
title: "C++ named requirements: Compare"
source_path: "cpp/named_req/Compare"
category: "named_req"
---

Compare is a set of requirements expected by some of the standard library facilities from the user-provided function object types.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2114(P2167R3) | C++98 | contextual convertibility of return types to bool did notreflect the practice of implementations | requirements corrected |
| LWG 3031 | C++98 | requirements on const values were insufficent | requirements strengthened |

## See also
- [strict_weak_order](/cpp/concepts/strict_weak_order/)
- [relation](/cpp/concepts/relation/)
- [Comparison operators](/cpp/language/operator_comparison/)
