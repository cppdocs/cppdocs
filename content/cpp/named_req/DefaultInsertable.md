---
title: "C++ named requirements: DefaultInsertable (since C++11)"
source_path: "cpp/named_req/DefaultInsertable"
category: "named_req"
since: "C++11"
---

Specifies that an object of the type can be default-constructed in-place by a given allocator.

## Notes
By default, this will [value-initialize](/cpp/language/value_initialization/) the object, as by ::new((void*)p) T()(until C++20)[std::construct_at](/cpp/memory/construct_at/)(p)(since C++20).

If value-initialization is undesirable, for example, if the object is of non-class type and zeroing out is not needed, it can be avoided by providing a [custom Allocator::construct](https://stackoverflow.com/a/21028912/273767).

Although it is required that customized construct is used when constructing elements of [std::basic_string](/cpp/string/basic_string/) until C++23, all implementations only used the default mechanism. The requirement is corrected by [P1072R10](https://wg21.link/P1072R10) to match existing practice.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| N3346 | C++11 | the requirements CopyInsertable and MoveInsertableare present, but DefaultInsertable was missing | added the requirement |

## See also
- [DefaultConstructible](/cpp/named_req/defaultconstructible/)
- [CopyInsertable](/cpp/named_req/copyinsertable/)
- [MoveInsertable](/cpp/named_req/moveinsertable/)
- [EmplaceConstructible](/cpp/named_req/emplaceconstructible/)
- [Erasable](/cpp/named_req/erasable/)
