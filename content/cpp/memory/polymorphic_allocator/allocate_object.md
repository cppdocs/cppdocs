---
title: "std::pmr::polymorphic_allocator<T>::allocate_object"
source_path: "cpp/memory/polymorphic_allocator/allocate_object"
category: "memory"
since: "C++20"
---

Allocates storage for n objects of type U using the underlying memory resource.

## Declarations
```cpp
template< class U >
U* allocate_object( std::size_t n = 1 );
```
_(since C++20)_

## Parameters
- `n`: the number of objects to allocate storage for

## Return value
A pointer to the allocated storage.

## Notes
This function was introduced for use with the fully-specialized allocator [std::pmr::polymorphic_allocator](/cpp/memory/polymorphic_allocator/)<>, but it may be useful in any specialization as a shortcut to avoid having to rebind from [std::pmr::polymorphic_allocator](/cpp/memory/polymorphic_allocator/)<T> to [std::pmr::polymorphic_allocator](/cpp/memory/polymorphic_allocator/)<U>.

Since U is not deduced, it must be provided as a template argument when calling this function.

## See also
- [allocate_bytes](/cpp/memory/polymorphic_allocator/allocate_bytes/)
- [new_object](/cpp/memory/polymorphic_allocator/new_object/)
- [allocate](/cpp/memory/polymorphic_allocator/allocate/)
- [allocate](/cpp/memory/allocator_traits/allocate/)
- [allocate](/cpp/memory/memory_resource/allocate/)
