---
title: "std::chrono::tzdb::current_zone"
source_path: "cpp/chrono/tzdb/current_zone"
category: "chrono"
since: "C++20"
---

Obtains a pointer to a std::chrono::time_zone in this database that represents the local time zone of the computer.

## Declarations
```cpp
const std::chrono::time_zone* current_zone() const;
```
_(since C++20)_

## Return value
A pointer to the std::chrono::time_zone in this database that represents the local time zone of the computer.
