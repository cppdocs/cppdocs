---
title: "std::thread::operator="
source_path: "cpp/thread/thread/operator"
category: "thread"
since: "C++11"
---

If *this still has an associated running thread (i.e. joinable() == true), calls [std::terminate](/cpp/error/terminate/)(). Otherwise, assigns the state of other to *this and sets other to a default constructed state.

## Declarations
```cpp
thread& operator=( thread&& other ) noexcept;
```
_(since C++11)_

## Parameters
- `other`: another thread object to assign to this thread object

## Return value
*this
