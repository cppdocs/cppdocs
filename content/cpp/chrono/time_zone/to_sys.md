---
title: "std::chrono::time_zone::to_sys"
source_path: "cpp/chrono/time_zone/to_sys"
category: "chrono"
since: "C++20"
---

Converts the local_time tp in this time zone to the corresponding sys_time.

## Declarations
```cpp
template< class Duration >
auto to_sys( const std::chrono::local_time<Duration>& tp ) const
-> std::chrono::sys_time<std::common_type_t<Duration, std::chrono::seconds>>;
```
_(since C++20)_

```cpp
template< class Duration >
auto to_sys( const std::chrono::local_time<Duration>& tp, std::chrono::choose z ) const
-> std::chrono::sys_time<std::common_type_t<Duration, std::chrono::seconds>>;
```
_(since C++20)_

## Return value
The UTC equivalent of tp according to the rules of this time zone.

## Notes
The precision of the result is at least [std::chrono::seconds](/cpp/chrono/duration/), and will be finer if the argument has finer precision.

Ambiguous and nonexistent local times can occur as a result of time zone transitions (such as daylight saving time). For example, "2016-03-13 02:30:00" does not exist in the "America/New_York" time zone, while "2016-11-06 01:30:00" in that time zone can correspond to two UTC time points: 2016-11-06 05:30:00 UTC and 2016-11-06 06:30:00 UTC.

## Example
This section is incompleteReason: no example
