---
title: "std::chrono::year_month_weekday::operator+=, std::chrono::year_month_weekday::operator-="
source_path: "cpp/chrono/year_month_weekday/operator"
aliases:
  - "/cpp/chrono/year_month_weekday/operator/"
category: "chrono"
since: "C++20"
---

Modifies the time point *this represents by the duration dy or dm.

## Declarations
```cpp
constexpr std::chrono::year_month_weekday&
operator+=( const std::chrono::years& dy ) const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_weekday&
operator+=( const std::chrono::months& dm ) const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_weekday&
operator-=( const std::chrono::years& dy ) const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_weekday&
operator-=( const std::chrono::months& dm ) const noexcept;
```
_(since C++20)_

## Example
```cpp
#include <cassert>
#include <chrono>
#include <iostream>
 
int main()
{
    auto ymwi{1/std::chrono::Wednesday[2]/2021};
    std::cout << ymwi << '\n';
 
    ymwi += std::chrono::years(5);
    std::cout << ymwi << '\n';
    assert(static_cast<std::chrono::year_month_day>(ymwi) ==
                       std::chrono::year(2026)/1/14);
 
    ymwi -= std::chrono::months(1);
    std::cout << ymwi << '\n';
    assert(static_cast<std::chrono::year_month_day>(ymwi) == 
                       std::chrono::day(10)/12/2025);
}
```

## See also
- [operator+operator-](/cpp/chrono/year_month_weekday/operator_arith_2/)
