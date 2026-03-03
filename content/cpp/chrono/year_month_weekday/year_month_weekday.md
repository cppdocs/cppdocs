---
title: "std::chrono::year_month_weekday::year_month_weekday"
source_path: "cpp/chrono/year_month_weekday/year_month_weekday"
category: "chrono"
since: "C++20"
---

Constructs a year_month_weekday object.

## Declarations
```cpp
year_month_weekday() = default;
```
_(since C++20)_

```cpp
constexpr year_month_weekday( const std::chrono::year& y,
const std::chrono::month& m,
const std::chrono::weekday_indexed& wdi ) noexcept;
```
_(since C++20)_

```cpp
constexpr year_month_weekday( const std::chrono::sys_days& dp ) noexcept;
```
_(since C++20)_

```cpp
constexpr explicit year_month_weekday( const std::chrono::local_days& dp ) noexcept;
```
_(since C++20)_

## Notes
A year_month_weekday can also be created by combining one of the partial-date types std::chrono::year_month and std::chrono::month_weekday with the missing component (indexed weekday and year, respectively) using operator/.

## See also
- [operator/](/cpp/chrono/operator_slash/)
