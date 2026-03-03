---
title: "std::chrono::operator==,<=>(std::chrono::year_month_day_last)"
source_path: "cpp/chrono/year_month_day_last/operator_cmp"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Compares the two year_month_day_last values x and y. This is a lexicographical comparison: the [year()](/cpp/chrono/year_month_day_last/accessors/) is compared first, then [month()](/cpp/chrono/year_month_day_last/accessors/).

## Declarations
```cpp
constexpr bool operator==( const std::chrono::year_month_day_last& x,
const std::chrono::year_month_day_last& y ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::strong_ordering
operator<=>( const std::chrono::year_month_day_last& x,
const std::chrono::year_month_day_last& y ) noexcept;
```
_(since C++20)_

## Notes
If both x and y represent valid dates (x.ok() && y.ok() == true), the result of the lexicographical comparison is consistent with the calendar order.

## Example
```cpp
#include <cassert>
#include <chrono>
#include <iostream>
 
int main()
{
    auto ymdl1{11/std::chrono::last/2020};
    auto mdl{std::chrono::last/std::chrono::November};
    auto ymdl2{mdl/2020};
    assert(ymdl1 == ymdl2);
 
    ymdl1 -= std::chrono::months{2};
    ymdl2 -= std::chrono::months{1};
    assert(ymdl1 < ymdl2);
}
```
