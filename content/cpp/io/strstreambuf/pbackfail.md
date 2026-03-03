---
title: "std::strstreambuf::pbackfail"
source_path: "cpp/io/strstreambuf/pbackfail"
category: "io"
---

This protected virtual function is called by the public functions [basic_streambuf::sungetc](/cpp/io/basic_streambuf/sungetc/) and [basic_streambuf::sputbackc](/cpp/io/basic_streambuf/sputbackc/) (which, in turn, are called by [basic_istream::unget](/cpp/io/basic_istream/unget/) and [basic_istream::putback](/cpp/io/basic_istream/putback/)).

## Declarations
```cpp
protected:
virtual int_type pbackfail( int_type c = EOF );
```
_(deprecated in C++98) (removed in C++26)_

## Parameters
- `c`: the character to put back, or Traits::eof() to indicate that backing up of the get area is requested

## Return value
c on success except if c was [EOF](/cpp/io/c/), in which case unspecified value other than [EOF](/cpp/io/c/) is returned.

## Example
This section is incompleteReason: no example

## See also
- [pbackfail](/cpp/io/basic_streambuf/pbackfail/)
- [sungetc](/cpp/io/basic_streambuf/sungetc/)
- [sputbackc](/cpp/io/basic_streambuf/sputbackc/)
- [unget](/cpp/io/basic_istream/unget/)
- [putback](/cpp/io/basic_istream/putback/)
