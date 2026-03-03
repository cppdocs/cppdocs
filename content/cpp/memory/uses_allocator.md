---
title: "std::uses_allocator"
source_path: "cpp/memory/uses_allocator"
header: "<memory>"
category: "memory"
since: "C++11"
---

If T has a nested type allocator_type which is convertible from Alloc, the member constant value is true. Otherwise value is false.

## Declarations
```cpp
template< class T, class Alloc >
struct uses_allocator;
```
_(since C++11)_

## Notes
This type trait is used by [std::tuple](/cpp/utility/tuple/), [std::scoped_allocator_adaptor](/cpp/memory/scoped_allocator_adaptor/), and [std::pmr::polymorphic_allocator](/cpp/memory/polymorphic_allocator/). It may also be used by custom allocators or wrapper types to determine whether the object or member being constructed is itself capable of using an allocator (e.g. is a container), in which case an allocator should be passed to its constructor.

## See also
- [allocator_argallocator_arg_t](/cpp/memory/allocator_arg_t/)
- [uses_allocator_construction_args](/cpp/memory/uses_allocator_construction_args/)
- [make_obj_using_allocator](/cpp/memory/make_obj_using_allocator/)
- [uninitialized_construct_using_allocator](/cpp/memory/uninitialized_construct_using_allocator/)
- [scoped_allocator_adaptor](/cpp/memory/scoped_allocator_adaptor/)
