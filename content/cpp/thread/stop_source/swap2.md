---
title: "swap(std::stop_source)"
source_path: "cpp/thread/stop_source/swap2"
category: "thread"
since: "C++20"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for [std::stop_source](/cpp/thread/stop_source/). Exchanges the stop-state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
friend void swap( stop_source& lhs, stop_source& rhs ) noexcept;
```
_(since C++20)_

## Parameters
- `lhs, rhs`: stop_sources to swap

## Return value
(none)
