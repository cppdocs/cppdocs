---
title: "std::chrono::year_month_day::year_month_day"
source_path: "cpp/chrono/year_month_day/year_month_day"
category: "chrono"
since: "C++20"
---

Constructs a year_month_day object.

## Declarations
```cpp
year_month_day() = default;
```
_(since C++20)_

```cpp
constexpr year_month_day( const std::chrono::year& y,
const std::chrono::month& m,
const std::chrono::day& d ) noexcept;
```
_(since C++20)_

```cpp
constexpr year_month_day( const std::chrono::year_month_day_last& ymdl ) noexcept;
```
_(since C++20)_

```cpp
constexpr year_month_day( const std::chrono::sys_days& dp ) noexcept;
```
_(since C++20)_

```cpp
constexpr explicit year_month_day( const std::chrono::local_days& dp ) noexcept;
```
_(since C++20)_

## Notes
A year_month_day can also be created by combining one of the partial-date types std::chrono::year_month and std::chrono::month_day with the missing component (day and year, respectively) using operator/.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    using namespace std::chrono;
 
    constexpr auto ymd2 = std::chrono::year_month_day(
        2020y, std::chrono::January, 31d // overload (2)
    );
    std::cout << "ymd2: " << ymd2 << '\n';
 
    constexpr auto ymd3 = std::chrono::year_month_day(
        std::chrono::April / std::chrono::Monday[last] / 2023y // overload (3)
    );
    std::cout << "ymd3: " << ymd3 << '\n';
 
    const auto now = std::chrono::system_clock::now();
    const auto ymd4 = std::chrono::year_month_day(
        std::chrono::floor<std::chrono::days>(now) // overload (4)
    );
    std::cout << "ymd4: " << ymd4 << '\n';
}
```

## See also
- [operator/](/cpp/chrono/operator_slash/)
