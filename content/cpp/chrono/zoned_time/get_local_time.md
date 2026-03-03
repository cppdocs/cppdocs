---
title: "std::chrono::zoned_time<Duration,TimeZonePtr>::operator local_time<duration>, std::chrono::zoned_time<Duration,TimeZonePtr>::get_local_time"
source_path: "cpp/chrono/zoned_time/get_local_time"
category: "chrono"
since: "C++20"
---

Obtains a [std::chrono::local_time](/cpp/chrono/local_t/)<duration> representing the local time in the time zone corresponding to the time point *this represents.

## Declarations
```cpp
std::chrono::local_time<duration> get_local_time() const;
```
_(since C++20)_

```cpp
explicit operator std::chrono::local_time<duration>() const;
```
_(since C++20)_

## Return value
A [std::chrono::local_time](/cpp/chrono/local_t/)<duration> computed as if by zone->to_local(get_sys_time()), where zone is the non-static data member holding the stored time zone pointer.
