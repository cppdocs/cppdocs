---
title: "C++ named requirements: CopyInsertable (since C++11)"
source_path: "cpp/named_req/CopyInsertable"
category: "named_req"
since: "C++11"
---

Specifies that an object of the type can be copy-constructed in-place by a given allocator.

## Notes
If A is [std::allocator](/cpp/memory/allocator/)<T>, then this will call placement new, as by ::new((void*)p) T(v)(until C++20)[std::construct_at](/cpp/memory/construct_at/)(p, v)(since C++20).

Although it is required that customized construct is used when constructing elements of [std::basic_string](/cpp/string/basic_string/) until C++23, all implementations only used the default mechanism. The requirement is corrected by [P1072R10](https://wg21.link/P1072R10) to match existing practice.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2177 | C++11 | evaluting expr did not have any postcondition | added |
| LWG 3957 | C++11 | v could denote an rvalue of type T | excluded |
