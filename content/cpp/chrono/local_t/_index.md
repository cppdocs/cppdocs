---
title: "std::chrono::local_t"
source_path: "cpp/chrono/local_t"
header: "<chrono>"
---

The class local_t is a pseudo-clock that is used as the first template argument to [std::chrono::time_point](/cpp/chrono/time_point/) to indicate that the time point represents local time with respect of a not-yet-specified time zone. local_time supports streaming and the full set of time point arithmetic.

## Declarations
```cpp
struct local_t {};
```
_(since C++20)_

## See also
- [zoned_time](/cpp/chrono/zoned_time/)
