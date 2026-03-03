---
title: "std::barrier<CompletionFunction>::arrive_and_drop"
source_path: "cpp/thread/barrier/arrive_and_drop"
category: "thread"
since: "C++20"
---

Decrements the initial expected count for all subsequent phases by one, and then decrements the expected count for the current phase by one.

## Declarations
```cpp
void arrive_and_drop();
```
_(since C++20)_

## Return value
(none)

## Notes
This function can cause the completion step for the current phase to start.

If the current expected count is zero before calling this function, the initial expected count for all subsequent phases is also zero, which means the barrier cannot be reused.

## Example
This section is incompleteReason: no example
