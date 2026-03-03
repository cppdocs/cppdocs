---
title: "std::scoped_allocator_adaptor<OuterAlloc,InnerAlloc...>::max_size"
source_path: "cpp/memory/scoped_allocator_adaptor/max_size"
header: "<scoped_allocator>"
category: "memory"
since: "C++11"
---

Reports the maximum allocation size supported by the outer allocator, by calling [std::allocator_traits](/cpp/memory/allocator_traits/)<OuterAlloc>::max_size(outer_allocator()).

## Declarations
```cpp
size_type max_size() const;
```
_(since C++11)_

## Return value
The maximum allocation size for OuterAlloc.

## See also
- [max_size](/cpp/memory/allocator/max_size/)
- [max_size](/cpp/memory/allocator_traits/max_size/)
