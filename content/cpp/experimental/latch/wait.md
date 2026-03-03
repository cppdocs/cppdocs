---
title: "std::experimental::latch::wait"
source_path: "cpp/experimental/latch/wait"
category: "experimental"
---

Blocks the calling thread until the internal counter reaches 0. If it is zero
already, returns immediately.

## Declarations
```cpp
void wait() const;
```
_(concurrency TS)_

## Return value
(none)
