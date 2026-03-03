---
title: "std::chrono::month_day::month, std::chrono::month_day::day"
source_path: "cpp/chrono/month_day/accessors"
category: "chrono"
since: "C++20"
---

Retrieves the month and day values stored in this month_day object.

## Declarations
```cpp
constexpr std::chrono::month month() const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::day day() const noexcept;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
 
int main()
{
    constexpr auto md{std::chrono::July/15};  
    static_assert(md.month() == std::chrono::month(7));
    static_assert(md.day() == std::chrono::day(15));
}
```
