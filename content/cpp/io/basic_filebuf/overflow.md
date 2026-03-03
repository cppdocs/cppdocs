---
title: "std::basic_filebuf<CharT,Traits>::overflow"
source_path: "cpp/io/basic_filebuf/overflow"
category: "io"
---

Writes some data from the put area to the associated character sequence (to the file).

## Declarations
```cpp
protected:
virtual int_type overflow ( int_type c = Traits::eof() );
```

## Return value
Traits::not_eof(c) to indicate success or Traits::eof() to indicate failure.

## Example
This section is incompleteReason: no example

## See also
- [overflow](/cpp/io/basic_streambuf/overflow/)
- [underflow](/cpp/io/basic_filebuf/underflow/)
