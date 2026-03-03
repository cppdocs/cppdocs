---
title: "std::strstreambuf"
source_path: "cpp/io/strstreambuf"
header: "<strstream>"
category: "io"
---

std::strstreambuf is a [std::basic_streambuf](/cpp/io/basic_streambuf/) whose associated character sequence is a character array, which may be constant (e.g. a string literal), modifiable but not dynamic (e.g. a stack-allocated array), or dynamic, in which case the std::strstreambuf may be allowed to reallocate the array as necessary to accommodate output (e.g. by calling delete[] and new[] or user-provided functions).

## Declarations
```cpp
class strstreambuf : public std::basic_streambuf<char>
```
_(deprecated in C++98) (removed in C++26)_

## Notes
After any call to [str()](/cpp/io/strstreambuf/str/) on a stream with a dynamic buffer, a call to [freeze(false)](/cpp/io/strstreambuf/freeze/) is required to allow the strstreambuf destructor to deallocate the buffer when necessary.

strstreambuf has been deprecated since C++98 and removed since C++26. The recommended replacement is [std::spanbuf](/cpp/io/basic_spanbuf/)(since C++23).
