---
title: "std::packaged_task<R(Args...)>::valid"
source_path: "cpp/thread/packaged_task/valid"
category: "thread"
since: "C++11"
---

Checks whether *this has a shared state.

## Declarations
```cpp
bool valid() const noexcept;
```
_(since C++11)_

## Return value
true if *this has a shared state, false otherwise.
