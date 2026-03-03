---
title: "std::chrono::year_month_day"
source_path: "cpp/chrono/year_month_day"
header: "<chrono>"
---

The class year_month_day represents a specific year, month, and day. It is a field-based time point, with a resolution of std::chrono::days. std::chrono::years- and std::chrono::months-oriented arithmetic are supported directly. An implicit conversion to and from std::chrono::sys_days allows std::chrono::days-oriented arithmetic to be performed efficiently.

## Declarations
```cpp
class year_month_day;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    const std::chrono::time_point now{std::chrono::system_clock::now()};
 
    const std::chrono::year_month_day ymd{std::chrono::floor<std::chrono::days>(now)};
 
    std::cout << "Current Year: " << static_cast<int>(ymd.year()) << ", "
                 "Month: " << static_cast<unsigned>(ymd.month()) << ", "
                 "Day: " << static_cast<unsigned>(ymd.day()) << "\n"
                 "ymd: " << ymd << '\n';
}
```
