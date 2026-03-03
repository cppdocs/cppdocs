---
title: "std::chrono::zoned_time<Duration,TimeZonePtr>::get_info"
source_path: "cpp/chrono/zoned_time/get_info"
category: "chrono"
since: "C++20"
---

Obtains the std::chrono::sys_info containing information about the time zone at the time point stored in *this.

## Declarations
```cpp
std::chrono::sys_info get_info() const;
```
_(since C++20)_

## Return value
zone->get_info(tp), where zone is the non-static data member holding the time zone pointer, and tp is the non-static data member holding the stored time point (as a [std::chrono::sys_time](/cpp/chrono/system_clock/)<duration>).
