---
title: "std::chrono::month_day_last::month_day_last"
source_path: "cpp/chrono/month_day_last/month_day_last"
category: "chrono"
since: "C++20"
---

Constructs a month_day_last object that represents the last day of the month m.

## Declarations
```cpp
constexpr explicit month_day_last( const std::chrono::month& m ) noexcept;
```
_(since C++20)_

## Notes
A more convenient way to construct a month_day_last is with operator/, e.g., [std::chrono::April](/cpp/chrono/month/)/[std::chrono::last](/cpp/chrono/last_spec/).

## See also
- [operator/](/cpp/chrono/operator_slash/)
