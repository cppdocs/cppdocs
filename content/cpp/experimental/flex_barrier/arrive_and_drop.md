---
title: "std::experimental::flex_barrier::arrive_and_drop"
source_path: "cpp/experimental/flex_barrier/arrive_and_drop"
category: "experimental"
---

Arrive at the flex_barrier's synchronization point and remove the current thread from the set of participating threads. It is unspecified whether this function blocks until the completion phase has ended. If the function blocks, the calling thread may be chosen to execute the completion phase.

## Declarations
```cpp
void arrive_and_drop();
```
_(concurrency TS)_

## Notes
The completion phase will be executed even if every participating thread calls arrive_and_drop.

After a thread calls arrive_and_drop on a flex_barrier, it cannot call any member function on that barrier except for the destructor, even if the function object invoked by the completion phase returns a positive value.

## See also
- [arrive_and_wait](/cpp/experimental/flex_barrier/arrive_and_wait/)
