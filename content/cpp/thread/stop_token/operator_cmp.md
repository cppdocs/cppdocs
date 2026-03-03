---
title: "operator==(std::stop_token)"
source_path: "cpp/thread/stop_token/operator_cmp"
category: "thread"
since: "C++20"
---

Compares two stop_token values.

## Declarations
```cpp
friend bool operator==( const stop_token& lhs, const stop_token& rhs ) noexcept;
```
_(since C++20)_

## Parameters
- `lhs, rhs`: stop_tokens to compare

## Return value
true if lhs and rhs have the same associated stop-state, or both have no associated stop-state, otherwise false.
