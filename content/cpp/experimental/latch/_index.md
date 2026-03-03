---
title: "std::experimental::latch"
source_path: "cpp/experimental/latch"
header: "<experimental/latch>"
category: "experimental"
---

The latch class is a downward counter of type ptrdiff_t which can be
used to synchronize threads. The value of the counter is initialized on creation.
Threads may block on the latch until the counter is decremented to zero. There is
no possibility to increase or reset the counter, which makes the latch a single-use
barrier.

## Declarations
```cpp
class latch;
```
_(concurrency TS)_
