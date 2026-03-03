---
title: "std::basic_ispanstream"
source_path: "cpp/io/basic_ispanstream"
header: "<spanstream>"
category: "io"
since: "C++23"
---

The class template std::basic_ispanstream implements input operations on streams based on fixed buffers.

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>
> class basic_ispanstream
: public basic_istream<CharT, Traits>
```
_(since C++23)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_spanstream
202106L
(C++23)
std::spanbuf, std::spanstream
