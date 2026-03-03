---
title: "C++ named requirements: BinaryPredicate"
source_path: "cpp/named_req/BinaryPredicate"
category: "named_req"
---

BinaryPredicate is a set of requirements expected by some of the standard library facilities from the user-provided arguments.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2114(P2167R3) | C++98 | convertibility of return types to bool was too weakto reflect the expectation of implementations | requirements strengthened |
| LWG 3031 | C++98 | requirements on const values were insufficent | requirements strengthened |
