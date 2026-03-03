---
title: "std::experimental::pmr::polymorphic_allocator"
source_path: "cpp/experimental/polymorphic_allocator"
header: "<experimental/memory_resource>"
category: "experimental"
---

The class template std::experimental::pmr::polymorphic_allocator is an [Allocator](/cpp/named_req/allocator/) whose allocation behavior depends on the memory resource it is constructed with. Thus, different instances of polymorphic_allocator can exhibit entirely different allocation behavior. This runtime polymorphism allows objects using polymorphic_allocator to behave as if they used different allocator types at run time despite the identical static allocator type.

## Declarations
```cpp
template< class T >
class polymorphic_allocator;
```
_(library fundamentals TS)_
