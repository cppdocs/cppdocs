---
title: "std::chrono::tai_clock"
source_path: "cpp/chrono/tai_clock"
header: "<chrono>"
---

The clock std::chrono::tai_clock is a [Clock](/cpp/named_req/Clock/) that represents [International Atomic Time](https://en.wikipedia.org/wiki/International_Atomic_Time) (TAI). It measures time since 00:00:00, 1 January 1958, and is offset 10 seconds ahead of UTC at that date (i.e., its epoch, 1958-01-01 00:00:00 TAI, is 1957-12-31 23:59:50 UTC).

## Declarations
```cpp
class tai_clock;
```
_(since C++20)_
