---
title: "std::chrono::operator==,<=>(std::chrono::year_month_day)"
source_path: "cpp/chrono/year_month_day/operator_cmp"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Compares the two year_month_day values x and y. This is a lexicographical comparison: the [year()](/cpp/chrono/year_month_day/accessors/) is compared first, then [month()](/cpp/chrono/year_month_day/accessors/), then [day()](/cpp/chrono/year_month_day/accessors/).

## Declarations
```cpp
constexpr bool operator==( const std::chrono::year_month_day& x,
const std::chrono::year_month_day& y ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::strong_ordering
operator<=>( const std::chrono::year_month_day& x,
const std::chrono::year_month_day& y ) noexcept;
```
_(since C++20)_

## Notes
If both x and y represent valid dates (x.ok() && y.ok() == true), the result of the lexicographical comparison is consistent with the calendar order.

## Example
```cpp
#include <chrono>
 
int main()
{
    constexpr auto ymd1{std::chrono::day(13)/7/1337};
    constexpr auto ymd2{std::chrono::year(1337)/7/13};
    static_assert(ymd1 == ymd2);
    static_assert(ymd1 <= ymd2);
    static_assert(ymd1 >= ymd2);
    static_assert(ymd1 <=> ymd2 == 0);
}
```
