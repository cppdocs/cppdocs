---
title: "std::chrono::year_month_weekday::year, std::chrono::year_month_weekday::month, std::chrono::year_month_weekday::weekday, std::chrono::year_month_weekday::index, std::chrono::year_month_weekday::weekday_indexed"
source_path: "cpp/chrono/year_month_weekday/accessors"
category: "chrono"
since: "C++20"
---

Retrieves the field values stored in this year_month_weekday object.

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
constexpr std::chrono::weekday weekday() const noexcept;
```
_(since C++20)_

```cpp
constexpr unsigned index() const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::weekday_indexed weekday_indexed() const noexcept;
```
_(since C++20)_

## Example
```cpp
#include <cassert>
#include <chrono>
 
int main()
{
    constexpr auto ym{std::chrono::year(2021)/std::chrono::January};
    constexpr auto wdi{std::chrono::Wednesday[1]};
    auto ymwdi{ym/wdi};
    const auto index{ymwdi.index() + 1};
    auto weekday{ymwdi.weekday() + std::chrono::days(1)};
    ymwdi = {ymwdi.year()/ymwdi.month()/weekday[index]};
    // Second Thursday in January, 2021
    assert(std::chrono::year_month_day{ymwdi} == std::chrono::January/14/2021);
}
```
