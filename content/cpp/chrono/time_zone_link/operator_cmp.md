---
title: "std::chrono::operator==,<=>(std::chrono::time_zone_link)"
source_path: "cpp/chrono/time_zone_link/operator_cmp"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Compares the two time_zone_link values x and y by name.

## Declarations
```cpp
bool operator==( const std::chrono::time_zone_link& x,
const std::chrono::time_zone_link& y ) noexcept;
```
_(since C++20)_

```cpp
std::strong_ordering operator<=>( const std::chrono::time_zone_link& x,
const std::chrono::time_zone_link& y ) noexcept;
```
_(since C++20)_
