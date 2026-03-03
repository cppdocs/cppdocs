---
title: "std::chrono::year_month::ok"
source_path: "cpp/chrono/year_month/ok"
category: "chrono"
since: "C++20"
---

Checks if the year and month values stored in this object are valid.

## Declarations
```cpp
constexpr bool ok() const noexcept;
```
_(since C++20)_

## Return value
year().ok() && month().ok()

## Example
```cpp
#include <chrono>
using namespace std::chrono_literals;
 
int main()
{
    constexpr std::chrono::year_month ym1{3030y, std::chrono::July};
    static_assert(ym1.ok());
 
    constexpr std::chrono::year_month ym2{std::chrono::year(2020)/16};
    static_assert(!ym2.ok());
}
```
