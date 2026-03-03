---
title: "std::hash<std::chrono::weekday_last>"
source_path: "cpp/chrono/weekday_last/hash"
header: "<chrono>"
category: "chrono"
since: "C++26"
---

The template specialization of [std::hash](/cpp/utility/hash/) for [std::chrono::weekday_last](/cpp/chrono/weekday_last/) allows users to obtain hashes of objects of type [std::chrono::weekday_last](/cpp/chrono/weekday_last/). This specialization is [enabled](/cpp/utility/hash/).

## Declarations
```cpp
template<> struct hash<std::chrono::weekday_last>;
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
