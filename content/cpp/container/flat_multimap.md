---
title: "std::flat_multimap"
source_path: "cpp/container/flat_multimap"
header: "<flat_map>"
category: "container"
since: "C++23"
---

The flat multimap is a [container adaptor](/cpp/container/#Container_adaptors) that gives the functionality of an associative container that contains key-value pairs, while permitting multiple entries with the same key value. Keys are sorted by using the comparison function Compare.

## Declarations
```cpp
template<
class Key,
class T,
class Compare = std::less<Key>,
class KeyContainer = std::vector<Key>,
class MappedContainer = std::vector<T>
> class flat_multimap;
```
_(since C++23)_

## Notes
The member types iterator and const_iterator may be aliases to the same type. This means defining a pair of function overloads using the two types as parameter types may violate the [One Definition Rule](/cpp/language/definition/#One_Definition_Rule). Since iterator is convertible to const_iterator, a single function with a const_iterator as parameter type will work instead.

## Example
This section is incompleteReason: no example

## See also
- [flat_map](/cpp/container/flat_map/)
- [multimap](/cpp/container/multimap/)
- [unordered_multimap](/cpp/container/unordered_multimap/)
