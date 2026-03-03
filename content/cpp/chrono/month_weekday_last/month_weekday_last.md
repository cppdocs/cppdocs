---
title: "std::chrono::month_weekday_last::month_weekday_last"
source_path: "cpp/chrono/month_weekday_last/month_weekday_last"
category: "chrono"
since: "C++20"
---

Constructs a month_weekday_last object that stores the [month](/cpp/chrono/month/) m and the [weekday_last](/cpp/chrono/weekday_last/) wdl.

## Declarations
```cpp
constexpr month_weekday_last( const std::chrono::month& m,
const std::chrono::weekday_last& wdl ) noexcept;
```
_(since C++20)_

## Notes
A more convenient way to construct a month_weekday_last is with operator/, e.g., [std::chrono::April](/cpp/chrono/month/)/[std::chrono::Sunday](/cpp/chrono/weekday/)[[std::chrono::last](/cpp/chrono/last_spec/)].

## See also
- [operator/](/cpp/chrono/operator_slash/)
