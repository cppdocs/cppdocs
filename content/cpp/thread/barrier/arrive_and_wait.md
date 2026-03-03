---
title: "std::barrier<CompletionFunction>::arrive_and_wait"
source_path: "cpp/thread/barrier/arrive_and_wait"
category: "thread"
since: "C++20"
---

Atomically decrements the expected count by 1, then blocks at the synchronization point for the current phase until the phase completion step of the current phase is run. Equivalent to wait(arrive());.

## Declarations
```cpp
void arrive_and_wait();
```
_(since C++20)_

## Return value
(none)

## Notes
If the current expected count is decremented to zero in the call to this function, the phase completion step is run and this function does not block.

If the current expected count is zero before calling this function, the initial expected count for all subsequent phases is also zero, which means the barrier cannot be reused.

## Example
This section is incompleteReason: no example
