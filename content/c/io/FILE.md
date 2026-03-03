---
title: "FILE"
source_path: "c/io/FILE"
header: "<stdio.h>"
category: "c"
aliases: ["/c/io/FILE/"]
---

Each FILE object denotes a C stream.

## Declarations
```cpp
typedef /* unspecified */ FILE;
```

## Notes
POSIX explicitly requires that the LC_CTYPE facet of the currently installed C locale be stored within the FILE object the moment the stream's orientation becomes wide; POSIX requires that this LC_CTYPE facet be used for all future I/O on this stream until the orientation is changed, regardless of any subsequent call to [setlocale](/c/locale/setlocale/).

It is intended that each line of text be composed of data that are essentially human-readable. POSIX implementations do not distinguish between text and binary streams (there is no special mapping for '\n' or any other characters).

## See also
- [stdinstdoutstderr](/c/io/std_streams/)
- [C++ documentation](/cpp/io/c/file/)
