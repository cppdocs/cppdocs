---
title: "std::hash<std::chrono::duration>"
source_path: "cpp/chrono/duration/hash"
header: "<chrono>"
category: "chrono"
since: "C++26"
---

The template specialization of [std::hash](/cpp/utility/hash/) for [std::chrono::duration](/cpp/chrono/duration/) allows users to obtain hashes of objects of type [std::chrono::duration](/cpp/chrono/duration/)<Rep, Period>. This specialization is [enabled](/cpp/utility/hash/) if and only if both [std::hash](/cpp/utility/hash/)<Rep> and [std::hash](/cpp/utility/hash/)<Period> are enabled.

## Declarations
```cpp
template< class Rep, class Period >
struct hash<std::chrono::duration<Rep, Period>>;
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
