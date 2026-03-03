---
title: "std::execution::upon_stopped"
source_path: "cpp/execution/upon_stopped"
header: "<execution>"
category: "execution"
since: "C++26"
---

Returns a sender describing the task graph described by the input sender, with an added node of invoking the provided function in case the "stopped" signal is sent to the input sender.

## Declarations
```cpp
execution::sender auto upon_stopped( execution::sender auto input,
std::invocable auto function );
```
_(since C++26)_

## Parameters
- `input`: sender which once gets "stop token", will notify the new node to execute the function
- `function`: invocable to be called in case a "stopped" signal is sent to the input sender

## Return value
Returns a sender describing the task graph described by the input sender, with an added node of invoking the provided function in case the "stopped" signal is sent to the input sender.

## Example
This section is incompleteReason: no example
