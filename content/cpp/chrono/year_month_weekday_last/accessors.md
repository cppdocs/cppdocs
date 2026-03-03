---
title: "std::chrono::year_month_weekday_last::year, std::chrono::year_month_weekday_last::month, std::chrono::year_month_weekday_last::weekday, std::chrono::year_month_weekday_last::weekday_last"
source_path: "cpp/chrono/year_month_weekday_last/accessors"
category: "chrono"
since: "C++20"
---

Retrieves the field values stored in this year_month_weekday_last object.

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
constexpr std::chrono::weekday_last weekday_last() const noexcept;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
using namespace std::chrono;
 
int main()
{
    auto ymwdl{Tuesday[last]/November/2022};
    auto wdl = ymwdl.weekday_last();
    wdl = (wdl.weekday() + days(1))[last];
    ymwdl = {ymwdl.year() + years(1), ymwdl.month() - months(2), wdl};
    std::cout << year_month_day(ymwdl) << '\n';
}
```
