---
title: "std::chrono::tzdb"
source_path: "cpp/chrono/tzdb"
header: "<chrono>"
---

The class tzdb represents a copy of the [IANA time zone database](https://www.iana.org/time-zones). Users cannot construct a tzdb and can only obtain read-only access to one via the free functions std::chrono::get_tzdb_list and std::chrono::get_tzdb.

## Declarations
```cpp
struct tzdb;
```
_(since C++20)_
