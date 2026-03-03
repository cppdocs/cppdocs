---
title: "std::chrono::month_weekday::month, std::chrono::month_weekday::weekday_indexed"
source_path: "cpp/chrono/month_weekday/accessors"
category: "chrono"
since: "C++20"
---

Retrieves a copy of the [month](/cpp/chrono/month/) and [weekday_indexed](/cpp/chrono/weekday_indexed/) objects stored in *this.

## Declarations
```cpp
constexpr std::chrono::month month() const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::weekday_indexed weekday_indexed() const noexcept;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    auto mwdi{std::chrono::March/std::chrono::Friday[1]}; // 1st Friday in a March
    std::cout << (std::chrono::year_month_day{mwdi/2024} == 
                  std::chrono::year_month_day{std::chrono::March/1/2024})
                  << ' ';
    auto index = mwdi.weekday_indexed().index();
    auto weekday = mwdi.weekday_indexed().weekday();
    mwdi = {mwdi.month(), weekday[index + 4]}; // 5th Friday in a March
    std::cout << (std::chrono::year_month_day{mwdi/2024} == 
                  std::chrono::year_month_day{std::chrono::March/29/2024})
                  << '\n';
}
```
