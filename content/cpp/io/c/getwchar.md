---
title: "std::getwchar"
source_path: "cpp/io/c/getwchar"
header: "<cwchar>"
category: "io"
---

Reads the next wide character from [stdin](/cpp/io/c/std_streams/).

## Declarations
```cpp
std::wint_t getwchar();
```

## Return value
The obtained wide character, or WEOF if an error has occurred or the end of file reached

## See also
- [getchar](/cpp/io/c/getchar/)
- [stdin](/cpp/io/c/std_streams/)
- [fgetwcgetwc](/cpp/io/c/fgetwc/)
- [C documentation](/c/io/getwchar/)
