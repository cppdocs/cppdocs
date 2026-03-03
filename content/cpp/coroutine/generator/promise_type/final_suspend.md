---
title: "std::generator<Ref,V,Allocator>::promise_type::final_suspend"
source_path: "cpp/coroutine/generator/promise_type/final_suspend"
category: "coroutine"
since: "C++23"
---

Let x be some [generator](/cpp/coroutine/generator/) object. final_suspend does the following:

## Declarations
```cpp
auto final_suspend() noexcept;
```
_(since C++23)_

## Return value
An [awaitable object](/cpp/coroutine/#co_await) of unspecified type whose member functions are configured to suspend the calling coroutine.
