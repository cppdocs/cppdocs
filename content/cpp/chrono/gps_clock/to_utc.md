---
title: "std::chrono::gps_clock::to_utc"
source_path: "cpp/chrono/gps_clock/to_utc"
category: "chrono"
since: "C++20"
---

Converts the gps_time t to a utc_time representing the same point in time.

## Declarations
```cpp
template< class Duration >
static std::chrono::utc_time<std::common_type_t<Duration, std::chrono::seconds>>
to_utc( const std::chrono::gps_time<Duration>& t ) noexcept;
```
_(since C++20)_

## Return value
A std::chrono::utc_time representing the same point in time as t, computed as if by constructing a value of the return type from t.time_since_epoch() and adding 315964809s (315964809 is the number of seconds between the epochs of the two clocks: 1980-01-06 00:00:00 UTC for gps_clock and 1970-01-01 00:00:00 UTC for utc_clock).

## Example
This section is incompleteReason: no example

## See also
- [from_utc](/cpp/chrono/gps_clock/from_utc/)
- [clock_cast](/cpp/chrono/clock_cast/)
