---
title: "std::barrier<CompletionFunction>::wait"
source_path: "cpp/thread/barrier/wait"
category: "thread"
since: "C++20"
---

If arrival is associated with the phase synchronization point for the current phase of *this, blocks at the synchronization point associated with arrival until the phase completion step of the synchronization point's phase is run.

## Declarations
```cpp
void wait( arrival_token&& arrival ) const;
```
_(since C++20)_

## Parameters
- `arrival`: an arrival_token obtained by a previous call to arrive on the same barrier

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [arrive](/cpp/thread/barrier/arrive/)
