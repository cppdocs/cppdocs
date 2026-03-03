---
title: "std::flat_multiset"
source_path: "cpp/container/flat_multiset"
header: "<flat_set>"
since: "C++23"
---

The flat multiset is a [container adaptor](/cpp/container/#Container_adaptors) that gives the functionality of an associative container that stores a sorted set of objects of type Key. Unlike std::flat_set, multiple keys with equivalent values are allowed. Sorting is done using the key comparison function Compare.

## Declarations
```cpp
template<
class Key,
class Compare = std::less<Key>,
class KeyContainer = std::vector<Key>
> class flat_multiset;
```
_(since C++23)_

## Notes
The member types iterator and const_iterator may be aliases to the same type. This means defining a pair of function overloads using the two types as parameter types may violate the [One Definition Rule](/cpp/language/definition/#One_Definition_Rule). Since iterator is convertible to const_iterator, a single function with a const_iterator as parameter type will work instead.

## See also
- [flat_set](/cpp/container/flat_set/)
- [multiset](/cpp/container/multiset/)
- [unordered_multiset](/cpp/container/unordered_multiset/)
