---
title: "std::fgetwc"
source_path: "cpp/io/c/fgetwc"
header: "<cwchar>"
category: "io"
---

Reads the next wide character from the given input stream. getwc() may be implemented as a macro and may evaluate stream more than once.

## Declarations
```cpp
std::wint_t fgetwc( std::FILE* stream );
```

```cpp
std::wint_t getwc( std::FILE* stream );
```

## Parameters
- `stream`: to read the wide character from

## Return value
The next wide character from the stream or WEOF if an error has occurred or the end of file has been reached. If an encoding error occurred, [errno](/cpp/error/errno/) is set to [EILSEQ](/cpp/error/errno_macros/).

## See also
- [fgetcgetc](/cpp/io/c/fgetc/)
- [fgetws](/cpp/io/c/fgetws/)
- [fputwcputwc](/cpp/io/c/fputwc/)
- [ungetwc](/cpp/io/c/ungetwc/)
- [C documentation](/c/io/fgetwc/)
