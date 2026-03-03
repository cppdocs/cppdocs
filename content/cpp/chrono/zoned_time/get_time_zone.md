---
title: "std::chrono::zoned_time<Duration,TimeZonePtr>::get_time_zone"
source_path: "cpp/chrono/zoned_time/get_time_zone"
category: "chrono"
since: "C++20"
---

Retrieves the stored time zone pointer.

## Declarations
```cpp
TimeZonePtr get_time_zone() const;
```
_(since C++20)_

## Return value
A copy of the stored time zone pointer.

## Notes
There's no way to access the time zone pointer when TimeZonePtr is a move-only type.
