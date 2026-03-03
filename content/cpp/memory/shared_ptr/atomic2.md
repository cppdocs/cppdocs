---
title: "std::atomic<std::shared_ptr>"
source_path: "cpp/memory/shared_ptr/atomic2"
header: "<memory>"
category: "memory"
since: "C++20"
---

The partial template specialization of [std::atomic](/cpp/atomic/atomic/) for [std::shared_ptr](/cpp/memory/shared_ptr/)<T> allows users to manipulate shared_ptr objects atomically.

## Declarations
```cpp
template< class T >
struct std::atomic<std::shared_ptr<T>>;
```
_(since C++20)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_atomic_shared_ptr
201711L
(C++20)
std::atomic<std::shared_ptr>

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3661 | C++20 | atomic<shared_ptr<T>> was not constant-initializable from nullptr | made constant-initializable |
| LWG 3893 | C++20 | LWG3661 made atomic<shared_ptr<T>> not assignable from nullptr_t | assignability restored |

## See also
- [atomic](/cpp/atomic/atomic/)
