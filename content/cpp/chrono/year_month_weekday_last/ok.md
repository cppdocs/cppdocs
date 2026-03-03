---
title: "std::chrono::year_month_weekday_last::ok"
source_path: "cpp/chrono/year_month_weekday_last/ok"
category: "chrono"
since: "C++20"
---

Checks if this object represents a valid date. Since a year_month_weekday_last represents the last weekday of a particular month, it is valid as long as the year, month and weekday are valid.

## Declarations
```cpp
constexpr bool ok() const noexcept;
```
_(since C++20)_

## Return value
year().ok() && month().ok() && weekday().ok()

## Example
```cpp
#include <cassert>
#include <chrono>
using namespace std::chrono;
 
int main()
{
    auto ymwdl{Tuesday[last]/11/2020};
    assert(ymwdl.ok());
    ymwdl = Tuesday[last]/-2/2021;
    assert(!ymwdl.ok());
    ymwdl += months(0); // Normalize month
    assert(ymwdl.ok());
}
```
