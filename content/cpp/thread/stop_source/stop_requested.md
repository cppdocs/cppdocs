---
title: "std::stop_source::stop_requested"
source_path: "cpp/thread/stop_source/stop_requested"
category: "thread"
since: "C++20"
---

Checks if the stop_source object has a stop-state and that state has received a stop request.

## Declarations
```cpp
bool stop_requested() const noexcept;
```
_(since C++20)_

## Return value
true if the stop_token object has a stop-state and it has received a stop request, false otherwise.

## Example
This section is incompleteReason: no example
