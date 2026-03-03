---
title: "std::chrono::year_month_day_last::year_month_day_last"
source_path: "cpp/chrono/year_month_day_last/year_month_day_last"
category: "chrono"
since: "C++20"
---

Constructs a year_month_day_last object storing the year y and the month mdl.month(). The constructed object represents the last day of that year and month.

## Declarations
```cpp
constexpr year_month_day_last( const std::chrono::year& y,
const std::chrono::month_day_last& mdl ) noexcept;
```
_(since C++20)_

## Notes
A year_month_day_last can also be created by combining a std::chrono::year_month with std::chrono::last using operator/.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::cout << "All last days of months of a given year:\n";
 
    constexpr std::chrono::year year{2021};
 
    for (int i{1}; i <= 12; ++i)
    {
        const std::chrono::month_day_last mdl{std::chrono::month(i) / std::chrono::last};
        const std::chrono::year_month_day_last ymdl{year, mdl};
        std::cout << ymdl << " day: " << ymdl.day() << '\n';
    }
}
```

## See also
- [operator/](/cpp/chrono/operator_slash/)
