---
title: "std::chrono::duration<Rep,Period>::count"
source_path: "cpp/chrono/duration/count"
category: "chrono"
since: "C++11"
---

Returns the number of ticks for this duration.

## Declarations
```cpp
constexpr rep count() const;
```
_(since C++11)_

## Return value
The number of ticks for this duration.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::chrono::milliseconds ms{3}; // 3 milliseconds
    // 6000 microseconds constructed from 3 milliseconds
    std::chrono::microseconds us = 2 * ms;
    // 30Hz clock using fractional ticks
    std::chrono::duration<double, std::ratio<1, 30>> hz30(3.5);
 
    std::cout << "3 ms duration has " << ms.count() << " ticks\n"
              << "6000 us duration has " << us.count() << " ticks\n"
              << "3.5 30Hz duration has " << hz30.count() << " ticks\n";       
}
```

## See also
- [duration_cast](/cpp/chrono/duration/duration_cast/)
