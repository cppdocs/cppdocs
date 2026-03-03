---
title: "std::scoped_allocator_adaptor<OuterAlloc,InnerAlloc...>::allocate"
source_path: "cpp/memory/scoped_allocator_adaptor/allocate"
header: "<scoped_allocator>"
category: "memory"
since: "C++11"
---

Uses the outer allocator to allocate uninitialized storage.

## Declarations
```cpp
pointer allocate( size_type n );
```
_(since C++11)_

```cpp
pointer allocate( size_type n, const_void_pointer hint );
```
_(since C++11)_

## Parameters
- `n`: the number of objects to allocate storage for
- `hint`: pointer to a nearby memory location

## Return value
The pointer to the allocated storage.

## See also
- [allocate](/cpp/memory/allocator/allocate/)
- [allocate](/cpp/memory/allocator_traits/allocate/)
