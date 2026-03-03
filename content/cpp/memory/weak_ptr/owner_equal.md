---
title: "std::weak_ptr<T>::owner_equal"
source_path: "cpp/memory/weak_ptr/owner_equal"
category: "memory"
since: "C++26"
---

Checks whether this weak_ptr and other share ownership or are both empty. The comparison is such that two smart pointers compare equivalent only if they are both empty or if they both own the same object, even if the values of the pointers obtained by get() are different (e.g. because they point at different subobjects within the same object).

## Declarations
```cpp
template< class Y >
bool owner_equal( const std::weak_ptr<Y>& other ) const noexcept;
```
_(since C++26)_

```cpp
template< class Y >
bool owner_equal( const std::shared_ptr<Y>& other ) const noexcept;
```
_(since C++26)_

## Parameters
- `other`: the std::shared_ptr or std::weak_ptr to be compared

## Return value
true if *this and other share ownership or are both empty. Otherwise, returns false.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_smart_ptr_owner_equality
202306L
(C++26)
Enabling the use of std::weak_ptr as keys in unordered associative containers

## Example
This section is incompleteReason: example

## See also
- [owner_equal](/cpp/memory/owner_equal/)
