---
title: "std::scoped_allocator_adaptor<OuterAlloc,InnerAlloc...>::inner_allocator"
source_path: "cpp/memory/scoped_allocator_adaptor/inner_allocator"
header: "<scoped_allocator>"
category: "memory"
since: "C++11"
---

Obtains a reference to the inner allocator used to declare this scoped_allocator_adaptor.

## Declarations
```cpp
inner_allocator_type& inner_allocator() noexcept;
```
_(since C++11)_

```cpp
const inner_allocator_type& inner_allocator() const noexcept;
```
_(since C++11)_

## Return value
A reference to the inner allocator, which is itself a std::scoped_allocator_adaptor.

## See also
- [outer_allocator](/cpp/memory/scoped_allocator_adaptor/outer_allocator/)
