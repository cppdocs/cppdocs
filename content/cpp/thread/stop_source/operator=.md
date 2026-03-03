---
title: "std::stop_source::operator="
source_path: "cpp/thread/stop_source/operator"
category: "thread"
since: "C++20"
---

Replaces the stop-state with that of other.

## Declarations
```cpp
std::stop_source& operator=( const std::stop_source& other ) noexcept;
```
_(since C++20)_

```cpp
std::stop_source& operator=( std::stop_source&& other ) noexcept;
```
_(since C++20)_

## Parameters
- `other`: another stop_source object to share the stop-state with to or acquire the stop-state from
