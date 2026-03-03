---
title: "std::basic_istringstream"
source_path: "cpp/io/basic_istringstream"
header: "<sstream>"
category: "io"
---

The class template std::basic_istringstream implements input operations on string based streams. It effectively stores an instance of [std::basic_string](/cpp/string/basic_string/) and performs input operations on it.

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>,
class Allocator = std::allocator<CharT>
> class basic_istringstream : public basic_istream<CharT, Traits>;
```
