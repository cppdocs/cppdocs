---
title: "fpos_t"
source_path: "c/io/fpos_t"
header: "<stdio.h>"
category: "c"
---

fpos_t is a non-array complete object type, can be used to store (by [fgetpos](/c/io/fgetpos/)) and restore (by [fsetpos](/c/io/fsetpos/)) the position and multibyte parser state (if any) for a C stream.

## Declarations
```cpp
typedef /* implementation-defined */ fpos_t;
```

## See also
- [fgetpos](/c/io/fgetpos/)
- [fsetpos](/c/io/fsetpos/)
- [mbstate_t](/c/string/multibyte/mbstate_t/)
- [C++ documentation](/cpp/io/c/fpos_t/)
