---
title: "std::chrono::year_month::operator+=, std::chrono::year_month::operator-="
source_path: "cpp/chrono/year_month/operator"
aliases:
  - "/cpp/chrono/year_month/operator/"
category: "chrono"
since: "C++20"
---

Modifies the time point *this represents by the duration dy or dm.

## Declarations
```cpp
constexpr std::chrono::year_month&
operator+=( const std::chrono::years& dy ) const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month&
operator+=( const std::chrono::months& dm ) const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month&
operator-=( const std::chrono::years& dy ) const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month&
operator-=( const std::chrono::months& dm ) const noexcept;
```
_(since C++20)_

## Example
```cpp
#include <cassert>
#include <chrono>
 
int main()
{
    auto ym{std::chrono::day(1)/7/2023};
 
    ym -= std::chrono::years{2};
    assert(ym.month() == std::chrono::July);
    assert(ym.year() == std::chrono::year(2021));
 
    ym += std::chrono::months{7};
    assert(ym.month() == std::chrono::month(2));
    assert(ym.year() == std::chrono::year(2022));
}
```

## See also
- [operator+operator-](/cpp/chrono/year_month/operator_arith_2/)
