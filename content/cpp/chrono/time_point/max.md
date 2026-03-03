---
title: "std::chrono::time_point<Clock,Duration>::max"
source_path: "cpp/chrono/time_point/max"
category: "chrono"
since: "C++20"
---

Returns a time_point with the largest possible duration, i.e. time_point(duration::max()).

## Declarations
```cpp
static constexpr time_point max();
```
_(until C++20)_

```cpp
static constexpr time_point max() noexcept;
```
_(since C++20)_

## Return value
The largest possible time_point.

## Example
```cpp
#include <chrono>
#include <iostream>
#include <vector>
 
int main() 
{
    std::chrono::time_point<std::chrono::system_clock> now =
        std::chrono::system_clock::now();
    std::vector<std::chrono::time_point<std::chrono::system_clock>> times
    {
        now - std::chrono::hours(24),
        now - std::chrono::hours(48),
        now + std::chrono::hours(24)
    };  
 
    std::chrono::time_point<std::chrono::system_clock> earliest =
        std::chrono::time_point<std::chrono::system_clock>::max();
 
    std::cout << "all times:\n";
    for (const auto& time : times)
    {
        std::time_t t = std::chrono::system_clock::to_time_t(time);
        std::cout << std::ctime(&t);
 
        if (time < earliest)
            earliest = time;
    }
 
    std::time_t t = std::chrono::system_clock::to_time_t(earliest);
    std::cout << "earliest:\n" << std::ctime(&t);
}
```
