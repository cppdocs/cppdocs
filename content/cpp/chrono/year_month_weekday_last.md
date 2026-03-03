---
title: "std::chrono::year_month_weekday_last"
source_path: "cpp/chrono/year_month_weekday_last"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

The class year_month_weekday_last represents the last weekday of a specific year and month. It is a field-based time point, with a resolution of std::chrono::days, except that it is limited to pointing to the last weekday of a year and month. std::chrono::years- and std::chrono::months-oriented arithmetic are supported directly. An implicit conversion to std::chrono::sys_days allows std::chrono::days-oriented arithmetic to be performed efficiently.

## Declarations
```cpp
class year_month_weekday_last;
```
_(since C++20)_
