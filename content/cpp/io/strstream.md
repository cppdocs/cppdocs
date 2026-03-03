---
title: "std::strstream"
source_path: "cpp/io/strstream"
header: "<strstream>"
category: "io"
---

The class strstream implements input and output operations on array-backed streams. It essentially wraps a raw array I/O device implementation ([std::strstreambuf](/cpp/io/strstreambuf/)) into the higher-level interface of [std::basic_iostream](/cpp/io/basic_iostream/).

## Declarations
```cpp
class strstream : public std::iostream
```
_(deprecated in C++98) (removed in C++26)_

## Notes
After any call to [str()](/cpp/io/strstream/str/), a call to [freeze(false)](/cpp/io/strstream/freeze/) is required to allow the destructor to deallocate the buffer as necessary.

Before any call to [str()](/cpp/io/strstream/str/) that uses the result as a C-string, the buffer must be null-terminated, typically with [std::ends](/cpp/io/manip/ends/).

strstream has been deprecated since C++98 and removed since C++26. [std::stringstream](/cpp/io/basic_stringstream/), [std::spanstream](/cpp/io/basic_spanstream/)(since C++23), and [boost::iostreams::array](https://www.boost.org/doc/libs/release/libs/iostreams/doc/classes/array.html#array) are the recommended replacements.
