---
title: "C++ named requirements: ImplicitLifetimeType"
source_path: "cpp/named_req/ImplicitLifetimeType"
category: "named_req"
---

Note: the standard doesn't define a named requirement with this name. This is a type category defined by the core language. It is included here as a named requirement only for consistency.

## Notes
Certain operations may [implicitly create](/cpp/language/objects/#Object_creation) and start the [lifetime](/cpp/language/lifetime/) of objects of implicit-lifetime types, if doing so would prevent [undefined behavior](/cpp/language/ub/). However, such operations do not start the lifetimes of subobjects of such objects that are not themselves of implicit-lifetime types.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2489 | C++20 | an operation that begins the lifetime of a char array implicitly creates objects | it does not |
