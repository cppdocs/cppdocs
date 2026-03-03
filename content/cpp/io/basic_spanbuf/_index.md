---
title: "std::basic_spanbuf"
source_path: "cpp/io/basic_spanbuf"
header: "<spanstream>"
category: "io"
since: "C++23"
---

std::basic_spanbuf is a [std::basic_streambuf](/cpp/io/basic_streambuf/) whose associated character sequence is a memory-resident sequence of arbitrary characters, which can be initialized from or made available as an instance of [std::span](/cpp/container/span/)<CharT>.

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>
> class basic_spanbuf
: public std::basic_streambuf<CharT, Traits>
```
_(since C++23)_

## Notes
std::basic_spanbuf does not own the underlying buffer.

It is the responsibility of programmers to ensure the underlying buffer is in its lifetime when used by a std::basic_spanbuf object. Additional synchronization may be needed if more than one thread operates the same underlying buffer through different std::basic_spanbuf objects.

## See also
- [basic_stringbuf](/cpp/io/basic_stringbuf/)
- [strstreambuf](/cpp/io/strstreambuf/)
