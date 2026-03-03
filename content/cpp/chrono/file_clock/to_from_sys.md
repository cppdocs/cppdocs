---
title: "std::chrono::file_clock::to_sys, std::chrono::file_clock::from_sys"
source_path: "cpp/chrono/file_clock/to_from_sys"
category: "chrono"
---

1) Converts the file_time t to a sys_time representing the same point in time.

## Declarations
```cpp
template< class Duration >
static std::chrono::sys_time</*see below*/>
to_sys( const std::chrono::file_time<Duration>& t );
```
_(since C++20) (optional*)_

```cpp
template< class Duration >
static std::chrono::file_time</*see below*/>
from_sys( const std::chrono::sys_time<Duration>& t );
```
_(since C++20) (optional*)_

## Notes
User code should usually use [std::chrono::clock_cast](/cpp/chrono/clock_cast/), which provides a generic interface to convert time points between clocks, rather than call these functions directly.

## Example
This section is incompleteReason: no example

## See also
- [to_utcfrom_utc](/cpp/chrono/file_clock/to_from_utc/)
- [clock_cast](/cpp/chrono/clock_cast/)
