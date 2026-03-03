---
title: "std::basic_streambuf<CharT,Traits>::sgetn, std::basic_streambuf<CharT,Traits>::xsgetn"
source_path: "cpp/io/basic_streambuf/sgetn"
category: "io"
---

1) Calls xsgetn(s, count) of the most derived class.

## Declarations
```cpp
std::streamsize sgetn( char_type* s, std::streamsize count );
```

```cpp
protected:
virtual std::streamsize xsgetn( char_type* s, std::streamsize count );
```

## Parameters
- `s`: pointer to the beginning of a char_type array
- `count`: maximum number of characters to read.

## Return value
The number of characters successfully read. If it is less than count the input sequence has reached the end.

## Notes
The rule about "more efficient implementations" permits bulk I/O without intermediate buffering: that's how [std::ifstream::read](/cpp/io/basic_istream/read/) simply passes the pointer to the POSIX read() system call in some implementations of iostreams

## Example
This section is incompleteReason: no example

## See also
- [sputn](/cpp/io/basic_streambuf/sputn/)
