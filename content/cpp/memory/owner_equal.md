---
title: "std::owner_equal"
source_path: "cpp/memory/owner_equal"
header: "<memory>"
category: "memory"
since: "C++26"
---

This function object provides owner-based (as opposed to value-based) mixed-type equal comparison of both [std::weak_ptr](/cpp/memory/weak_ptr/) and [std::shared_ptr](/cpp/memory/shared_ptr/). The comparison is such that two smart pointers compare equivalent only if they are both empty or if they share ownership, even if the values of the raw pointers obtained by get() are different (e.g. because they point at different subobjects within the same object).

## Declarations
```cpp
struct owner_equal;
```
_(since C++26)_

## Parameters
- `lhs, rhs`: shared-ownership pointers to compare

## Return value
true if lhs and rhs are both empty or share ownership as determined by the owner-based equal comparison, false otherwise.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_smart_ptr_owner_equality
202306L
(C++26)
Enabling the use of std::shared_ptr and std::weak_ptr as keys in unordered associative containers

## See also
- [owner_equal](/cpp/memory/shared_ptr/owner_equal/)
- [owner_equal](/cpp/memory/weak_ptr/owner_equal/)
