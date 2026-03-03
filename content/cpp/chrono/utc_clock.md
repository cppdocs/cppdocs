---
title: "std::chrono::utc_clock"
source_path: "cpp/chrono/utc_clock"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

The clock std::chrono::utc_clock is a [Clock](/cpp/named_req/clock/) that represents [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) (UTC). It measures time since 00:00:00 UTC, Thursday, 1 January 1970, including leap seconds.

## Declarations
```cpp
class utc_clock;
```
_(since C++20)_

## Notes
The official UTC epoch is 1 January 1972. utc_clock uses 1 January 1970 instead to be consistent with [std::chrono::system_clock](/cpp/chrono/system_clock/).
