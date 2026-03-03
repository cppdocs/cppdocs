---
title: "std::chrono::year_month_day_last::operator sys_days, std::chrono::year_month_day_last::operator local_days"
source_path: "cpp/chrono/year_month_day_last/operator"
category: "chrono"
since: "C++20"
---

Converts *this to a [std::chrono::time_point](/cpp/chrono/time_point/) representing the same date as this year_month_day_last. This is equivalent to composing a year_month_day from year(), month() and day() and converting that year_month_day to the destination type.

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
#include <array>
#include <chrono>
#include <iostream>
#include <string_view>
using namespace std::chrono;
using namespace std::literals;
 
int main()
{
    constexpr std::chrono::year y{2023y};
    constexpr std::array quarters{"1st"sv, "2nd"sv, "3rd"sv, "4th"sv};
    constexpr auto mq{12 / 4}; // months per quarter        
 
    std::cout << "In year " << static_cast<int>(y) << '\n';
    for (auto q = 1; q < 5; ++q)
    {
        const auto ls = y / std::chrono::month(q * mq) / Sunday[last];
        const auto ld = y / std::chrono::month(q * mq) / last;
        // subtract last Sunday from last day for day of week
        const auto index = (sys_days(ld) - sys_days(ls)).count();
        std::cout << "The " << quarters[q - 1] << " quarter ends on a "  
                  << std::chrono::weekday(index) << '\n';
    }
}
```

## See also
- [operator sys_daysoperator local_days](/cpp/chrono/year_month_day/operator_days/)
- [std::chrono::time_point](/cpp/chrono/time_point/)
