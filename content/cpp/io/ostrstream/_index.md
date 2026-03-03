---
title: "std::ostrstream"
source_path: "cpp/io/ostrstream"
header: "<strstream>"
category: "io"
---

The class ostrstream implements output operations on array-backed streams. It essentially wraps a raw array I/O device implementation ([std::strstreambuf](/cpp/io/strstreambuf/)) into the higher-level interface of [std::basic_ostream](/cpp/io/basic_ostream/).

## Declarations
```cpp
class ostrstream : public std::ostream
```
_(deprecated in C++98) (removed in C++26)_

## Notes
After any call to [str()](/cpp/io/ostrstream/str/), a call to [freeze(false)](/cpp/io/ostrstream/freeze/) is required to allow the destructor to deallocate the buffer as necessary.

Before any call to [str()](/cpp/io/ostrstream/str/) that uses the result as a C-string, the buffer must be null-terminated, typically with [std::ends](/cpp/io/manip/ends/).

ostrstream has been deprecated since C++98 and removed since C++26. [std::ostringstream](/cpp/io/basic_ostringstream/), [std::ospanstream](/cpp/io/basic_ospanstream/)(since C++23), and [boost::iostreams::array_sink](https://www.boost.org/doc/libs/release/libs/iostreams/doc/classes/array.html#array_sink) are the recommended replacements.
