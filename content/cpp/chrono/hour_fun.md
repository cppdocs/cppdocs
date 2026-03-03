---
title: "std::chrono::is_am, std::chrono::is_pm, std::chrono::make12, std::chrono::make24"
source_path: "cpp/chrono/hour_fun"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

These functions aid in translating between a 12-hour format time of day, and a 24-hour format time of day.

## Declarations
```cpp
constexpr bool is_am( const std::chrono::hours& h ) noexcept;
```
_(since C++20)_

```cpp
constexpr bool is_pm( const std::chrono::hours& h ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::hours make12( const std::chrono::hours& h ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::hours make24( const std::chrono::hours& h,
bool is_pm ) noexcept;
```
_(since C++20)_

## Parameters
- `h`: 12-hour or 24-hour format time to detect
- `is_pm`: whether the 12-hour format time is p.m.

## Example
```cpp
#include <chrono>
#include <iomanip>
#include <iostream>
#include <utility>
 
int main()
{
    using namespace std::chrono;
 
    static_assert(
        is_am(10h) &&  is_am(11h) && !is_am(12h) && !is_am(23h) &&
       !is_pm(10h) && !is_pm(11h) &&  is_pm(12h) &&  is_pm(23h)
    );
 
    std::cout << "make12():\n";
 
    for (const hours hh : {0h, 1h, 11h, 12h, 13h, 23h})
    {
        const hours am{make12(hh)};
        std::cout << std::setw(2) << hh.count() << "h == "
                  << std::setw(2) << am.count() << (is_am(hh) ? "h a.m.\n" : "h p.m.\n");
    }
 
    std::cout << "\nmake24():\n";
 
    using p = std::pair<hours, bool>;
 
    for (const auto& [hh, pm] : {p{1h, 0}, p{12h, 0}, p{1h, 1}, p{12h, 1}})
    {
        std::cout << std::setw(2) << hh.count()
                  << (pm ? "h p.m." : "h a.m.")
                  << " == " << std::setw(2)
                  << make24(hh, pm).count() << "h\n";
    }
}
```
