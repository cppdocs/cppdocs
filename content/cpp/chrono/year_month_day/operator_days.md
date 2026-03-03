---
title: "std::chrono::year_month_day::operator sys_days, std::chrono::year_month_day::operator local_days"
source_path: "cpp/chrono/year_month_day/operator"
category: "chrono"
since: "C++20"
---

Converts *this to a [std::chrono::time_point](/cpp/chrono/time_point/) representing the same date as this [year_month_day](/cpp/chrono/year_month_day/).

## Declarations
```cpp
constexpr operator std::chrono::sys_days() const noexcept;
```
_(since C++20)_

```cpp
constexpr explicit operator std::chrono::local_days() const noexcept;
```
_(since C++20)_

## Notes
Converting to std::chrono::sys_days and back can be used to normalize a [year_month_day](/cpp/chrono/year_month_day/) that contains an invalid day but a valid year and month:

Normalizing the year and month can be done by adding (or subtracting) zero std::chrono::months:

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    using namespace std::chrono;
    const auto today = sys_days{std::chrono::floor<days>(system_clock::now())};
    for (const year_month_day ymd : {{November/15/2020}, {November/15/2120}, today})
    {
        std::cout << ymd;
        const auto delta = (sys_days{ymd} - today).count();
        (delta < 0) ? std::cout << " was " << -delta << " day(s) ago\n" :
        (delta > 0) ? std::cout << " is " << delta << " day(s) from now\n"
                    : std::cout << " is today!\n";
    }
}
```
