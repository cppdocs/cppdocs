---
title: "std::uses_allocator<std::packaged_task>"
source_path: "cpp/thread/packaged_task/uses_allocator"
category: "thread"
---

Provides a specialization of the [std::uses_allocator](/cpp/memory/uses_allocator/) type trait for [std::packaged_task](/cpp/thread/packaged_task/).

## Declarations
```cpp
template< class R, class Alloc >
struct uses_allocator<std::packaged_task<R>, Alloc> : true_type {};
```
_(since C++11) (removed in C++17)_

## See also
- [uses_allocator](/cpp/memory/uses_allocator/)
