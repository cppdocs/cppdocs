---
title: "std::experimental::barrier"
source_path: "cpp/experimental/barrier"
header: "<experimental/barrier>"
category: "experimental"
---

The class std::experimental::barrier provides a thread-coordination mechanism that allows a set of participating threads to block until an operation is completed. Unlike std::experimental::latch, barriers are reusable; once the participating threads are released from a barrier's synchronization point, they can reuse the same barrier.

## Declarations
```cpp
class barrier;
```
_(concurrency TS)_
