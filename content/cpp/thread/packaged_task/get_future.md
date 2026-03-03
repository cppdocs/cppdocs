---
title: "std::packaged_task<R(Args...)>::get_future"
source_path: "cpp/thread/packaged_task/get_future"
category: "thread"
since: "C++11"
---

Returns a future which shares the same shared state as *this.

## Declarations
```cpp
std::future<R> get_future();
```
_(since C++11)_

## Return value
A future which shares the same shared state as *this.
