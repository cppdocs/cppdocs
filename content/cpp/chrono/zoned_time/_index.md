---
title: "std::chrono::zoned_time"
source_path: "cpp/chrono/zoned_time"
header: "<chrono>"
---

The class zoned_time represents a logical pairing of a time zone and a [std::chrono::time_point](/cpp/chrono/time_point/) whose resolution is Duration.

## Declarations
```cpp
template<
class Duration,
class TimeZonePtr = const std::chrono::time_zone*
> class zoned_time;
```
_(since C++20)_

```cpp
using zoned_seconds = std::chrono::zoned_time<std::chrono::seconds>;
```
_(since C++20)_

## Example
```cpp
#include <algorithm>
#include <chrono>
#include <iomanip>
#include <iostream>
#include <stdexcept>
#include <string_view>
 
int main()
{
    constexpr std::string_view locations[] =
    {
        "Africa/Casablanca",   "America/Argentina/Buenos_Aires",
        "America/Barbados",    "America/Indiana/Petersburg",
        "America/Tarasco_Bar", "Antarctica/Casey",
        "Antarctica/Vostok",   "Asia/Magadan",
        "Asia/Manila",         "Asia/Shanghai",
        "Asia/Tokyo",          "Atlantic/Bermuda",
        "Australia/Darwin",    "Europe/Isle_of_Man",
        "Europe/Laputa",       "Indian/Christmas",
        "Indian/Cocos",        "Pacific/Galapagos",
    };
 
    constexpr auto width = std::ranges::max_element(locations, {},
        [](const auto& s){ return s.length(); })->length();
 
    for (const auto location : locations)
        try
        {
            // may throw if 'location' is not in the time zone database
            const std::chrono::zoned_time zt{location, std::chrono::system_clock::now()};
            std::cout << std::setw(width) << location << " - Zoned Time: " << zt << '\n';
        }
        catch (std::runtime_error& ex)
        {
            std::cout << "Error: " << ex.what() << '\n';
        }
}
```

## See also
- [time_zone](/cpp/chrono/time_zone/)
