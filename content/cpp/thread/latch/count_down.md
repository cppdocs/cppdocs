---
title: "std::latch::count_down"
source_path: "cpp/thread/latch/count_down"
category: "thread"
since: "C++20"
---

Atomically decrements the internal counter by n without blocking the caller.

## Declarations
```cpp
void count_down( std::ptrdiff_t n = 1 );
```
_(since C++20)_

## Parameters
- `n`: the value by which the internal counter is decreased

## Return value
(none)
