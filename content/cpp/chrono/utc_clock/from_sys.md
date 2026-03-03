---
title: "std::chrono::utc_clock::from_sys"
source_path: "cpp/chrono/utc_clock/from_sys"
category: "chrono"
since: "C++20"
---

Converts a sys_time t to a utc_time u that represents the same point in time.

## Declarations
```cpp
template< class Duration >
static std::chrono::utc_time<std::common_type_t<Duration, std::chrono::seconds>>
from_sys( const std::chrono::sys_time<Duration>& t );
```
_(since C++20)_

## Return value
A utc_time representing the same point in time as t.

## See also
- [to_sys](/cpp/chrono/utc_clock/to_sys/)
- [clock_cast](/cpp/chrono/clock_cast/)
