---
title: "std::chrono::system_clock::from_time_t"
source_path: "cpp/chrono/system_clock/from_time_t"
category: "chrono"
since: "C++11"
---

Converts t to a time point type, using the coarser precision of the two types.

## Declarations
```cpp
static std::chrono::system_clock::time_point from_time_t( std::time_t t ) noexcept;
```
_(since C++11)_

## Parameters
- `t`: std::time_t value to convert

## Return value
A value of type [std::chrono::system_clock::time_point](/cpp/chrono/system_clock/#Member_types) representing t.

## Example
```cpp
#include <chrono>
#include <ctime>
#include <iostream>
#include <thread>
 
int main()
{
    using namespace std::chrono_literals;
 
    const std::time_t t = std::time(nullptr); // usually has "1 second" precision
 
    const auto from = std::chrono::system_clock::from_time_t(t);
 
    std::this_thread::sleep_for(500ms);
 
    const auto diff = std::chrono::system_clock::now() - from;
 
    std::cout << diff << " ("
              << std::chrono::round<std::chrono::milliseconds>(diff)
              << ")\n";
}
```

## See also
- [to_time_t](/cpp/chrono/system_clock/to_time_t/)
- [std::time_t](/cpp/chrono/c/time_t/)
