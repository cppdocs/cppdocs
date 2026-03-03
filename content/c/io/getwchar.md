---
title: "getwchar"
source_path: "c/io/getwchar"
header: "<wchar.h>"
category: "c"
---

Reads the next wide character from [stdin](/c/io/std_streams/).

## Declarations
```cpp
wint_t getwchar(void);
```
_(since C95)_

## Return value
the obtained wide character or WEOF if an error has occurred or the end of file reached

## See also
- [getchar](/c/io/getchar/)
- [stdin](/c/io/std_streams/)
- [fgetwcgetwc](/c/io/fgetwc/)
- [C++ documentation](/cpp/io/c/getwchar/)
