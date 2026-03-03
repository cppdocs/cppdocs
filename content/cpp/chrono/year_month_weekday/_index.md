---
title: "std::chrono::year_month_weekday"
source_path: "cpp/chrono/year_month_weekday"
header: "<chrono>"
---

The class year_month_weekday represents the nth weekday of a specific year and month. It is a field-based time point, with a resolution of std::chrono::days. std::chrono::years- and std::chrono::months-oriented arithmetic are supported directly. An implicit conversion to and from std::chrono::sys_days allows std::chrono::days-oriented arithmetic to be performed efficiently.

## Declarations
```cpp
class year_month_weekday;
```
_(since C++20)_
