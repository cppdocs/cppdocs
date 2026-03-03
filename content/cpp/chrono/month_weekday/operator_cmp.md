---
title: "std::chrono::operator==(std::chrono::month_weekday)"
source_path: "cpp/chrono/month_weekday/operator_cmp"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Compares the two month_weekday values x and y.

## Declarations
```cpp
constexpr bool operator==( const std::chrono::month_weekday& x,
const std::chrono::month_weekday& y ) noexcept;
```
_(since C++20)_

## Return value
x.month() == y.month() && x.weekday_indexed() == y.weekday_indexed()

## Example
```cpp
#include <chrono>
 
int main()
{
    constexpr auto mwdi1{std::chrono::March/std::chrono::Friday[1]};
 
    constexpr auto mwdi2
    {
        std::chrono::month_weekday
        {
            std::chrono::month(3), std::chrono::weekday(5)[1]
        }
    };
 
    static_assert(mwdi1 == mwdi2);
}
```
