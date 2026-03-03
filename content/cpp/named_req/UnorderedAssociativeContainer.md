---
title: "C++ named requirements: UnorderedAssociativeContainer (since C++11)"
source_path: "cpp/named_req/UnorderedAssociativeContainer"
category: "named_req"
since: "C++11"
---

Unordered associative containers are [Containers](/cpp/named_req/container/) that provide fast lookup of objects based on keys.
Worst case complexity is linear but on average much faster for most of the operations.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2156 | C++11 | the load factor after rehashing could only bestrictly lower than the maximum load factor | allowed to be equal |
