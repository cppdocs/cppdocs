---
title: "std::hash<std::chrono::zoned_time>"
source_path: "cpp/chrono/zoned_time/hash"
header: "<chrono>"
category: "chrono"
since: "C++26"
---

The template specialization of [std::hash](/cpp/utility/hash/) for [std::chrono::zoned_time](/cpp/chrono/zoned_time/) allows users to obtain hashes of objects of type [std::chrono::zoned_time](/cpp/chrono/zoned_time/)<Duration, TimeZonePtr>. This specialization is [enabled](/cpp/utility/hash/) if and only if both [std::hash](/cpp/utility/hash/)<Duration> and [std::hash](/cpp/utility/hash/)<TimeZonePtr> are enabled.

## Declarations
```cpp
template< class Duration, class TimeZonePtr >
struct hash<std::chrono::zoned_time<Duration, TimeZonePtr>>;
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
