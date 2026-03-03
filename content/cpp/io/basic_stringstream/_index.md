---
title: "std::basic_stringstream"
source_path: "cpp/io/basic_stringstream"
header: "<sstream>"
category: "io"
---

The class template std::basic_stringstream implements input and output operations on string based streams. It effectively stores an instance of [std::basic_string](/cpp/string/basic_string/) and performs the input and output operations on it.

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>,
class Allocator = std::allocator<CharT>
> class basic_stringstream
: public basic_iostream<CharT, Traits>;
```
