---
title: "std::wscanf, std::fwscanf, std::swscanf"
source_path: "cpp/io/c/fwscanf"
header: "<cwchar>"
category: "io"
---

Reads data from the a variety of sources, interprets it according to format and stores the results into given locations.

## Declarations
```cpp
int wscanf( const wchar_t* format, ... );
```

```cpp
int fwscanf( std::FILE* stream, const wchar_t* format, ... );
```

```cpp
int swscanf( const wchar_t* buffer, const wchar_t* format, ... );
```

## Parameters
- `stream`: input file stream to read from
- `buffer`: pointer to a null-terminated wide string to read from
- `format`: pointer to a null-terminated wide string specifying how to read the input
- `...`: receiving arguments.

## Return value
Number of arguments successfully read, or [EOF](/cpp/io/c/) if failure occurs before the first receiving argument was assigned.

## Example
This section is incompleteReason: no example

## See also
- [vwscanfvfwscanfvswscanf](/cpp/io/c/vfwscanf/)
- [stdin](/cpp/io/c/std_streams/)
- [C documentation](/c/io/fwscanf/)
