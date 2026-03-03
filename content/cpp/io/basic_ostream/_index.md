---
title: "std::basic_ostream"
source_path: "cpp/io/basic_ostream"
header: "<ostream>"
category: "io"
---

The class template basic_ostream provides support for high level output operations on character streams. The supported operations include formatted output (e.g. integer values) and unformatted output (e.g. raw characters and character arrays). This functionality is implemented in terms of the interface provided by the basic_streambuf class, accessed through the basic_ios base class. In typical implementations, basic_ostream has no non-inherited data members.

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>
> class basic_ostream : virtual public std::basic_ios<CharT, Traits>
```
