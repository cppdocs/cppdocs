---
title: "std::chrono::operator+, std::chrono::operator- (std::chrono::year_month_weekday)"
source_path: "cpp/chrono/year_month_weekday/operator"
category: "chrono"
since: "C++20"
---

1,2) Adds dm.count() months to the date represented by ymwd. The result has the same [year()](/cpp/chrono/year_month_weekday/accessors/) and [month()](/cpp/chrono/year_month_weekday/accessors/) as [std::chrono::year_month](/cpp/chrono/year_month/)(ymwd.year(), ymwd.month()) + dm and the same [weekday()](/cpp/chrono/year_month_weekday/accessors/) and [index()](/cpp/chrono/year_month_weekday/accessors/) as ymwd.

## Declarations
```cpp
constexpr std::chrono::year_month_weekday
operator+( const std::chrono::year_month_weekday& ymwd,
const std::chrono::months& dm ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_weekday
operator+( const std::chrono::months& dm,
const std::chrono::year_month_weekday& ymwd ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_weekday
operator+( const std::chrono::year_month_weekday& ymwd,
const std::chrono::years& dy ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_weekday
operator+( const std::chrono::years& dy,
const std::chrono::year_month_weekday& ymwd ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_weekday
operator-( const std::chrono::year_month_weekday& ymwd,
const std::chrono::months& dm ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_weekday
operator-( const std::chrono::year_month_weekday& ymwd,
const std::chrono::years& dy ) noexcept;
```
_(since C++20)_

## Notes
Even if ymwd.ok() is true, the resulting year_month_weekday may not represent a valid date if ymwd.index() is 5.

## Example
```cpp
#include <cassert>
#include <chrono>
#include <iostream>
 
int main()
{
    auto ymwdi{1/std::chrono::Wednesday[1]/2021};
    std::cout << ymwdi << '\n';
 
    ymwdi = std::chrono::years(5) + ymwdi;
    // First Wednesday in January, 2026
    std::cout << ymwdi << '\n';
    assert(static_cast<std::chrono::year_month_day>(ymwdi) ==
           std::chrono::January/7/2026);
 
    ymwdi = ymwdi - std::chrono::months(6);
    // First Wednesday in July, 2025
    std::cout << ymwdi << '\n';
    assert(static_cast<std::chrono::year_month_day>(ymwdi) ==
           std::chrono::July/2/2025);
}
```
