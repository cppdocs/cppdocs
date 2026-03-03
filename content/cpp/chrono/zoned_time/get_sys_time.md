---
title: "std::chrono::zoned_time<Duration,TimeZonePtr>::operator sys_time<duration>, std::chrono::zoned_time<Duration,TimeZonePtr>::get_sys_time"
source_path: "cpp/chrono/zoned_time/get_sys_time"
category: "chrono"
since: "C++20"
---

Obtains a [std::chrono::sys_time](/cpp/chrono/system_clock/)<duration> representing the same point in time as this zoned_time object.

## Declarations
```cpp
operator std::chrono::sys_time<duration>() const;
```
_(since C++20)_

```cpp
std::chrono::sys_time<duration> get_sys_time() const;
```
_(since C++20)_

## Return value
A [std::chrono::sys_time](/cpp/chrono/system_clock/)<duration> representing the same point in time as *this.
