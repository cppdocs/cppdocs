---
title: "std::experimental::latch::count_down"
source_path: "cpp/experimental/latch/count_down"
category: "experimental"
---

Atomically decrements the internal counter by n without blocking the caller.

## Declarations
```cpp
void count_down( ptrdiff_t n = 1 );
```
_(concurrency TS)_

## Parameters
- `n`: the value by which the internal counter is decreased

## Return value
(none)
