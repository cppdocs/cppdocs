---
title: "std::experimental::barrier::arrive_and_wait"
source_path: "cpp/experimental/barrier/arrive_and_wait"
category: "experimental"
---

Blocks and arrive at the barrier's synchronization point.

## Declarations
```cpp
void arrive_and_wait();
```
_(concurrency TS)_

## Notes
It is safe for a thread to call either arrive_and_wait() or arrive_and_drop() immediately on return from this call. It's not necessary to ensure that all blocked threads have exited arrive_and_wait() before a thread calls it again.

The set of participating threads for a barrier constructed for num_threads threads is the first num_threads to arrive at its synchronization point. This set does not change from cycle to cycle, except for threads removed from the set due to arrive_and_drop() calls.

## See also
- [arrive_and_drop](/cpp/experimental/barrier/arrive_and_drop/)
