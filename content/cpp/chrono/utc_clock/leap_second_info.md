---
title: "std::chrono::leap_second_info"
source_path: "cpp/chrono/utc_clock/leap_second_info"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

A leap_second_info indicates whether a UTC time is during a positive leap second insertion and the total number of leap seconds between 1 January 1970 and the UTC time.

## Declarations
```cpp
struct leap_second_info {
bool is_leap_second;
std::chrono::seconds elapsed;
};
```
_(since C++20)_

## Notes
leap_second_info is typically obtained from [std::chrono::get_leap_second_info](/cpp/chrono/utc_clock/get_leap_second_info/).

## See also
- [leap_second](/cpp/chrono/leap_second/)
