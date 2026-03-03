---
title: "std::chrono::tzdb_list"
source_path: "cpp/chrono/tzdb_list"
header: "<chrono>"
---

tzdb_list is a singleton list of std::chrono::tzdbs, each of which represents a copy of the IANA time zone database. Users cannot construct a tzdb_list and can only obtain access to one via the std::chrono::get_tzdb_list free function.

## Declarations
```cpp
class tzdb_list;
```
_(since C++20)_
