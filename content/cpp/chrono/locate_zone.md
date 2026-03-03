---
title: "std::chrono::locate_zone"
source_path: "cpp/chrono/locate_zone"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Convenience function for locating a time zone in the time zone database. Equivalent to [std::chrono::get_tzdb](/cpp/chrono/tzdb_functions/)().locate_zone(tz_name).

## Declarations
```cpp
const std::chrono::time_zone* locate_zone( std::string_view tz_name );
```
_(since C++20)_

## Notes
A call to this function that is the first reference to the time zone database will cause it to be initialized.

## See also
- [locate_zone](/cpp/chrono/tzdb/locate_zone/)
- [get_tzdbget_tzdb_listreload_tzdbremote_version](/cpp/chrono/tzdb_functions/)
