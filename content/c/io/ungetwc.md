---
title: "ungetwc"
source_path: "c/io/ungetwc"
header: "<wchar.h>"
category: "c"
---

If ch does not equal WEOF, pushes the wide character ch into the input buffer associated with the stream stream in such a manner that subsequent read operation from stream will retrieve that wide character. The external device associated with the stream is not modified.

## Declarations
```cpp
wint_t ungetwc( wint_t ch, FILE *stream );
```
_(since C95)_

## Parameters
- `ch`: wide character to be put back
- `stream`: file stream to put the wide character back to

## Return value
On success ch is returned.

## See also
- [ungetc](/c/io/ungetc/)
- [fgetwcgetwc](/c/io/fgetwc/)
- [C++ documentation](/cpp/io/c/ungetwc/)
