---
title: "std::experimental::pmr::polymorphic_allocator<T>::destroy"
source_path: "cpp/experimental/polymorphic_allocator/destroy"
category: "experimental"
---

Destroys the object pointed to by p, as if by calling p->~U().

## Declarations
```cpp
template< class U >
void destroy( U* p );
```
_(library fundamentals TS)_

## Parameters
- `p`: pointer to the object being destroyed

## See also
- [destroy](/cpp/memory/allocator_traits/destroy/)
