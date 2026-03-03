---
title: "std::chrono::time_point<Clock,Duration>::time_since_epoch"
source_path: "cpp/chrono/time_point/time_since_epoch"
category: "chrono"
---

Returns a [duration](/cpp/chrono/duration/) representing the amount of time between *this and the clock's epoch.

## Declarations
```cpp
duration time_since_epoch() const;
```
_(since C++11) (constexpr since C++14)_

## Return value
The amount of time between this time_point and the clock's epoch.

## Example
```cpp
#include <chrono>
#include <ctime>
#include <iostream>
 
int main()
{
    const auto p0 = std::chrono::time_point<std::chrono::system_clock>{};
    const auto p1 = std::chrono::system_clock::now();
    const auto p2 = p1 - std::chrono::hours(24);
 
    std::time_t epoch_time = std::chrono::system_clock::to_time_t(p0);
    std::cout << "epoch: " << std::ctime(&epoch_time);
    std::time_t today_time = std::chrono::system_clock::to_time_t(p1);
    std::cout << "today: " << std::ctime(&today_time);
 
    std::cout << "hours since epoch: "
              << std::chrono::duration_cast<std::chrono::hours>(
                     p1.time_since_epoch()).count() 
              << '\n';
    std::cout << "yesterday, hours since epoch: "
              << std::chrono::duration_cast<std::chrono::hours>(
                     p2.time_since_epoch()).count() 
              << '\n';
}
```
