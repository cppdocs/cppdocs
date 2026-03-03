---
title: "std::promise<R>::get_future"
source_path: "cpp/thread/promise/get_future"
category: "thread"
since: "C++11"
---

Returns a future object associated with the same shared state as *this.

## Declarations
```cpp
std::future<R> get_future();
```
_(since C++11)_

## Return value
A future referring to the shared state of *this.
