---
title: "std::multiset"
source_path: "cpp/container/multiset"
header: "<set>"
category: "container"
since: "C++17"
---

std::multiset is an associative container that contains a sorted set of objects of type Key. Unlike set, multiple keys with equivalent values are allowed. Sorting is done using the key comparison function Compare. Search, insertion, and removal operations have logarithmic complexity.

## Declarations
```cpp
template<
class Key,
class Compare = std::less<Key>,
class Allocator = std::allocator<Key>
> class multiset;
```

```cpp
namespace pmr {
template<
class Key,
class Compare = std::less<Key>
> using multiset = std::multiset<Key, Compare, std::pmr::polymorphic_allocator<Key>>;
}
```
_(since C++17)_

## Notes
The member types iterator and const_iterator may be aliases to the same type. This means defining a pair of function overloads using the two types as parameter types may violate the [One Definition Rule](/cpp/language/definition/#One_Definition_Rule). Since iterator is convertible to const_iterator, a single function with a const_iterator as parameter type will work instead.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 103 | C++98 | iterator allows modification of keys | iterator made constant |
| LWG 230 | C++98 | Key was not required to be CopyConstructible(a key of type Key might not be able to be constructed) | Key is also required tobe CopyConstructible |

## See also
- [set](/cpp/container/set/)
- [unordered_multiset](/cpp/container/unordered_multiset/)
- [flat_multiset](/cpp/container/flat_multiset/)
