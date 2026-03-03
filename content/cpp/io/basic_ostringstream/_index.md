---
title: "std::basic_ostringstream"
source_path: "cpp/io/basic_ostringstream"
header: "<sstream>"
category: "io"
---

The class template std::basic_ostringstream implements output operations on string based streams. It effectively stores an instance of [std::basic_string](/cpp/string/basic_string/) and performs output operations to it.

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>,
class Allocator = std::allocator<CharT>
> class basic_ostringstream
: public basic_ostream<CharT, Traits>;
```
