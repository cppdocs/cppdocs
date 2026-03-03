---
title: "std::pmr::polymorphic_allocator<T>::destroy"
source_path: "cpp/memory/polymorphic_allocator/destroy"
category: "memory"
---

Destroys the object pointed to by p, as if by calling p->~U().

## Declarations
```cpp
template< class U >
void destroy( U* p );
```
_(since C++17) (deprecated in C++20) (undeprecated in C++26)_

## Parameters
- `p`: pointer to the object being destroyed

## Notes
This function is deprecated via [LWG issue 3036](https://cplusplus.github.io/LWG/issue3036), because its functionality can be provided by the default implementation of [std::allocator_traits::destroy](/cpp/memory/allocator_traits/destroy/) and hence extraneous.

This function is undeprecated via [P2875R4](https://wg21.link/P2875R4).

## See also
- [destroy](/cpp/memory/allocator_traits/destroy/)
