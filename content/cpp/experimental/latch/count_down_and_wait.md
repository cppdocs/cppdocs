---
title: "std::experimental::latch::count_down_and_wait"
source_path: "cpp/experimental/latch/count_down_and_wait"
category: "experimental"
---

Atomically decrements the internal counter by 1 and (if necessary) blocks the calling
thread until the counter reaches zero.

## Declarations
```cpp
void count_down_and_wait();
```
_(concurrency TS)_

## Return value
(none)
