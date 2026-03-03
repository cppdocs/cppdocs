---
title: "std::chrono::system_clock"
source_path: "cpp/chrono/system_clock"
header: "<chrono>"
category: "chrono"
since: "C++11"
---

Class std::chrono::system_clock represents the system-wide real time wall clock.

## Declarations
```cpp
class system_clock;
```
_(since C++11)_

## Notes
The system_clock's time value can be internally adjusted at any time by the operating system, for example due to NTP synchronization or the user changing the system's clock. Daylight Saving Time and time zone changes, however, do not affect it since it is based on the [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) time-zone.

## See also
- [steady_clock](/cpp/chrono/steady_clock/)
- [high_resolution_clock](/cpp/chrono/high_resolution_clock/)
