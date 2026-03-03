---
title: "std::uses_allocator<std::experimental::promise>"
source_path: "cpp/experimental/lib_extensions/promise/uses_allocator"
header: "<experimental/future>"
category: "experimental"
---

This specialization of [std::uses_allocator](/cpp/memory/uses_allocator/) informs other library components that all objects of type std::experimental::promise support uses-allocator construction.

## Declarations
```cpp
template< class R, class Alloc >
struct uses_allocator<std::experimental::promise<R>, Alloc>
: std::true_type {};
```
_(library fundamentals TS)_

## See also
- [uses_allocator](/cpp/memory/uses_allocator/)
