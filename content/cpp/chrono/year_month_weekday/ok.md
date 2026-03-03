---
title: "std::chrono::year_month_weekday::ok"
source_path: "cpp/chrono/year_month_weekday/ok"
category: "chrono"
since: "C++20"
---

Checks if this year_month_weekday object represents a valid date.

## Declarations
```cpp
constexpr bool ok() const noexcept;
```
_(since C++20)_

## Return value
true if this year_month_weekday object represents a valid date, that is, year().ok() && month().ok() && weekday_indexed().ok() is true and there are at least [index()](/cpp/chrono/year_month_weekday/accessors/) [weekday()s](/cpp/chrono/year_month_weekday/accessors/) in the specified year and month. Otherwise false.

## Example
```cpp
#include <cassert>
#include <chrono>
 
int main()
{
    auto ymwdi{std::chrono::Wednesday[1]/1/2021};
    assert(ymwdi.ok());
    ymwdi = std::chrono::year(2021)/std::chrono::month(1)/std::chrono::Wednesday[42];
    assert(!ymwdi.ok());
}
```
