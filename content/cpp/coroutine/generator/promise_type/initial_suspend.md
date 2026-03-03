---
title: "std::generator<Ref,V,Allocator>::promise_type::initial_suspend"
source_path: "cpp/coroutine/generator/promise_type/initial_suspend"
category: "coroutine"
since: "C++23"
---

Informs that [std::generator](/cpp/coroutine/generator/) always starts lazily (in suspended state).

## Declarations
```cpp
std::suspend_always initial_suspend() const noexcept;
```
_(since C++23)_

## Return value
An [awaitable](/cpp/coroutine/suspend_always/) object.
