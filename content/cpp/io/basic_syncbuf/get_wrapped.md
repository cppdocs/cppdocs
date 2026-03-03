---
title: "std::basic_syncbuf<CharT,Traits,Allocator>::get_wrapped"
source_path: "cpp/io/basic_syncbuf/get_wrapped"
category: "io"
since: "C++20"
---

Returns a pointer to the wrapped [std::basic_streambuf](/cpp/io/basic_streambuf/).

## Declarations
```cpp
streambuf_type* get_wrapped() const noexcept;
```

## Notes
This function is not expected to be called directly: it is called through [std::basic_osyncstream::get_wrapped](/cpp/io/basic_osyncstream/get_wrapped/).

## Example
This section is incompleteReason: no example

## See also
- [get_wrapped](/cpp/io/basic_osyncstream/get_wrapped/)
