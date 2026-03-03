---
title: "std::uses_allocator<std::experimental::packaged_task>"
source_path: "cpp/experimental/lib_extensions/packaged_task/uses_allocator"
header: "<experimental/future>"
category: "experimental"
---

This specialization of [std::uses_allocator](/cpp/memory/uses_allocator/) informs other library components that all objects of type std::experimental::packaged_task support uses-allocator construction.

## Declarations
```cpp
template< class R, class Alloc >
struct uses_allocator<std::experimental::packaged_task<R>, Alloc>
: std::true_type {};
```
_(library fundamentals TS)_

## See also
- [uses_allocator](/cpp/memory/uses_allocator/)
