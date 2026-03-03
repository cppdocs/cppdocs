---
title: "std::pmr::polymorphic_allocator"
source_path: "cpp/memory/polymorphic_allocator"
header: "<memory_resource>"
category: "memory"
since: "C++20"
---

The class template std::pmr::polymorphic_allocator is an [Allocator](/cpp/named_req/allocator/) which exhibits different allocation behavior depending upon the [std::pmr::memory_resource](/cpp/memory/memory_resource/) from which it is constructed. Since memory_resource uses runtime polymorphism to manage allocations, different container instances with polymorphic_allocator as their static allocator type are interoperable, but can behave as if they had different allocator types.

## Declarations
```cpp
template< class T >
class polymorphic_allocator;
```
_(since C++17) (until C++20)_

```cpp
template< class T = std::byte >
class polymorphic_allocator;
```
_(since C++20)_

## Notes
polymorphic_allocator does not propagate on container copy assignment, move assignment, or swap. As a result, move assignment of a polymorphic_allocator-using container can throw, and swapping two polymorphic_allocator-using containers whose allocators do not compare equal results in undefined behavior.

## See also
- [memory_resource](/cpp/memory/memory_resource/)
