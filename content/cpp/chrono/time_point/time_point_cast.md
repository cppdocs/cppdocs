---
title: "std::chrono::time_point_cast"
source_path: "cpp/chrono/time_point/time_point_cast"
header: "<chrono>"
category: "chrono"
since: "C++14"
---

Converts a [std::chrono::time_point](/cpp/chrono/time_point/) from one duration to another.

## Declarations
```cpp
template< class ToDuration, class Clock, class Duration >
std::chrono::time_point<Clock, ToDuration>
time_point_cast( const std::chrono::time_point<Clock, Duration> &t );
```
_(since C++11) (until C++14)_

```cpp
template< class ToDuration, class Clock, class Duration >
constexpr std::chrono::time_point<Clock, ToDuration>
time_point_cast( const std::chrono::time_point<Clock, Duration> &t );
```
_(since C++14)_

## Parameters
- `t`: time_point to convert from

## Return value
[std::chrono::time_point](/cpp/chrono/time_point/)<Clock, ToDuration>(
[std::chrono::duration_cast](/cpp/chrono/duration/duration_cast/)<ToDuration>(t.time_since_epoch())).

## Example
```cpp
#include <chrono>
#include <iostream>
using namespace std::chrono_literals;
 
using Clock = std::chrono::high_resolution_clock;
using Ms = std::chrono::milliseconds;
using Sec = std::chrono::seconds;
 
template<class Duration>
using TimePoint = std::chrono::time_point<Clock, Duration>;
 
inline void print_ms(const TimePoint<Ms>& time_point)
{
    std::cout << time_point.time_since_epoch().count() << " ms\n";
}
 
int main()
{
    TimePoint<Sec> time_point_sec{4s};
 
    // implicit conversion, no precision loss
    TimePoint<Ms> time_point_ms = time_point_sec;
    print_ms(time_point_ms); // 4000 ms
 
    time_point_ms = TimePoint<Ms>{5756ms};
    print_ms(time_point_ms); // 5756 ms
 
    // explicit cast, need when precision loss may happen
    // 5756 truncated to 5000
    time_point_sec = std::chrono::time_point_cast<Sec>(time_point_ms);
    print_ms(time_point_sec); // 5000 ms
}
```

## See also
- [floor(std::chrono::time_point)](/cpp/chrono/time_point/floor/)
- [ceil(std::chrono::time_point)](/cpp/chrono/time_point/ceil/)
- [round(std::chrono::time_point)](/cpp/chrono/time_point/round/)
- [duration_cast](/cpp/chrono/duration/duration_cast/)
