---
title: "std::allocator_traits"
source_path: "cpp/memory/allocator_traits"
header: "<memory>"
category: "memory"
since: "C++11"
---

The allocator_traits class template provides the standardized way to access various properties of [Allocators](/cpp/named_req/allocator/). The standard containers and other standard library components access allocators through this template, which makes it possible to use any class type as an allocator, as long as the user-provided specialization of std::allocator_traits implements all required functionality.

## Declarations
```cpp
template< class Alloc >
struct allocator_traits;
```
_(since C++11)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2108 | C++11 | there was no way to show an allocator is stateless | is_always_equal provided |

## See also
- [AllocatorAwareContainer](/cpp/named_req/allocatorawarecontainer/)
- [propagate_on_container_swap](#Member_types)
- [allocator](/cpp/memory/allocator/)
- [scoped_allocator_adaptor](/cpp/memory/scoped_allocator_adaptor/)
- [pointer_traits](/cpp/memory/pointer_traits/)
