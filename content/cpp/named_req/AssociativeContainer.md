---
title: "C++ named requirements: AssociativeContainer"
source_path: "cpp/named_req/AssociativeContainer"
category: "named_req"
---

An AssociativeContainer is an ordered [Container](/cpp/named_req/container/) that provides fast lookup of objects based on keys.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 354 | C++98 | lower_bound and upper_bound did notreturn the end iterator if no element is found | they return the enditerator in this case |
| LWG 589 | C++98 | the elements that i and j referto had the type X::value_type | the elements are implicitlyconvertible to X::value_type |
