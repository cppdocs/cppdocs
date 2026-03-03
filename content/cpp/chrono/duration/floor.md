---
title: "std::chrono::floor(std::chrono::duration)"
source_path: "cpp/chrono/duration/floor"
header: "<chrono>"
category: "chrono"
since: "C++17"
---

Returns the greatest duration t representable in ToDuration that is less or equal to d.

## Declarations
```cpp
template< class ToDuration, class Rep, class Period >
constexpr ToDuration floor( const std::chrono::duration<Rep, Period>& d );
```
_(since C++17)_

## Parameters
- `d`: duration to convert

## Return value
d rounded down to a duration of type ToDuration.

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
- [ceil(std::chrono::duration)](/cpp/chrono/duration/ceil/)
- [round(std::chrono::duration)](/cpp/chrono/duration/round/)
- [floor(std::chrono::time_point)](/cpp/chrono/time_point/floor/)
- [floorfloorffloorl](/cpp/numeric/math/floor/)
