---
title: "C++ named requirements: NullablePointer (since C++11)"
source_path: "cpp/named_req/NullablePointer"
category: "named_req"
since: "C++11"
---

Specifies that the type is a pointer-like object which can be compared to [std::nullptr_t](/cpp/types/nullptr_t/) objects.

## Notes
Note that dereferencing (operator* or operator->) is not required for a NullablePointer type. A minimalistic type that satisfies these requirements is

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2114(P2167R3) | C++11 | contextual convertibility to bool was too weak to reflect the expectation of implementations | requirements strengthened |
