---
title: "std::chrono::get_leap_second_info"
source_path: "cpp/chrono/utc_clock/get_leap_second_info"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Obtains a [std::chrono::leap_second_info](/cpp/chrono/utc_clock/leap_second_info/) whose is_leap_second and elapsed indicate whether ut is during a positive leap second insertion and the sum of leap seconds between 1 January 1970 and ut, respectively.

## Declarations
```cpp
template< class Duration >
std::chrono::leap_second_info
get_leap_second_info( const std::chrono::utc_time<Duration>& ut );
```
_(since C++20)_

## Parameters
- `ut`: UTC time to examine

## Return value
A leap_second_info value specified above.

## See also
- [leap_second_info](/cpp/chrono/utc_clock/leap_second_info/)
- [leap_second](/cpp/chrono/leap_second/)
