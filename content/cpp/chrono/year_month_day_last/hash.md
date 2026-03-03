---
title: "std::hash<std::chrono::year_month_day_last>"
source_path: "cpp/chrono/year_month_day_last/hash"
header: "<chrono>"
category: "chrono"
since: "C++26"
---

The template specialization of [std::hash](/cpp/utility/hash/) for [std::chrono::year_month_day_last](/cpp/chrono/year_month_day_last/) allows users to obtain hashes of objects of type [std::chrono::year_month_day_last](/cpp/chrono/year_month_day_last/). This specialization is [enabled](/cpp/utility/hash/).

## Declarations
```cpp
template<> struct hash<std::chrono::year_month_day_last>;
```
_(since C++26)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_chrono
202306L
(C++26)
Hashing support for std::chrono value classes

## See also
- [hash](/cpp/utility/hash/)
