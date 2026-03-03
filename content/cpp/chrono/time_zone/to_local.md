---
title: "std::chrono::time_zone::to_local"
source_path: "cpp/chrono/time_zone/to_local"
category: "chrono"
since: "C++20"
---

Converts the sys_time tp to the corresponding local_time in this time zone.

## Declarations
```cpp
template< class Duration >
auto to_local( const std::chrono::sys_time<Duration>& tp ) const
-> std::chrono::local_time<std::common_type_t<Duration, std::chrono::seconds>>;
```
_(since C++20)_

## Return value
The local_time associated with tp and this time zone.

## Notes
The precision of the result is at least [std::chrono::seconds](/cpp/chrono/duration/), and will be finer if the argument has finer precision.
