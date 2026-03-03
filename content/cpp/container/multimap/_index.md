---
title: "std::multimap"
source_path: "cpp/container/multimap"
header: "<map>"
---

std::multimap is an associative container that contains a sorted list of key-value pairs, while permitting multiple entries with the same key. Sorting is done according to the comparison function Compare, applied to the keys. Search, insertion, and removal operations have logarithmic complexity.

## Declarations
```cpp
template<
class Key,
class T,
class Compare = std::less<Key>,
class Allocator = std::allocator<std::pair<const Key, T>>
> class multimap;
```

```cpp
namespace pmr {
template<
class Key,
class T,
class Compare = std::less<Key>
> using multimap = std::multimap<Key, T, Compare,
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

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 230 | C++98 | Key was not required to be CopyConstructible(a key of type Key might not be able to be constructed) | Key is also required tobe CopyConstructible |

## See also
- [map](/cpp/container/map/)
- [unordered_multimap](/cpp/container/unordered_multimap/)
- [flat_multimap](/cpp/container/flat_multimap/)
