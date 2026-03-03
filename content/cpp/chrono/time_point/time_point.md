---
title: "std::chrono::time_point<Clock,Duration>::time_point"
source_path: "cpp/chrono/time_point/time_point"
category: "chrono"
---

Constructs a new time_point from one of several optional data sources.

## Declarations
```cpp
time_point();
```
_(since C++11) (constexpr since C++14)_

```cpp
explicit time_point( const duration& d );
```
_(since C++11) (constexpr since C++14)_

```cpp
template< class Duration2 >
time_point( const time_point<Clock, Duration2>& t );
```
_(since C++11) (constexpr since C++14)_

## Parameters
- `d`: a duration to copy from
- `t`: a time_point to convert from

## Example
```cpp
#include <chrono>
#include <iostream>
 
using Clock = std::chrono::steady_clock;
using TimePoint = std::chrono::time_point<Clock>;
 
void print_ms(const TimePoint& point) 
{
    using Ms = std::chrono::milliseconds;
    const Clock::duration since_epoch = point.time_since_epoch();
    std::cout << std::chrono::duration_cast<Ms>(since_epoch) << '\n';
}
 
int main() 
{
    const TimePoint default_value = TimePoint(); // (1)
    print_ms(default_value); // 0ms
 
    const Clock::duration duration_4_seconds = std::chrono::seconds(4);
    const TimePoint time_point_4_seconds(duration_4_seconds); // (2)
    // 4 seconds from start of epoch
    print_ms(time_point_4_seconds); // 4000ms
 
    const TimePoint time_point_now = Clock::now(); // (3)
    print_ms(time_point_now); // 212178842ms
}
```

## See also
- [(constructor)](/cpp/chrono/duration/duration/)
- [duration_cast](/cpp/chrono/duration/duration_cast/)
