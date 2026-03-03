---
title: "std::chrono::year_month_day_last::ok"
source_path: "cpp/chrono/year_month_day_last/ok"
category: "chrono"
since: "C++20"
---

Checks if *this represents a valid date. Because a year_month_day_last represents the last day of a particular month, it represents a valid date as long as the year and month are valid.

## Declarations
```cpp
constexpr bool ok() const noexcept;
```
_(since C++20)_

## Return value
year().ok() && month().ok()

## Example
```cpp
#include <cassert>
#include <chrono>
 
int main()
{
    auto ymdl{std::chrono::last/11/2020};
    assert(ymdl.ok());
    ymdl = std::chrono::year(2020)/std::chrono::month(13)/std::chrono::last;
    assert(not ymdl.ok());
}
```
