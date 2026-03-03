---
title: "std::chrono::round(std::chrono::duration)"
source_path: "cpp/chrono/duration/round"
header: "<chrono>"
category: "chrono"
since: "C++17"
---

Returns the value t representable in ToDuration that is the closest to d. If there are two such values, returns the even value (that is, the value t such that t % 2 == 0).

## Declarations
```cpp
template< class ToDuration, class Rep, class Period >
constexpr ToDuration round( const std::chrono::duration<Rep, Period>& d );
```
_(since C++17)_

## Parameters
- `d`: duration to convert

## Return value
d rounded to the nearest duration of type ToDuration, rounding to even in halfway cases.

## Example
```cpp
#include <chrono>
#include <iomanip>
#include <iostream>
 
int main()
{
    using namespace std::chrono_literals;
    std::cout << "Duration\tFloor\tRound\tCeil\n";
    for (using Sec = std::chrono::seconds;
        auto const d : {+4999ms, +5000ms, +5001ms, +5499ms, +5500ms, +5999ms,
                        -4999ms, -5000ms, -5001ms, -5499ms, -5500ms, -5999ms})
        std::cout << std::showpos << d << "\t\t"
                  << std::chrono::floor<Sec>(d) << '\t'
                  << std::chrono::round<Sec>(d) << '\t'
                  << std::chrono::ceil <Sec>(d) << '\n';
}
```

## See also
- [duration_cast](/cpp/chrono/duration/duration_cast/)
- [floor(std::chrono::duration)](/cpp/chrono/duration/floor/)
- [ceil(std::chrono::duration)](/cpp/chrono/duration/ceil/)
- [round(std::chrono::time_point)](/cpp/chrono/time_point/round/)
- [roundroundfroundllroundlroundflroundlllroundllroundfllroundl](/cpp/numeric/math/round/)
