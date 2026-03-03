---
title: "std::atomic_ref"
source_path: "cpp/atomic/atomic_ref"
header: "<atomic>"
category: "atomic"
since: "C++20"
---

The std::atomic_ref class template applies atomic operations to the object it references.

## Declarations
```cpp
template< class T >
struct atomic_ref;
```
_(since C++20)_

## Notes
Implementations may merge the specified specializations. E.g. MSVC STL merges all of them into the primary template.

When T is cv void or a function type, std::atomic_ref<T*> (i.e. std::atomic_ref<void*>, std::atomic_ref<int(*)()> etc.) does not have difference_type or any operation requiring pointer arithmeticor relational comparison(since C++26).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3508(P3323R1) | C++20 | atomic_ref<T> had unimplementable operationsif T is a const type or pointer-to-non-object type | these operations are either constainedor not provided for unsuitable T |

## See also
- [atomic](/cpp/atomic/atomic/)
