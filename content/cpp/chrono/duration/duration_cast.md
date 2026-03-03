---
title: "std::chrono::duration_cast"
source_path: "cpp/chrono/duration/duration_cast"
header: "<chrono>"
category: "chrono"
since: "C++11"
---

Converts a [std::chrono::duration](/cpp/chrono/duration/) to a duration of different type ToDuration.

## Declarations
```cpp
template< class ToDuration, class Rep, class Period >
constexpr ToDuration duration_cast( const std::chrono::duration<Rep, Period>& d );
```
_(since C++11)_

## Parameters
- `d`: duration to convert

## Return value
d converted to a duration of type ToDuration.

## Notes
No implicit conversions are used. Multiplications and divisions are avoided where possible, if it is known at compile time that one or more parameters are 1. Computations are done in the widest type available and converted, as if by [static_cast](/cpp/language/static_cast/), to the result type only when finished.

Casting between integer durations where the source period is exactly divisible by the target period (e.g. hours to minutes) or between floating-point durations can be performed with ordinary casts or implicitly via [std::chrono::duration constructors](/cpp/chrono/duration/duration/), no duration_cast is needed.

Casting from a floating-point duration to an integer duration is [subject to undefined behavior](/cpp/language/implicit_cast/#Floating-integral_conversions) when the floating-point value is NaN, infinity, or too large to be representable by the target's integer type. Otherwise, casting to an integer duration is subject to truncation as with any static_cast to an integer type.

## Example
```cpp
#include <chrono>
#include <iostream>
#include <ratio>
#include <thread>
 
void f()
{
    std::this_thread::sleep_for(std::chrono::seconds(1));
}
 
int main()
{
    const auto t1 = std::chrono::high_resolution_clock::now();
    f();
    const auto t2 = std::chrono::high_resolution_clock::now();
 
    // floating-point duration: no duration_cast needed
    const std::chrono::duration<double, std::milli> fp_ms = t2 - t1;
 
    // integral duration: requires duration_cast
    const auto int_ms = std::chrono::duration_cast<std::chrono::milliseconds>(t2 - t1);
 
    // converting integral duration to integral duration of
    // shorter divisible time unit: no duration_cast needed
    const std::chrono::duration<long, std::micro> int_usec = int_ms;
 
    std::cout << "f() took " << fp_ms << ", or "
              << int_ms << " (whole milliseconds), or "
              << int_usec << " (whole microseconds)\n";
}
```

## See also
- [duration](/cpp/chrono/duration/)
- [time_point_cast](/cpp/chrono/time_point/time_point_cast/)
- [floor(std::chrono::duration)](/cpp/chrono/duration/floor/)
- [ceil(std::chrono::duration)](/cpp/chrono/duration/ceil/)
- [round(std::chrono::duration)](/cpp/chrono/duration/round/)
