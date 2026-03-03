---
title: "std::stop_source::stop_possible"
source_path: "cpp/thread/stop_source/stop_possible"
category: "thread"
since: "C++20"
---

Checks if the stop_source object has a stop-state.

## Declarations
```cpp
bool stop_possible() const noexcept;
```
_(since C++20)_

## Return value
true if the stop_source object has a stop-state, otherwise false.

## Notes
If the stop_source object has a stop-state and a stop request has already been made, this function still returns true.

## Example
This section is incompleteReason: no example
