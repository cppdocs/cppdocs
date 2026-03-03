---
title: "std::chrono::year_month_day_last"
source_path: "cpp/chrono/year_month_day_last"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

The class year_month_day_last represents the last day of a specific year and month. It is a field-based time point, with a resolution of std::chrono::days, subject to the limit that it can only represent the last day of a month.

## Declarations
```cpp
class year_month_day_last;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    const auto ymd = std::chrono::year_month_day
    {
        std::chrono::floor<std::chrono::days>(std::chrono::system_clock::now())
    };
 
    const std::chrono::year_month_day_last ymdl
    {
        ymd.year(), ymd.month() / std::chrono::last
    };
 
    std::cout << "The last day of present month (" << ymdl << ") is: "
              << std::chrono::year_month_day{ymdl}.day() << '\n';
 
    // The 'last' object can be placed wherever it is legal to place a 'day':
    using namespace std::chrono;
    constexpr std::chrono::year_month_day_last
        ymdl1 = 2023y / February / last,
        ymdl2 = last / February / 2023y,
        ymdl3 = February / last / 2023y;
    static_assert(ymdl1 == ymdl2 && ymdl2 == ymdl3);
}
```

## See also
- [year_month_day](/cpp/chrono/year_month_day/)
- [year](/cpp/chrono/year/)
- [month](/cpp/chrono/month/)
- [day](/cpp/chrono/day/)
