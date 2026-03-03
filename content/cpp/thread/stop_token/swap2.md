---
title: "swap(std::stop_token)"
source_path: "cpp/thread/stop_token/swap2"
category: "thread"
since: "C++20"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for [std::stop_token](/cpp/thread/stop_token/). Exchanges the associated stop-state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
friend void swap( stop_token& lhs, stop_token& rhs ) noexcept;
```
_(since C++20)_

## Parameters
- `lhs, rhs`: stop_tokens to swap

## Return value
(none)
