---
title: "std::ungetwc"
source_path: "cpp/io/c/ungetwc"
header: "<cwchar>"
category: "io"
---

If ch does not equal WEOF, pushes the wide character ch into the input buffer associated with the stream stream in such a manner than subsequent read operation from stream will retrieve that wide character. The external device associated with the stream is not modified.

## Declarations
```cpp
std::wint_t ungetwc( std::wint_t ch, std::FILE* stream );
```

## Parameters
- `ch`: wide character to be put back
- `stream`: file stream to put the wide character back to

## Return value
On success ch is returned.

## See also
- [ungetc](/cpp/io/c/ungetc/)
- [fgetwcgetwc](/cpp/io/c/fgetwc/)
- [C documentation](/c/io/ungetwc/)
