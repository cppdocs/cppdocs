---
title: "std::generator<Ref,V,Allocator>::promise_type::return_void"
source_path: "cpp/coroutine/generator/promise_type/return_void"
category: "coroutine"
since: "C++23"
---

No-op. A user provided coroutine that uses the [generator](/cpp/coroutine/generator/) cannot issue a value via co_return operator or reaching the end of the coroutine body.

## Declarations
```cpp
void return_void() const noexcept {}
```
_(since C++23)_
