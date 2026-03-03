---
title: "std::basic_osyncstream"
source_path: "cpp/io/basic_osyncstream"
header: "<syncstream>"
category: "io"
since: "C++20"
---

The class template std::basic_osyncstream is a convenience wrapper for [std::basic_syncbuf](/cpp/io/basic_syncbuf/). It provides a mechanism to synchronize threads writing to the same stream.

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>,
class Allocator = std::allocator<CharT>
> class basic_osyncstream : public std::basic_ostream<CharT, Traits>
```
_(since C++20)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_syncbuf
201803L
(C++20)
Synchronized buffered ostream (std::osyncstream, std::syncbuf) and manipulators
