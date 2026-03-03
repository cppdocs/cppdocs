---
title: "std::latch::arrive_and_wait"
source_path: "cpp/thread/latch/arrive_and_wait"
category: "thread"
since: "C++20"
---

Atomically decrements the internal counter by n and (if necessary) blocks the calling
thread until the counter reaches zero. Equivalent to count_down(n); wait();.

## Declarations
```cpp
void arrive_and_wait( std::ptrdiff_t n = 1 );
```
_(since C++20)_

## Parameters
- `n`: the value by which the internal counter is decreased

## Return value
(none)
