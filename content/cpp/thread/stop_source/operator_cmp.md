---
title: "operator==(std::stop_source)"
source_path: "cpp/thread/stop_source/operator_cmp"
category: "thread"
since: "C++20"
---

Compares two stop_source values.

## Declarations
```cpp
friend bool operator==( const stop_source& lhs, const stop_source& rhs ) noexcept;
```
_(since C++20)_

## Parameters
- `lhs, rhs`: stop_sources to compare

## Return value
true if lhs and rhs have the same stop-state, or both have no stop-state, otherwise false.
