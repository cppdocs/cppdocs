---
title: "std::latch::wait"
source_path: "cpp/thread/latch/wait"
category: "thread"
since: "C++20"
---

Blocks the calling thread until the internal counter reaches 0. If it is zero already, returns immediately.

## Declarations
```cpp
void wait() const;
```
_(since C++20)_

## Return value
(none)
