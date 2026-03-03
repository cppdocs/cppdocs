---
title: "std::scoped_allocator_adaptor<OuterAlloc,InnerAlloc...>::deallocate"
source_path: "cpp/memory/scoped_allocator_adaptor/deallocate"
header: "<scoped_allocator>"
category: "memory"
since: "C++11"
---

Uses the outer allocator to deallocate the storage referenced by p, by calling [std::allocator_traits](/cpp/memory/allocator_traits/)<OuterAlloc>::deallocate(outer_allocator(), p, n).

## Declarations
```cpp
void deallocate( pointer p, size_type n ) noexcept;
```
_(since C++11)_

## Parameters
- `p`: pointer to the previously allocated memory
- `n`: the number of objects for which the memory was allocated

## Return value
(none)

## See also
- [deallocate](/cpp/memory/allocator/deallocate/)
- [deallocate](/cpp/memory/allocator_traits/deallocate/)
