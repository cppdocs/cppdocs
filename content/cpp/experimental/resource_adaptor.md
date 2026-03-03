---
title: "std::experimental::pmr::resource_adaptor, std::pmr::experimental::resource_adaptor"
source_path: "cpp/experimental/resource_adaptor"
header: "<experimental/memory_resource>"
category: "experimental"
---

The alias template resource_adaptor adapts the allocator type Alloc with a memory_resource interface. The allocator is rebound to a char value type before it is actually adapted (using the resource-adaptor-imp class template), so that adapting specializations of the same allocator template always yields the same type, regardless of the value type the allocator template is originally instantiated with.

## Declarations
```cpp
template< class Alloc >
using resource_adaptor = /*resource-adaptor-imp*/<
typename std::allocator_traits<Alloc>::
template rebind_alloc<char>>;
```
_(library fundamentals TS)_

```cpp
template< class Alloc >
class /*resource-adaptor-imp*/ : public memory_resource; // for exposition only
```
_(library fundamentals TS)_

## Parameters
- `other`: another resource-adaptor-imp object to copy or move from
- `a2`: another Alloc object to copy or move from
