---
title: "std::basic_ios"
source_path: "cpp/io/basic_ios"
header: "<ios>"
category: "io"
since: "C++11"
---

The class std::basic_ios provides facilities for interfacing with objects that have [std::basic_streambuf](/cpp/io/basic_streambuf/) interface. Several std::basic_ios objects can refer to one actual std::basic_streambuf object.

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>
> class basic_ios
: public std::ios_base
```

## Notes
Straightforward implementation of std::basic_ios stores only the following members (which all depend on the template parameters and thus cannot be part of [std::ios_base](/cpp/io/ios_base/)):

Actual implementations vary:

Microsoft Visual Studio stores just those three members.

LLVM libc++ stores 1 less member: it maintains the rdbuf pointer as a void* member of ios_base.

GNU libstdc++ stores 4 additional members: three cached facets and a flag to indicate that fill was initialized.
