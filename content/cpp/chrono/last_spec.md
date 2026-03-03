---
title: "std::chrono::last_spec, std::chrono::last"
source_path: "cpp/chrono/last_spec"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

last_spec is an empty tag type that is used in conjunction with other calendar types to indicate the last thing in a sequence. Depending on context, it may indicate the last day of a month (as in 2018y/February/last, for last day of February 2018, i.e., 2018-02-28) or the last day of the week in a month (as in 2018/February/Sunday[last], for last Sunday of February 2018, i.e., 2018-02-25).

## Declarations
```cpp
struct last_spec
{
explicit last_spec() = default;
};
```
_(since C++20)_

```cpp
inline constexpr last_spec last{};
```
_(since C++20)_

## Example
```cpp
#include <chrono>
 
int main()
{
    using namespace std::chrono;
 
    constexpr auto mdl {June/last};
    static_assert(mdl == month_day_last(month(6)));
 
    constexpr auto ymwdl {year(2023)/December/Tuesday[last]};
    static_assert(ymwdl ==
        year_month_weekday_last(year(2023), month(12), weekday_last(Tuesday)));
}
```
