---
title: "std::chrono::operator==,<=>(std::chrono::time_zone)"
source_path: "cpp/chrono/time_zone/operator_cmp"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Compares the two time_zone values x and y by name.

## Declarations
```cpp
bool operator==( const std::chrono::time_zone& x,
const std::chrono::time_zone& y ) noexcept;
```
_(since C++20)_

```cpp
std::strong_ordering operator<=>( const std::chrono::time_zone& x,
const std::chrono::time_zone& y ) noexcept;
```
_(since C++20)_
