---
title: "std::chrono::ceil(std::chrono::duration)"
source_path: "cpp/chrono/duration/ceil"
header: "<chrono>"
category: "chrono"
since: "C++17"
---

Returns the smallest duration t representable in ToDuration that is greater or equal to d.

## Declarations
```cpp
template< class ToDuration, class Rep, class Period >
constexpr ToDuration ceil( const std::chrono::duration<Rep, Period>& d );
```
_(since C++17)_

## Parameters
- `d`: duration to convert

## Return value
d rounded up to a duration of type ToDuration.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    using namespace std::chrono_literals;
    using Min = std::chrono::minutes;
 
    std::cout
        << std::showpos
        << "ceil(+2.4min) = " << std::chrono::ceil<Min>(+2.4min).count() << "min\n"
        << "ceil(-2.4min) = " << std::chrono::ceil<Min>(-2.4min).count() << "min\n"
        << "ceil(+0.0min) = " << std::chrono::ceil<Min>(+0.0min).count() << "min\n";
}
```

## See also
- [duration_cast](/cpp/chrono/duration/duration_cast/)
- [floor(std::chrono::duration)](/cpp/chrono/duration/floor/)
- [round(std::chrono::duration)](/cpp/chrono/duration/round/)
- [ceil(std::chrono::time_point)](/cpp/chrono/time_point/ceil/)
- [ceilceilfceill](/cpp/numeric/math/ceil/)
