---
title: "std::chrono::system_clock::now"
source_path: "cpp/chrono/system_clock/now"
category: "chrono"
since: "C++11"
---

Returns a time point representing the current point in time.

## Declarations
```cpp
static std::chrono::time_point<std::chrono::system_clock> now() noexcept;
```
_(since C++11)_

## Return value
A time point representing the current time.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    const auto now = std::chrono::system_clock::now();
    const std::time_t t_c = std::chrono::system_clock::to_time_t(now);
    std::cout << "The system clock is currently at " << std::ctime(&t_c);
}
```
