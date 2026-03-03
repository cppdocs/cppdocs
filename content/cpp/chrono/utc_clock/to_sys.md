---
title: "std::chrono::utc_clock::to_sys"
source_path: "cpp/chrono/utc_clock/to_sys"
category: "chrono"
since: "C++20"
---

Converts a utc_time t to a sys_time representing the same point in time (if possible).

## Declarations
```cpp
template< class Duration >
static std::chrono::sys_time<std::common_type_t<Duration, std::chrono::seconds>>
to_sys( const std::chrono::utc_time<Duration>& t );
```
_(since C++20)_

## Return value
A sys_time representing the same point in time as t, or the last representable value prior to the insertion of the leap second if t represents a time point during a leap second insertion.

## See also
- [from_sys](/cpp/chrono/utc_clock/from_sys/)
- [clock_cast](/cpp/chrono/clock_cast/)
