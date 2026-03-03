---
title: "std::fpos_t"
source_path: "cpp/io/c/fpos_t"
header: "<cstdio>"
category: "io"
---

std::fpos_t is a non-array complete object type, can be used to store (by [std::fgetpos](/cpp/io/c/fgetpos/)) and restore (by [std::fsetpos](/cpp/io/c/fsetpos/)) the position and multibyte parser state (if any) for a C stream.

## Declarations
```cpp
typedef /* implementation-defined */ fpos_t;
```

## See also
- [fgetpos](/cpp/io/c/fgetpos/)
- [fsetpos](/cpp/io/c/fsetpos/)
- [mbstate_t](/cpp/string/multibyte/mbstate_t/)
- [fpos](/cpp/io/fpos/)
- [C documentation](/c/io/fpos_t/)
