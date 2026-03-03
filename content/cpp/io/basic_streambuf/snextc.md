---
title: "std::basic_streambuf<CharT,Traits>::snextc"
source_path: "cpp/io/basic_streambuf/snextc"
category: "io"
---

Advances the input sequence by one character and reads one character.

## Declarations
```cpp
int_type snextc();
```

## Return value
The value of the next character. If the input sequence has been exhausted, Traits::eof() is returned.

## Example
This section is incompleteReason: no example

## See also
- [sgetc](/cpp/io/basic_streambuf/sgetc/)
- [sbumpcstossc](/cpp/io/basic_streambuf/sbumpc/)
