---
title: "std::chrono::year_month_day::year, std::chrono::year_month_day::month, std::chrono::year_month_day::day"
source_path: "cpp/chrono/year_month_day/accessors"
category: "chrono"
since: "C++20"
---

Retrieves the year, month and day values stored in this year_month_day object.

## Declarations
```cpp
constexpr std::chrono::year year() const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::month month() const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::day day() const noexcept;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
 
int main()
{
    constexpr std::chrono::year_month_day ymd{std::chrono::July/1/2021};
 
    static_assert(ymd.year() == std::chrono::year(2021));
    static_assert(ymd.month() == std::chrono::month(7));
    static_assert(ymd.day() == std::chrono::day(1));
}
```
