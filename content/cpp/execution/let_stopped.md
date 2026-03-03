---
title: "std::execution::let_stopped"
source_path: "cpp/execution/let_stopped"
header: "<execution>"
category: "execution"
since: "C++26"
---

Returns a sender describing the task graph described by the input sender, with an added node invoked when the "stopped" signal is sent.

## Declarations
```cpp
execution::sender auto let_stopped( execution::sender auto input,
std::invocable auto function );
```
_(since C++26)_

## Parameters
- `input`: sender which once stopped, sends the "stop token" to execute the function
- `function`: invocable to be called with errors in case an error occurs by input sender

## Return value
Returns a sender describing the task graph described by the input sender, with an added node invoked when the "stopped" signal is sent.

## Example
This section is incompleteReason: no example
