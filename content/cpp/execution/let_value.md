---
title: "std::execution::let_value"
source_path: "cpp/execution/let_value"
header: "<execution>"
category: "execution"
since: "C++26"
---

Returns a sender describing the task graph described by the input sender, with an added node of invoking the provided function with the values sent by the input sender as arguments.

## Declarations
```cpp
execution::sender auto
let_value( execution::sender auto input,
std::invocable</*values-sent-by*/(input)...> function );
```
_(since C++26)_

## Parameters
- `input`: sender which once executed sends the values upon which the function executes
- `function`: invocable to be called with the values from the input sender

## Return value
Returns a sender describing the task graph described by the input sender, with an added node of invoking the provided function with the values sent by the input sender as arguments.

## Example
This section is incompleteReason: no example
