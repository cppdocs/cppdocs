---
title: "std::allocator_traits<Alloc>::select_on_container_copy_construction"
source_path: "cpp/memory/allocator_traits/select_on_container_copy_construction"
header: "<memory>"
category: "memory"
---

If possible, obtains the copy-constructed version of the allocator a, by calling a.select_on_container_copy_construction(). If the above is not possible (e.g. Alloc does not have the member function select_on_container_copy_construction()), then returns a, unmodified.

## Declarations
```cpp
static Alloc select_on_container_copy_construction( const Alloc& a );
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `a`: allocator used by a standard container passed as an argument to a container copy constructor

## Return value
The allocator to use by the copy-constructed standard containers.

## See also
- [select_on_container_copy_construction](/cpp/memory/scoped_allocator_adaptor/select_on_container_copy_construction/)
