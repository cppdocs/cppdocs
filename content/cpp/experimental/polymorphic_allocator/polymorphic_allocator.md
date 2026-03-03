---
title: "std::experimental::pmr::polymorphic_allocator<T>::polymorphic_allocator"
source_path: "cpp/experimental/polymorphic_allocator/polymorphic_allocator"
category: "experimental"
---

Constructs a new polymorphic_allocator.

## Declarations
```cpp
polymorphic_allocator() noexcept;
```

```cpp
polymorphic_allocator( const polymorphic_allocator& other ) noexcept = default;
```

```cpp
template< class U >
polymorphic_allocator( const polymorphic_allocator<U>& other ) noexcept;
```

```cpp
polymorphic_allocator( memory_resource* r );
```

## Parameters
- `other`: another polymorphic_allocator to copy from
- `r`: pointer to the memory resource to use. May not be null
