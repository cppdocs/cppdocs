---
title: "std::experimental::barrier::arrive_and_drop"
source_path: "cpp/experimental/barrier/arrive_and_drop"
category: "experimental"
---

Arrive at the barrier's synchronization point and remove the current thread from the set of participating threads. It is unspecified whether this function blocks until the completion phase has ended.

## Declarations
```cpp
void arrive_and_drop();
```
_(concurrency TS)_

## Notes
If every participating thread calls arrive_and_drop(), the barrier can only be destroyed.

After a thread calls arrive_and_drop() on a barrier, it is no longer a member of its set of participating threads and hence can no longer call either arrive_and_drop() or arrive_and_wait() on the same barrier.

## See also
- [arrive_and_wait](/cpp/experimental/barrier/arrive_and_wait/)
