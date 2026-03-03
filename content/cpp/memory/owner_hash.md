---
title: "std::owner_hash"
source_path: "cpp/memory/owner_hash"
header: "<memory>"
category: "memory"
since: "C++26"
---

This function object provides owner-based (as opposed to value-based) hashing of both [std::weak_ptr](/cpp/memory/weak_ptr/) and [std::shared_ptr](/cpp/memory/shared_ptr/).

## Declarations
```cpp
struct owner_hash;
```
_(since C++26)_

## Parameters
- `key`: shared-ownership pointer to be hashed

## Return value
A hash value that is identical for any [std::shared_ptr](/cpp/memory/shared_ptr/) or [std::weak_ptr](/cpp/memory/weak_ptr/) object sharing the same ownership.

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
- [owner_hash](/cpp/memory/shared_ptr/owner_hash/)
- [owner_hash](/cpp/memory/weak_ptr/owner_hash/)
