---
title: "std::pmr::polymorphic_allocator<T>::polymorphic_allocator"
source_path: "cpp/memory/polymorphic_allocator/polymorphic_allocator"
category: "memory"
---

Constructs a new polymorphic_allocator.

## Declarations
```cpp
polymorphic_allocator() noexcept;
```

```cpp
polymorphic_allocator( const polymorphic_allocator& other ) = default;
```

```cpp
template< class U >
polymorphic_allocator( const polymorphic_allocator<U>& other ) noexcept;
```

```cpp
polymorphic_allocator( std::pmr::memory_resource* r );
```

## Parameters
- `other`: another polymorphic_allocator to copy from
- `r`: pointer to the memory resource to use. May not be null

## Notes
Copying a container using a polymorphic_allocator will not call the allocator's copy constructor. Instead, the new container will use the return value of [select_on_container_copy_construction](/cpp/memory/polymorphic_allocator/select_on_container_copy_construction/) (a default-constructed polymorphic_allocator) as its allocator.

## See also
- [select_on_container_copy_construction](/cpp/memory/polymorphic_allocator/select_on_container_copy_construction/)
