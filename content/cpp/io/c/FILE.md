---
title: "std::FILE"
source_path: "cpp/io/c/FILE"
header: "<cstdio>"
category: "io"
---

Each std::FILE object denotes a C stream.

## Declarations
```cpp
typedef /* unspecified */ FILE;
```

## Notes
POSIX explicitly requires that the LC_CTYPE facet of the currently installed C locale be stored within the FILE object the moment the stream's orientation becomes wide; POSIX requires that this LC_CTYPE facet be used for all future I/O on this stream until the orientation is changed, regardless of any subsequent call to [std::setlocale](/cpp/locale/setlocale/).

It is intended that each line of text be composed of data that are essentially human-readable. POSIX implementations do not distinguish between text and binary streams (there is no special mapping for '\n' or any other characters).

## See also
- [basic_streambuf](/cpp/io/basic_streambuf/)
- [basic_filebuf](/cpp/io/basic_filebuf/)
- [stdinstdoutstderr](/cpp/io/c/std_streams/)
- [C documentation](/c/io/FILE/)
