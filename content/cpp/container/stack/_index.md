---
title: "std::stack"
source_path: "cpp/container/stack"
header: "<stack>"
---

The std::stack class is a [container adaptor](/cpp/container/#Container_adaptors) that gives the programmer the functionality of a [stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) - specifically, a LIFO (last-in, first-out) data structure.

## Declarations
```cpp
template<
class T,
class Container = std::deque<T>
> class stack;
```

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_containers_ranges
202202L
(C++23)
Ranges construction and insertion for containers

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 307 | C++98 | Container could not be std::vector<bool> | allowed |
| LWG 2566 | C++98 | Missing the requirement for Container::value_type | ill-formed if T is not the same type as Container::value_type |

## See also
- [vector](/cpp/container/vector/)
- [vector<bool>](/cpp/container/vector_bool/)
- [deque](/cpp/container/deque/)
- [list](/cpp/container/list/)
