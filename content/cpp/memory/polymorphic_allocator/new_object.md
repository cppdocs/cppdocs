---
title: "std::pmr::polymorphic_allocator<T>::new_object"
source_path: "cpp/memory/polymorphic_allocator/new_object"
category: "memory"
since: "C++20"
---

Allocates and constructs an object of type U.

## Declarations
```cpp
template< class U, class... CtorArgs >
U* new_object( CtorArgs&&... ctor_args );
```
_(since C++20)_

## Parameters
- `ctor_args`: the arguments to forward to the constructor of U

## Return value
A pointer to the allocated and constructed object.

## Notes
This function was introduced for use with the fully-specialized allocator [std::pmr::polymorphic_allocator](/cpp/memory/polymorphic_allocator/)<>, but it may be useful in any specialization as a shortcut to avoid having to rebind from [std::pmr::polymorphic_allocator](/cpp/memory/polymorphic_allocator/)<T> to [std::pmr::polymorphic_allocator](/cpp/memory/polymorphic_allocator/)<U>, and having to call allocate, construct, and deallocate individually.

Since U is not deduced, it must be provided as a template argument when calling this function.

## See also
- [allocate_bytes](/cpp/memory/polymorphic_allocator/allocate_bytes/)
- [allocate_object](/cpp/memory/polymorphic_allocator/allocate_object/)
- [allocate](/cpp/memory/polymorphic_allocator/allocate/)
- [allocate](/cpp/memory/allocator_traits/allocate/)
- [allocate](/cpp/memory/memory_resource/allocate/)
