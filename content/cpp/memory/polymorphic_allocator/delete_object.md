---
title: "std::pmr::polymorphic_allocator<T>::delete_object"
source_path: "cpp/memory/polymorphic_allocator/delete_object"
category: "memory"
since: "C++20"
---

Destroys the object of type U and deallocates storage allocated for it.

## Declarations
```cpp
template< class U >
void delete_object( U* p );
```
_(since C++20)_

## Parameters
- `p`: pointer to the object to destroy and deallocate

## Notes
This function was introduced for use with the fully-specialized allocator [std::pmr::polymorphic_allocator](/cpp/memory/polymorphic_allocator/)<>, but it may be useful in any specialization.

## See also
- [deallocate_bytes](/cpp/memory/polymorphic_allocator/deallocate_bytes/)
- [deallocate_object](/cpp/memory/polymorphic_allocator/deallocate_object/)
- [deallocate](/cpp/memory/allocator_traits/deallocate/)
- [deallocate](/cpp/memory/memory_resource/deallocate/)
