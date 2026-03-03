---
title: "std::execution::upon_error"
source_path: "cpp/execution/upon_error"
header: "<execution>"
category: "execution"
since: "C++26"
---

Returns a sender describing the task graph described by the input sender, with an added node of invoking the provided function with the errors sent by the input sender as arguments (in case of an error).

## Declarations
```cpp
execution::sender auto
upon_error( execution::sender auto input,
std::invocable</*errors-sent-by*/(input)...> function );
```
_(since C++26)_

## Parameters
- `input`: sender which once an error occurs, sends the errors to the function
- `function`: invocable to be called with errors in case an error occurs by input sender

## Return value
Returns a sender describing the task graph described by the input sender, with an added node of invoking the provided function with the errors sent by the input sender as arguments (in case of an error).

## Example
This section is incompleteReason: no example
