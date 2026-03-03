---
title: "std::execution::stopped_as_error"
source_path: "cpp/execution/stopped_as_error"
header: "<execution>"
category: "execution"
since: "C++26"
---

Returns a sender that maps the stopped channel to an error of err.

## Declarations
```cpp
template< std::move_constructible Error >
execution::sender auto stopped_as_error( execution::sender auto snd, Error err );
```
_(since C++26)_

## Parameters
- `snd`: input sender of which the stopped channel is mapped into err
- `err`: error to which the stop channel is mapped into

## Return value
Returns a sender that maps the stopped channel to an error of err.

## Example
This section is incompleteReason: no example
