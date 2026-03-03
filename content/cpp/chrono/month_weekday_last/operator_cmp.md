---
title: "std::chrono::operator==(std::chrono::month_weekday_last)"
source_path: "cpp/chrono/month_weekday_last/operator_cmp"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Compares the two month_weekday_last values x and y.

## Declarations
```cpp
constexpr bool operator==( const std::chrono::month_weekday_last& x,
const std::chrono::month_weekday_last& y ) noexcept;
```
_(since C++20)_

## Return value
x.month() == y.month() && x.weekday_last() == y.weekday_last()

## Example
```cpp
#include <chrono>
 
int main()
{
    constexpr std::chrono::month_weekday_last mwdl1
    {
        std::chrono::March/std::chrono::Friday[std::chrono::last]
    };
 
    constexpr std::chrono::month_weekday_last mwdl2
    {
        std::chrono::March, std::chrono::Friday[std::chrono::last]
    };
 
    static_assert(mwdl1 == mwdl2);
}
```
