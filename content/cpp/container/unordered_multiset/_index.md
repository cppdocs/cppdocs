---
title: "std::unordered_multiset"
source_path: "cpp/container/unordered_multiset"
header: "<unordered_set>"
since: "C++11"
---

std::unordered_multiset is an associative container that contains set of possibly non-unique objects of type Key. Search, insertion, and removal have average constant-time complexity.

## Declarations
```cpp
template<
class Key,
class Hash = std::hash<Key>,
class KeyEqual = std::equal_to<Key>,
class Allocator = std::allocator<Key>
> class unordered_multiset;
```
_(since C++11)_

```cpp
namespace pmr {
template<
class Key,
class Hash = std::hash<Key>,
class Pred = std::equal_to<Key>
> using unordered_multiset = std::unordered_multiset<Key, Hash, Pred,
std::pmr::polymorphic_allocator<Key>>;
}
```
_(since C++17)_

## Notes
The member types iterator and const_iterator may be aliases to the same type. This means defining a pair of function overloads using the two types as parameter types may violate the [One Definition Rule](/cpp/language/definition/#One_Definition_Rule). Since iterator is convertible to const_iterator, a single function with a const_iterator as parameter type will work instead.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2050 | C++11 | the definitions of reference, const_reference, pointerand const_pointer were based on allocator_type | based on value_type andstd::allocator_traits |

## See also
- [unordered_set](/cpp/container/unordered_set/)
- [multiset](/cpp/container/multiset/)
- [flat_multiset](/cpp/container/flat_multiset/)
