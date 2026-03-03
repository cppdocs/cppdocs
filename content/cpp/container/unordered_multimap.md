---
title: "std::unordered_multimap"
source_path: "cpp/container/unordered_multimap"
header: "<unordered_map>"
category: "container"
since: "C++11"
---

std::unordered_multimap is an unordered associative container that supports equivalent keys (an unordered_multimap may contain multiple copies of each key value) and that associates values of another type with the keys. The unordered_multimap class supports forward iterators. Search, insertion, and removal have average constant-time complexity.

## Declarations
```cpp
template<
class Key,
class T,
class Hash = std::hash<Key>,
class KeyEqual = std::equal_to<Key>,
class Allocator = std::allocator<std::pair<const Key, T>>
> class unordered_multimap;
```
_(since C++11)_

```cpp
namespace pmr {
template<
class Key,
class T,
class Hash = std::hash<Key>,
class Pred = std::equal_to<Key>
> using unordered_multimap =
std::unordered_multimap<Key, T, Hash, Pred,
std::pmr::polymorphic_allocator<std::pair<const Key, T>>>;
}
```
_(since C++17)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_containers_ranges
202202L
(C++23)
Ranges construction and insertion for containers

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2050 | C++11 | the definitions of reference, const_reference, pointerand const_pointer were based on allocator_type | based on value_type andstd::allocator_traits |

## See also
- [unordered_map](/cpp/container/unordered_map/)
- [multimap](/cpp/container/multimap/)
- [flat_multimap](/cpp/container/flat_multimap/)
