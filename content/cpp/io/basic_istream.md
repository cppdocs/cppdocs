---
title: "std::basic_istream"
source_path: "cpp/io/basic_istream"
header: "<istream>"
category: "io"
---

The class template basic_istream provides support for high level input operations on character streams. The supported operations include formatted input (e.g. integer values or whitespace-separated characters and characters strings) and unformatted input (e.g. raw characters and character arrays). This functionality is implemented in terms of the interface provided by the underlying basic_streambuf class, accessed through the basic_ios base class. The only non-inherited data member of basic_istream, in most implementations, is the value returned by [basic_istream::gcount()](/cpp/io/basic_istream/gcount/).

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>
> class basic_istream : virtual public std::basic_ios<CharT, Traits>
```
