---
title: "std::scoped_allocator_adaptor<OuterAlloc,InnerAlloc...>::outer_allocator"
source_path: "cpp/memory/scoped_allocator_adaptor/outer_allocator"
header: "<scoped_allocator>"
category: "memory"
since: "C++11"
---

Obtains a reference to the outer allocator used to declare this class.

## Declarations
```cpp
outer_allocator_type& outer_allocator() noexcept;
```
_(since C++11)_

```cpp
const outer_allocator_type& outer_allocator() const noexcept;
```
_(since C++11)_

## Return value
A reference to OuterAlloc.

## See also
- [inner_allocator](/cpp/memory/scoped_allocator_adaptor/inner_allocator/)
