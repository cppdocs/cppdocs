---
title: "std::execution::on"
source_path: "cpp/execution/on"
header: "<execution>"
category: "execution"
since: "C++26"
---

Returns a sender which, when started, will start the provided sender on an execution agent belonging to the execution resource associated with the provided scheduler.

## Declarations
```cpp
execution::sender auto on( execution::scheduler auto sched,
execution::sender auto snd );
```
_(since C++26)_

## Parameters
- `sched`: provides execution agent on which the sender will be executed
- `snd`: work to be executed on the execution resource associated with sched

## Return value
Returns a sender which, when started, will start the provided sender on an execution agent belonging to the execution resource associated with the provided scheduler.

## Example
This section is incompleteReason: no example
