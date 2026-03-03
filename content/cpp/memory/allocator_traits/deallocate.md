---
title: "std::allocator_traits<Alloc>::deallocate"
source_path: "cpp/memory/allocator_traits/deallocate"
header: "<memory>"
category: "memory"
---

Uses the allocator a to deallocate the storage referenced by p, by calling a.deallocate(p, n).

## Declarations
```cpp
static void deallocate( Alloc& a, pointer p, size_type n );
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `a`: allocator to use
- `p`: pointer to the previously allocated storage
- `n`: the number of objects the storage was allocated for

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [allocate](/cpp/memory/allocator_traits/allocate/)
- [deallocate](/cpp/memory/allocator/deallocate/)
