---
title: "std::jthread::operator="
source_path: "cpp/thread/jthread/operator"
category: "thread"
since: "C++20"
---

If *this still has an associated running thread (i.e. joinable() == true), calls request_stop() followed by join(). Assigns the state of other to *this and sets other to a default constructed state.

## Declarations
```cpp
std::jthread& operator=( std::jthread&& other ) noexcept;
```
_(since C++20)_

## Parameters
- `other`: another jthread object to assign to this jthread object

## Return value
*this
