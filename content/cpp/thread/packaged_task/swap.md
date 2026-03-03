---
title: "std::packaged_task<R(Args...)>::swap"
source_path: "cpp/thread/packaged_task/swap"
category: "thread"
since: "C++11"
---

Exchanges the shared states and stored tasks of *this and other.

## Declarations
```cpp
void swap( packaged_task& other ) noexcept;
```
_(since C++11)_

## Parameters
- `other`: packaged task whose state to swap with

## Return value
(none)

## See also
- [std::swap(std::packaged_task)](/cpp/thread/packaged_task/swap2/)
- [std::swap](/cpp/utility/swap/)
