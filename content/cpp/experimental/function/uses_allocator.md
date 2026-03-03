---
title: "std::uses_allocator<std::experimental::function>"
source_path: "cpp/experimental/function/uses_allocator"
header: "<experimental/functional>"
category: "experimental"
---

This specialization of [std::uses_allocator](/cpp/memory/uses_allocator/) informs other library components that all objects of type std::experimental::function support uses-allocator construction.

## Declarations
```cpp
template< class R, class... ArgTypes, class Alloc >
struct uses_allocator<std::experimental::function<R(ArgTypes...)>, Alloc>
: std::true_type {};
```
_(library fundamentals TS) (removed in library fundamentals TS v3)_

## See also
- [uses_allocator](/cpp/memory/uses_allocator/)
