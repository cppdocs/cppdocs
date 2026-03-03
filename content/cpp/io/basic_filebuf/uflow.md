---
title: "std::basic_filebuf<CharT,Traits>::uflow"
source_path: "cpp/io/basic_filebuf/uflow"
category: "io"
---

Behaves like the [underflow()](/cpp/io/basic_streambuf/underflow/), except that if [underflow()](/cpp/io/basic_streambuf/underflow/) succeeds (does not return Traits::eof()), then advances the next pointer for the get area. In other words, consumes one of the characters obtained by [underflow()](/cpp/io/basic_streambuf/underflow/).

## Declarations
```cpp
protected:
virtual int_type uflow()
```

## Return value
The value of the character that was read and consumed in case of success, or Traits::eof() in case of failure.

## Example
This section is incompleteReason: no example

## See also
- [uflow](/cpp/io/basic_streambuf/uflow/)
- [underflow](/cpp/io/basic_filebuf/underflow/)
- [overflow](/cpp/io/basic_filebuf/overflow/)
