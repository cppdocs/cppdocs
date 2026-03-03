---
title: "std::flat_set"
source_path: "cpp/container/flat_set"
header: "<flat_set>"
since: "C++23"
---

The flat set is a [container adaptor](/cpp/container/#Container_adaptors) that gives the functionality of an associative container that stores a sorted set of unique objects of type Key. Sorting is done using the key comparison function Compare.

## Declarations
```cpp
template<
class Key,
class Compare = std::less<Key>,
class KeyContainer = std::vector<Key>
> class flat_set;
```
_(since C++23)_

## Notes
The member types iterator and const_iterator may be aliases to the same type. This means defining a pair of function overloads using the two types as parameter types may violate the [One Definition Rule](/cpp/language/definition/#One_Definition_Rule). Since iterator is convertible to const_iterator, a single function with a const_iterator as parameter type will work instead.

Some advantages of flat set over other standard [container adaptors](/cpp/container/#Container_adaptors) are:

Some disadvantages of flat set are:

## See also
- [flat_multiset](/cpp/container/flat_multiset/)
- [set](/cpp/container/set/)
- [unordered_set](/cpp/container/unordered_set/)
