---
title: "std::chrono::round(std::chrono::time_point)"
source_path: "cpp/chrono/time_point/round"
header: "<chrono>"
category: "chrono"
since: "C++17"
---

Returns the nearest time point to tp representable in ToDuration, rounding to even in halfway cases.

## Declarations
```cpp
template< class ToDuration, class Clock, class Duration >
constexpr std::chrono::time_point<Clock, ToDuration>
round( const std::chrono::time_point<Clock, Duration>& tp );
```
_(since C++17)_

## Parameters
- `tp`: time point to round to nearest

## Return value
tp rounded to nearest time point using duration of type ToDuration, rounding to even in halfway cases.

## Example
```cpp
#include <chrono>
#include <iostream>
#include <string>
 
template<typename TimePoint>
std::string to_string(const TimePoint& time_point)
{
    return std::to_string(time_point.time_since_epoch().count());
}
 
int main()
{
    using namespace std::literals::chrono_literals;
    using Sec = std::chrono::seconds;
 
    std::cout << "Time point\t" "Cast\t" "Floor\t" "Round\t" "Ceil\n";
    std::cout << "(ms)\t\t"     "(s)\t"  "(s)\t"   "(s)\t"   "(s)\n";
    for (const auto value_ms : {5432ms, 5678ms})
    {
        std::chrono::time_point<std::chrono::system_clock, std::chrono::milliseconds>
            time_point_ms(value_ms);
 
        std::cout
            << to_string(time_point_ms) << "\t\t"
            << to_string(std::chrono::time_point_cast<Sec>(time_point_ms)) << '\t'
            << to_string(std::chrono::floor<Sec>(time_point_ms)) << '\t'
            << to_string(std::chrono::round<Sec>(time_point_ms)) << '\t'
            << to_string(std::chrono::ceil<Sec>(time_point_ms)) << '\n';
    }
}
```

## See also
- [time_point_cast](/cpp/chrono/time_point/time_point_cast/)
- [ceil(std::chrono::time_point)](/cpp/chrono/time_point/ceil/)
- [floor(std::chrono::time_point)](/cpp/chrono/time_point/floor/)
- [round(std::chrono::duration)](/cpp/chrono/duration/round/)
- [roundroundfroundllroundlroundflroundlllroundllroundfllroundl](/cpp/numeric/math/round/)
