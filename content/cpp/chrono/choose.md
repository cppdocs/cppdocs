---
title: "std::chrono::choose"
source_path: "cpp/chrono/choose"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

The scoped enumeration choose can be passed to certain member functions of std::chrono::time_zone and std::chrono::zoned_time to control how ambiguous or nonexistent local times should be resolved. Passing choose::earliest causes the earlier time point to be returned, while passing choose::latest causes the later time point to be returned. (For nonexistent local times, these two time points are identical.)

## Declarations
```cpp
enum class choose {
earliest,
latest
};
```
_(since C++20)_

## See also
- [(constructor)](/cpp/chrono/zoned_time/zoned_time/)
- [to_sys](/cpp/chrono/time_zone/to_sys/)
