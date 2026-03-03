---
title: "std::istrstream"
source_path: "cpp/io/istrstream"
header: "<strstream>"
category: "io"
---

The class istrstream implements input operations on array-backed streams. It essentially wraps a raw array I/O device implementation ([std::strstreambuf](/cpp/io/strstreambuf/)) into the higher-level interface of [std::basic_istream](/cpp/io/basic_istream/).

## Declarations
```cpp
class istrstream : public std::istream
```
_(deprecated in C++98) (removed in C++26)_

## Notes
istrstream has been deprecated since C++98 and removed since C++26. [std::istringstream](/cpp/io/basic_istringstream/), [std::ispanstream](/cpp/io/basic_ispanstream/)(since C++23), and [boost::iostreams::array_source](https://www.boost.org/doc/libs/release/libs/iostreams/doc/classes/array.html#array_source) are the recommended replacements.
