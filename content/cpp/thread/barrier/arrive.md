---
title: "std::barrier<CompletionFunction>::arrive"
source_path: "cpp/thread/barrier/arrive"
category: "thread"
since: "C++20"
---

Constructs an arrival_token object associated with the phase synchronization point for the current phase. Then, decrements the expected count by n.

## Declarations
```cpp
arrival_token arrive( std::ptrdiff_t n = 1 );
```
_(since C++20)_

## Parameters
- `n`: the value by which the expected count is decreased

## Return value
The constructed arrival_token object.

## Notes
This function can cause the completion step for the current phase to start.

## Example
This section is incompleteReason: no example

## See also
- [wait](/cpp/thread/barrier/wait/)
