---
title: "C++ named requirements: Erasable (since C++11)"
source_path: "cpp/named_req/Erasable"
category: "named_req"
since: "C++11"
---

Specifies that an object of the type can be destroyed by a given [Allocator](/cpp/named_req/allocator/).

## Notes
All [standard library containers](/cpp/container/) require that their value types satisfy Erasable.

With the default allocator, this requirement is equivalent to the validity of p->~T(), which accepts class types with accessible destructors and all scalar types, but rejects array types, function types, reference types, and void.

With the default allocator, this requirement is equivalent to the validity of [std::destroy_at](/cpp/memory/destroy_at/)(p), which accepts class types with accessible destructors and all scalar types, as well as arrays thereof.

Although it is required that customized destroy is used when destroying elements of [std::basic_string](/cpp/string/basic_string/) until C++23, all implementations only used the default mechanism. The requirement is corrected by [P1072R10](https://wg21.link/P1072R10) to match existing practice.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| N3346 | C++11 | there was no requirement to specify whether a typewhose objects can be destroyed using allocators | added the requirement |

## See also
- [CopyInsertable](/cpp/named_req/copyinsertable/)
- [MoveInsertable](/cpp/named_req/moveinsertable/)
- [EmplaceConstructible](/cpp/named_req/emplaceconstructible/)
- [Destructible](/cpp/named_req/destructible/)
