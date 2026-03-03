---
title: "std::experimental::flex_barrier::arrive_and_wait"
source_path: "cpp/experimental/flex_barrier/arrive_and_wait"
category: "experimental"
---

Blocks and arrives at the flex_barrier's synchronization point.

## Declarations
```cpp
void arrive_and_wait();
```
_(concurrency TS)_

## Notes
It is safe for a thread to call either arrive_and_wait() or arrive_and_drop() immediately on return from this call (provided that the function object for the completion phase did not return zero). It's not necessary to ensure that all blocked threads have exited arrive_and_wait() before a thread calls it again.

The completion phase executes the function object specified when the flex_barrier was constructed. If it returns -1, the set of participating threads is unchanged; otherwise, the set of participating threads is a new set with the size equal to the return value N, and consists of the next N threads to arrive at the synchronization point. If N == 0, the flex_barrier can only be destroyed.

The initial set of participating threads for a flex_barrier constructed for num_threads threads is the first num_threads to arrive at its synchronization point.

## See also
- [arrive_and_drop](/cpp/experimental/flex_barrier/arrive_and_drop/)
