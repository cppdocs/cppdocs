---
title: "std::uses_allocator<std::promise>"
source_path: "cpp/thread/promise/uses_allocator"
category: "thread"
since: "C++11"
---

Provides a specialization of the [std::uses_allocator](/cpp/memory/uses_allocator/) type trait for [std::promise](/cpp/thread/promise/).

## Declarations
```cpp
template< class R, class Alloc >
struct uses_allocator<std::promise<R>, Alloc> : std::true_type {};
```
_(since C++11)_

## See also
- [uses_allocator](/cpp/memory/uses_allocator/)
