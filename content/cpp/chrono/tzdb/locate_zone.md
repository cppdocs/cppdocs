---
title: "std::chrono::tzdb::locate_zone"
source_path: "cpp/chrono/tzdb/locate_zone"
category: "chrono"
since: "C++20"
---

Obtains a pointer to a std::chrono::time_zone in this database that represents the time zone designated by tz_name. If p is the returned pointer, then either p->name() == tz_name or that there is a [std::chrono::time_zone_link](/cpp/chrono/time_zone_link/) l in this database such that p->name() == l.target() && l.name() == tz_name.

## Declarations
```cpp
const std::chrono::time_zone* locate_zone( std::string_view tz_name ) const;
```
_(since C++20)_

## Return value
A pointer to the std::chrono::time_zone in this database that represents the time zone designated by tz_name.

## Example
This section is incompleteReason: no example
