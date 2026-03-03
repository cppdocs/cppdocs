---
title: "std::basic_spanstream"
source_path: "cpp/io/basic_spanstream"
header: "<spanstream>"
category: "io"
since: "C++23"
---

The class template std::basic_spanstream implements input and output operations on streams based on fixed buffers.

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>
> class basic_spanstream
: public basic_iostream<CharT, Traits>
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
