---
title: "std::shared_ptr<T>::owner_hash"
source_path: "cpp/memory/shared_ptr/owner_hash"
category: "memory"
since: "C++26"
---

Returns an unspecified value such that for any object other where owner_equal(other) is true, owner_hash() == other.owner_hash() is true.

## Declarations
```cpp
std::size_t owner_hash() const noexcept;
```
_(since C++26)_

## Return value
A value that is identical for any std::shared_ptr or std::weak_ptr object sharing the same ownership.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_smart_ptr_owner_equality
202306L
(C++26)
Enabling the use of std::shared_ptr as keys in unordered associative containers

## Example
This section is incompleteReason: example

## See also
- [owner_hash](/cpp/memory/owner_hash/)
