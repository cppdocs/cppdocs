---
title: "std::chrono::time_point<Clock,Duration>::min"
source_path: "cpp/chrono/time_point/min"
category: "chrono"
since: "C++20"
---

Returns a time_point with the smallest possible duration, i.e. time_point(duration::min()).

## Declarations
```cpp
static constexpr time_point min();
```
_(until C++20)_

```cpp
static constexpr time_point min() noexcept;
```
_(since C++20)_

## Return value
The smallest possible time_point.

## Example
```cpp
#include <chrono>
#include <iomanip>
#include <iostream>
#include <ratio>
#include <string>
 
constexpr auto steady_min = std::chrono::steady_clock::time_point::min();
 
void animate_frame_at_time_offset(double game_time)
{
    std::cout << std::string(static_cast<int>(game_time) % 10 + 1, '*') << '\n';
}
 
int main()
{
    auto last_frame = steady_min;
    std::chrono::duration<double, std::micro> game_time{0.0};
 
    for (int n = 0; n < 5; ++n)
    {
        const auto current_frame = std::chrono::steady_clock::now();
        // initialize timer if first frame ever:
        if (last_frame == steady_min)
            last_frame = current_frame;
        game_time += current_frame - last_frame;
        std::cout << "Drawing frame at " << std::setprecision(10)
                  << std::setw(8) << game_time.count() << " μs ";
        animate_frame_at_time_offset(game_time.count());
    }
}
```
