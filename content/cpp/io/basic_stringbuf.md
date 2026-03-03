---
title: "std::basic_stringbuf"
source_path: "cpp/io/basic_stringbuf"
header: "<sstream>"
category: "io"
---

std::basic_stringbuf is a [std::basic_streambuf](/cpp/io/basic_streambuf/) whose associated character sequence is a memory-resident sequence of arbitrary characters, which can be initialized from or made available as an instance of [std::basic_string](/cpp/string/basic_string/).

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>,
class Allocator = std::allocator<CharT>
> class basic_stringbuf
: public std::basic_streambuf<CharT, Traits>
```
