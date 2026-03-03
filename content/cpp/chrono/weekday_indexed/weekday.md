---
title: "std::chrono::weekday_indexed::weekday"
source_path: "cpp/chrono/weekday_indexed/weekday"
category: "chrono"
since: "C++20"
---

Retrieves a copy of the std::chrono::weekday object stored in *this.

## Declarations
```cpp
constexpr std::chrono::weekday weekday() const noexcept;
```
_(since C++20)_

## Return value
A copy of the std::chrono::weekday object stored in *this.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    // 2nd Tuesday of a month
    std::chrono::weekday_indexed wdi{std::chrono::Tuesday[2]};
    std::cout << (std::chrono::year_month_day{wdi/10/2019} == 
                  std::chrono::year_month_day{std::chrono::October/8/2019}) << ' ';
 
    // 2nd Tuesday => 2nd Thursday
    wdi = {wdi.weekday() + std::chrono::days(2), wdi.index()};
    std::cout << (std::chrono::year_month_day{wdi/10/2019} == 
                  std::chrono::year_month_day{std::chrono::October/10/2019}) << '\n';
}
```

## See also
- [index](/cpp/chrono/weekday_indexed/index/)
