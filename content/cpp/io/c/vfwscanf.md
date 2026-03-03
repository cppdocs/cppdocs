---
title: "std::vwscanf, std::vfwscanf, std::vswscanf"
source_path: "cpp/io/c/vfwscanf"
header: "<cwchar>"
category: "io"
since: "C++11"
---

Reads data from the a variety of sources, interprets it according to format and stores the results into locations defined by vlist.

## Declarations
```cpp
int vwscanf( const wchar_t* format, std::va_list vlist );
```
_(since C++11)_

```cpp
int vfwscanf( std::FILE* stream, const wchar_t* format, std::va_list vlist );
```
_(since C++11)_

```cpp
int vswscanf( const wchar_t* buffer, const wchar_t* format, std::va_list vlist );
```
_(since C++11)_

## Parameters
- `stream`: input file stream to read from
- `buffer`: pointer to a null-terminated wide string to read from
- `format`: pointer to a null-terminated wide string specifying how to read the input
- `vlist`: variable argument list containing the receiving arguments.

## Return value
Number of arguments successfully read, or [EOF](/cpp/io/c/) if failure occurs.

## Example
This section is incompleteReason: no example

## See also
- [wscanffwscanfswscanf](/cpp/io/c/fwscanf/)
- [stdin](/cpp/io/c/std_streams/)
- [C documentation](/c/io/vfwscanf/)
