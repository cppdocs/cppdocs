---
title: "std::chrono::year_month_weekday::operator sys_days, std::chrono::year_month_weekday::operator local_days"
source_path: "cpp/chrono/year_month_weekday/operator"
category: "chrono"
since: "C++20"
---

Converts *this to a [std::chrono::time_point](/cpp/chrono/time_point/) representing the same date as this year_month_weekday.

## Declarations
```cpp
constexpr operator std::chrono::sys_days() const noexcept;
```
_(since C++20)_

```cpp
constexpr explicit operator std::chrono::local_days() const noexcept;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
using namespace std::chrono;
 
int main()
{
    constexpr auto ymwd{Tuesday[2]/11/2021};
    std::cout << ymwd << '\n';
    // convert from field-based to serial-based to add hours
    constexpr auto sd = sys_days{ymwd} + 24h;
    std::cout << sd << '\n';
    constexpr auto ymd = floor<days>(sd);
    static_assert(ymd == November/10/2021);
}
```
