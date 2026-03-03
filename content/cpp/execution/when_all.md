---
title: "std::execution::when_all"
source_path: "cpp/execution/when_all"
header: "<execution>"
category: "execution"
since: "C++26"
---

[1 Parameters](#Parameters)

## Declarations
```cpp
execution::sender auto when_all( execution::sender auto... inputs );
```
_(since C++26)_

## Parameters
- `inputs`: senders upon which the completion of when_all is blocked. Can only include senders that can complete with a single set of values.

## Return value
Returns a sender that completes once all of the input senders have completed. The values sent by this sender are the values sent by each of the input senders, in order of the arguments passed to when_all.

## Notes
The sender returned by when_all completes inline on the execution resource on which the last input sender completes, unless stop is requested before when_all is started, in which case it completes inline within the call to start.

## Example
This section is incompleteReason: no example

## See also
- [when_all](/cpp/experimental/when_all/)
