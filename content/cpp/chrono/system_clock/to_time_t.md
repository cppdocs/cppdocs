---
title: "std::chrono::system_clock::to_time_t"
source_path: "cpp/chrono/system_clock/to_time_t"
category: "chrono"
since: "C++11"
---

Converts t to a [std::time_t](/cpp/chrono/c/time_t/) type.

## Declarations
```cpp
static std::time_t to_time_t( const time_point& t ) noexcept;
```
_(since C++11)_

## Parameters
- `t`: system clock time point to convert

## Return value
A [std::time_t](/cpp/chrono/c/time_t/) value representing t.

## Example
```cpp
#include <chrono>
#include <ctime>
#include <iostream>
#include <thread>
using namespace std::chrono_literals;
 
int main()
{
    // The old way
    std::time_t oldt = std::time({});
 
    std::this_thread::sleep_for(2700ms);
 
    // The new way
    auto const now = std::chrono::system_clock::now();
    std::time_t newt = std::chrono::system_clock::to_time_t(now);
 
    std::cout << "newt - oldt == " << newt - oldt << " s\n";
}
```

## See also
- [from_time_t](/cpp/chrono/system_clock/from_time_t/)
- [std::time_t](/cpp/chrono/c/time_t/)
