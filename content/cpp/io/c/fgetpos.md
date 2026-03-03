---
title: "std::fgetpos"
source_path: "cpp/io/c/fgetpos"
header: "<cstdio>"
category: "io"
---

Obtains the file position indicator and the current parse state (if any) for the file stream stream and stores them in the object pointed to by pos. The value stored is only meaningful as the input to [std::fsetpos](/cpp/io/c/fsetpos/).

## Declarations
```cpp
int fgetpos( std::FILE* stream, std::fpos_t* pos );
```

## Parameters
- `stream`: file stream to examine
- `pos`: pointer to a fpos_t object to store the file position indicator to

## Return value
0 upon success, nonzero value otherwise. Also sets [errno](/cpp/error/errno/) on failure.

## Example
This section is incompleteReason: no example

## See also
- [ftell](/cpp/io/c/ftell/)
- [fseek](/cpp/io/c/fseek/)
- [fsetpos](/cpp/io/c/fsetpos/)
- [C documentation](/c/io/fgetpos/)
