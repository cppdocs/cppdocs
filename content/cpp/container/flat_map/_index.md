---
title: "std::flat_map"
source_path: "cpp/container/flat_map"
header: "<flat_map>"
since: "C++23"
---

The flat map is a [container adaptor](/cpp/container/#Container_adaptors) that gives the functionality of an associative container that contains key-value pairs with unique keys. Keys are sorted by using the comparison function Compare.

## Declarations
```cpp
template<
class Key,
class T,
class Compare = std::less<Key>,
class KeyContainer = std::vector<Key>,
class MappedContainer = std::vector<T>
> class flat_map;
```
_(since C++23)_

## Notes
The member types iterator and const_iterator may be aliases to the same type. This means defining a pair of function overloads using the two types as parameter types may violate the [One Definition Rule](/cpp/language/definition/#One_Definition_Rule). Since iterator is convertible to const_iterator, a single function with a const_iterator as parameter type will work instead.

## See also
- [flat_multimap](/cpp/container/flat_multimap/)
- [map](/cpp/container/map/)
- [unordered_map](/cpp/container/unordered_map/)
