---
title: "std::chrono::operator<< (std::chrono::sys_info)"
source_path: "cpp/chrono/sys_info/operator"
aliases:
  - "/cpp/chrono/sys_info/operator/"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Inserts a textual representation of r into os. The exact format is unspecified.

## Declarations
```cpp
template< class CharT, class Traits >
std::basic_ostream<CharT, Traits>& operator<<( std::basic_ostream<CharT, Traits>& os,
const std::chrono::sys_info& r );
```
_(since C++20)_

## Return value
os
