---
title: "std::scoped_allocator_adaptor<OuterAlloc,InnerAlloc...>::destroy"
source_path: "cpp/memory/scoped_allocator_adaptor/destroy"
header: "<scoped_allocator>"
category: "memory"
since: "C++11"
---

Uses the outer allocator to call the destructor of the object pointed to by p, by calling

## Declarations
```cpp
template< class T >
void destroy( T* p );
```
_(since C++11)_

## Parameters
- `p`: pointer to the object that is going to be destroyed

## Return value
(none)

## See also
- [destroy](/cpp/memory/allocator_traits/destroy/)
- [destroy](/cpp/memory/allocator/destroy/)
