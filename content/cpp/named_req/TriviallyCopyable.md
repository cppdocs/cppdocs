---
title: "C++ named requirements: TriviallyCopyable (since C++11)"
source_path: "cpp/named_req/TriviallyCopyable"
category: "named_req"
since: "C++11"
---

Note: the standard doesn't define a named requirement with this name. This is a type category defined by the core language. It is included here as a named requirement only for consistency.

## Notes
In general, for any trivially copyable type T and an object obj1 of T, the underlying bytes of obj1 can be copied into an array of char, or unsigned char, or [std::byte](/cpp/types/byte/)(since C++17) or into obj2, a distinct object of T. Neither obj1 nor obj2 may be a potentially-overlapping subobject.

If the underlying bytes of obj1 are copied into such an array, and then the resulting content is copied back into obj1, obj1 will hold its original value. If the underlying bytes of obj1 are copied into obj2, obj2 will hold obj1's value.

Underlying bytes can be copied by [std::memcpy](/cpp/string/byte/memcpy/) or [std::memmove](/cpp/string/byte/memmove/), as long as no living volatile object is accessed.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1734 | C++11 | C++03 POD with deleted non-trivial assignment was not trivial | deleted ctors/operators allowed |
| CWG 2094 | C++11 | Volatile scalar types are not trivially copyable (CWG 1746) | made trivially copyable |

## See also
- [is_trivially_copyable](/cpp/types/is_trivially_copyable/)
