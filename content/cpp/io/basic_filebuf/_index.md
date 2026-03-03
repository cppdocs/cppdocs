---
title: "std::basic_filebuf"
source_path: "cpp/io/basic_filebuf"
header: "<fstream>"
category: "io"
---

std::basic_filebuf is a [std::basic_streambuf](/cpp/io/basic_streambuf/) whose associated character sequence is a file. Both the input sequence and the output sequence are associated with the same file, and a joint file position is maintained for both operations. The restrictions on reading and writing a sequence with std::basic_filebuf are the same as [std::FILE](/cpp/io/c/file/)s.

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>
> class basic_filebuf : public std::basic_streambuf<CharT, Traits>
```

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_fstream_native_handle
202306L
(C++26)
native handles support

## See also
- [FILE](/cpp/io/c/file/)
