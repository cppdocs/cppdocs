---
title: "std::basic_syncbuf"
source_path: "cpp/io/basic_syncbuf"
header: "<syncstream>"
category: "io"
since: "C++20"
---

std::basic_syncbuf is a wrapper for a [std::basic_streambuf](/cpp/io/basic_streambuf/) (provided at construction time as a pointer). It accumulates output in its own internal buffer, and atomically transmits its entire contents to the wrapped buffer on destruction and when explicitly requested, so that they appear as a contiguous sequence of characters. It guarantees that there are no data races and no interleaving of characters sent to the wrapped buffer as long as all other outputs made to the same buffer are made through, possibly different, instances of std::basic_syncbuf.

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>,
class Allocator = std::allocator<CharT>
> class basic_syncbuf : public std::basic_streambuf<CharT, Traits>
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
Synchronized buffered ostream (std::syncbuf, std::osyncstream) and manipulators
