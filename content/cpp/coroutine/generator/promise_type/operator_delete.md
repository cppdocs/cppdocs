---
title: "std::generator<Ref,V,Allocator>::promise_type::operator delete"
source_path: "cpp/coroutine/generator/promise_type/operator"
category: "coroutine"
since: "C++23"
---

Deallocates the storage pointed to by ptr using an allocator equivalent to that used to [allocate](/cpp/coroutine/generator/promise_type/operator_new/) this memory.

## Declarations
```cpp
void operator delete( void* ptr, std::size_t n ) noexcept;
```
_(since C++23)_

## Parameters
- `ptr`: a pointer obtained from the previous call to operator new
- `n`: the size of the storage to be deallocated
