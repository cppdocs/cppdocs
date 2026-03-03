---
title: "operator==,!=(std::experimental::pmr::polymorphic_allocator)"
source_path: "cpp/experimental/polymorphic_allocator/operator"
category: "experimental"
---

Compares two polymorphic allocators. Two polymorphic allocators compare equal if their underlying memory resource compares equal.

## Declarations
```cpp
template< class T1, class T2 >
bool operator==( const polymorphic_allocator<T1>& lhs, const polymorphic_allocator<T2>& rhs ) noexcept;
```

```cpp
template< class T1, class T2 >
bool operator!=( const polymorphic_allocator<T1>& lhs, const polymorphic_allocator<T2>& rhs ) noexcept;
```

## Parameters
- `lhs, rhs`: polymorphic allocators to compare
