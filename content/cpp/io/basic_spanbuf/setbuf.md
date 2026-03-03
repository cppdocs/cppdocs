---
title: "std::basic_spanbuf<CharT,Traits>::setbuf"
source_path: "cpp/io/basic_spanbuf/setbuf"
category: "io"
since: "C++23"
---

Makes the basic_spanbuf perform I/O on the buffer [s,s + n). Equivalently calls this->span([std::span](/cpp/container/span/)<CharT>(s, n)) and then returns this.

## Declarations
```cpp
protected:
std::basic_streambuf<CharT, Traits>* setbuf( CharT *s, std::streamsize n ) override;
```
_(since C++23)_

## Parameters
- `s`: pointer to the first CharT in the user-provided buffer
- `n`: the number of CharT elements in the user-provided buffer

## Return value
this

## Notes
The deprecated stream buffer [std::strstreambuf](/cpp/io/strstreambuf/) or the boost.IOStreams device [boost::basic_array](https://www.boost.org/doc/libs/release/libs/iostreams/doc/classes/array.html#array) can also implement I/O buffering over a user-provided char array.

## Example
This section is incompleteReason: no example

## See also
- [pubsetbuf](/cpp/io/basic_streambuf/pubsetbuf/)
- [setbuf](/cpp/io/basic_stringbuf/setbuf/)
- [setbuf](/cpp/io/strstreambuf/setbuf/)
