---
title: "std::basic_streambuf<CharT,Traits>::in_avail"
source_path: "cpp/io/basic_streambuf/in_avail"
category: "io"
---

Returns the number of characters available in the get area. If a read position is available, effectively returns egptr() - gptr(), the size of the get area. In this case, the number of bytes returned is the number of bytes that can be extracted from the buffer without calling [underflow()](/cpp/io/basic_streambuf/underflow/).

## Declarations
```cpp
std::streamsize in_avail();
```

## Return value
The number of characters available for non-blocking read (either the size of the get area or the number of characters ready for reading from the associated character sequence), or -1 if no characters are available in the associated sequence as far as [showmanyc()](/cpp/io/basic_streambuf/showmanyc/) can tell.

## Example
This section is incompleteReason: no example

## See also
- [showmanyc](/cpp/io/basic_filebuf/showmanyc/)
- [readsome](/cpp/io/basic_istream/readsome/)
