---
title: "C++ named requirements: Hash (since C++11)"
source_path: "cpp/named_req/Hash"
category: "named_req"
since: "C++11"
---

A Hash is a function object for which the output depends only on the input and has a very low probability of yielding the same output given different input values.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2291 | C++11 | same results for same arguments were required in all cases | only required within a single execution |
