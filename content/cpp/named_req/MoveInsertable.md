---
title: "C++ named requirements: MoveInsertable (since C++11)"
source_path: "cpp/named_req/MoveInsertable"
category: "named_req"
since: "C++11"
---

Specifies that an object of the type can be constructed into uninitialized storage from an rvalue of that type by a given allocator.

## Notes
If A is [std::allocator](/cpp/memory/allocator/)<T>, then this will call placement new, as by ::new((void*)p) T(rv)(until C++20)[std::construct_at](/cpp/memory/construct_at/)(p, rv)(since C++20). This effectively requires T to be move constructible.

If [std::allocator](/cpp/memory/allocator/)<T> or a similar allocator is used, a class does not have to implement a [move constructor](/cpp/language/move_constructor/) to satisfy this type requirement: a [copy constructor](/cpp/language/copy_constructor/) that takes a const T& argument can bind rvalue expressions. If a MoveInsertable class implements a move constructor, it may also implement [move semantics](/cpp/utility/move/) to take advantage of the fact that the value of rv after construction is unspecified.

Although it is required that customized construct is used when constructing elements of [std::basic_string](/cpp/string/basic_string/) until C++23, all implementations only used the default mechanism. The requirement is corrected by [P1072R10](https://wg21.link/P1072R10) to match existing practice.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2177 | C++11 | evaluting expr did not have any postcondition | added |

## See also
- [CopyInsertable](/cpp/named_req/copyinsertable/)
