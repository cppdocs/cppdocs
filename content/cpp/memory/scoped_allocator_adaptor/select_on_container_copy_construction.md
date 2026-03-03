---
title: "std::scoped_allocator_adaptor<OuterAlloc,InnerAlloc...>::
select_on_container_copy_construction"
source_path: "cpp/memory/scoped_allocator_adaptor/select_on_container_copy_construction"
header: "<scoped_allocator>"
category: "memory"
since: "C++11"
---

Creates a new instance of std::scoped_allocator_adaptor, where the outer allocator base class and each inner allocator subobject are obtained by calling [std::allocator_traits](/cpp/memory/allocator_traits/)<A>::select_on_container_copy_construction().

## Declarations
```cpp
scoped_allocator_adaptor select_on_container_copy_construction() const;
```
_(since C++11)_

## Return value
A new std::scoped_allocator_adaptor object, constructed from correctly copied allocators.

## See also
- [select_on_container_copy_construction](/cpp/memory/allocator_traits/select_on_container_copy_construction/)
