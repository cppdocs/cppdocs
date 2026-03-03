---
title: "std::stop_token::operator="
source_path: "cpp/thread/stop_token/operator"
category: "thread"
since: "C++20"
---

Replaces the associated stop-state with that of other.

## Declarations
```cpp
std::stop_token& operator=( const std::stop_token& other ) noexcept;
```
_(since C++20)_

```cpp
std::stop_token& operator=( std::stop_token&& other ) noexcept;
```
_(since C++20)_

## Parameters
- `other`: another stop_token object to share the stop-state with to or acquire the stop-state from
