---
title: "std::chrono::operator+, std::chrono::operator- (std::chrono::year_month)"
source_path: "cpp/chrono/year_month/operator"
category: "chrono"
since: "C++20"
---

1,2) Adds dy.count() years to ym.

## Declarations
```cpp
constexpr std::chrono::year_month operator+( const std::chrono::year_month& ym,
const std::chrono::years& dy ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month operator+( const std::chrono::years& dy,
const std::chrono::year_month& ym ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month operator+( const std::chrono::year_month& ym,
const std::chrono::months& dm ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month operator+( const std::chrono::months& dm,
const std::chrono::year_month& ym ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month operator-( const std::chrono::year_month& ym,
const std::chrono::years& dy ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month operator-( const std::chrono::year_month& ym,
const std::chrono::months& dm ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::months operator-( const std::chrono::year_month& ym1,
const std::chrono::year_month& ym2 ) noexcept;
```
_(since C++20)_

## Notes
The result of subtracting two year_month values is a duration of type std::chrono::months. This duration unit represents the length of the average Gregorian month (30.436875 days), and the resulting duration bears no relationship to the actual number of days in the time period at issue. For example, the result of 2017y/3 - 2017y/2 is [std::chrono::months](/cpp/chrono/duration/)(1), even though February 2017 only contains 28 days.

## Example
```cpp
#include <cassert>
#include <chrono>
 
int main()
{
    auto ym{std::chrono::year(2021)/std::chrono::July};
 
    ym = ym + std::chrono::months(14);
    assert(ym.month() == std::chrono::September);
    assert(ym.year() == std::chrono::year(2022));
 
    ym = ym - std::chrono::years(3);
    assert(ym.month() == std::chrono::month(9));
    assert(ym.year() == std::chrono::year(2019));
 
    ym = ym + (std::chrono::September - std::chrono::month(2));
    assert(ym.month() == std::chrono::April);
    assert(ym.year() == std::chrono::year(2020));
}
```

## See also
- [operator+=operator-=](/cpp/chrono/year_month/operator_arith/)
