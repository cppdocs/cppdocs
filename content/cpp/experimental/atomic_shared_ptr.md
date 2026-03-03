---
title: "std::experimental::atomic_shared_ptr"
source_path: "cpp/experimental/atomic_shared_ptr"
header: "<experimental/atomic>"
category: "experimental"
---

The class template atomic_shared_ptr provides thread-safe atomic pointer operations over a [std::shared_ptr](/cpp/memory/shared_ptr/). It provides a better alternative to [the non-member shared_ptr atomic access functions](/cpp/memory/shared_ptr/atomic/).

## Declarations
```cpp
template< class T >
class atomic_shared_ptr;
```
_(concurrency TS)_
