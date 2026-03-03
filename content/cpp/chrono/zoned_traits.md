---
title: "std::chrono::zoned_traits"
source_path: "cpp/chrono/zoned_traits"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

The class zoned_traits provides a way to customize the behavior of the constructors of std::chrono::zoned_time with custom time zone pointer types. In particular, it allows such types to specify the default time zone to use and the mapping of a time zone's name to the corresponding time zone pointer. It is acceptable for custom time zone pointer types to not support either operation, in which case the corresponding constructors of zoned_time will not participate in overload resolution.

## Declarations
```cpp
template < class TimeZonePtr >
struct zoned_traits { };
```
_(since C++20)_

```cpp
template <>
struct zoned_traits<const std::chrono::time_zone*>;
```
_(since C++20)_

## Return value
[std::chrono::locate_zone](/cpp/chrono/locate_zone/)("UTC").
