---
title: "std::chrono::month_weekday::month_weekday"
source_path: "cpp/chrono/month_weekday/month_weekday"
category: "chrono"
since: "C++20"
---

Constructs a month_weekday object that stores the [month](/cpp/chrono/month/) m and the [weekday_indexed](/cpp/chrono/weekday_indexed/) wdi.

## Declarations
```cpp
constexpr month_weekday( const std::chrono::month& m,
const std::chrono::weekday_indexed& wdi ) noexcept;
```
_(since C++20)_

## Notes
A more convenient way to construct a month_weekday is with operator/, e.g., [std::chrono::April](/cpp/chrono/month/)/[std::chrono::Sunday](/cpp/chrono/weekday/)[2].

## See also
- [operator/](/cpp/chrono/operator_slash/)
