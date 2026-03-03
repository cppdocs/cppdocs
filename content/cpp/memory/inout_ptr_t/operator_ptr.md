---
title: "std::inout_ptr_t<Smart,Pointer,Args...>::operator Pointer*, std::inout_ptr_t<Smart,Pointer,Args...>::operator void**"
source_path: "cpp/memory/inout_ptr_t/operator"
category: "memory"
since: "C++23"
aliases:
  - "/cpp/memory/inout_ptr_t/operator/"
---

Exposes the address of a Pointer or void* object to a foreign function which will generally release the ownership represented by its value and then re-initialize it.

## Declarations
```cpp
operator Pointer*() const noexcept;
```
_(since C++23)_

```cpp
operator void**() const noexcept;
```
_(since C++23)_

## Notes
If the object pointed by the return value has not been rewritten, it is equal to the value held by adapted Smart object before construction.

On common implementations, the object representation of every Pointer that is a pointer type is compatible with that of void*, and therefore these implementations typically store the void* object within the storage for the Pointer object, no additional storage needed:

If Pointer is a pointer type whose object representation is incompatible with that of void*, an additional bool flag may be needed for recording whether (1) (or (2)) has been called.

## Example
This section is incompleteReason: no example
