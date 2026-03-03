---
title: "vwscanf, vfwscanf, vswscanf, vwscanf_s, vfwscanf_s, vswscanf_s"
source_path: "c/io/vfwscanf"
header: "<wchar.h>"
category: "c"
---

Reads data from the a variety of sources, interprets it according to format and stores the results into locations defined by vlist.

## Declarations
```cpp
int vwscanf( const wchar_t *restrict format, va_list vlist );
```
_(since C99)_

```cpp
int vfwscanf( FILE *restrict stream,
const wchar_t *restrict format, va_list vlist );
```
_(since C99)_

```cpp
int vswscanf( const wchar_t *restrict buffer,
const wchar_t *restrict format, va_list vlist );
```
_(since C99)_

```cpp
int vwscanf_s( const wchar_t *restrict format, va_list vlist );
```
_(since C11)_

```cpp
int vfwscanf_s( FILE *restrict stream,
const wchar_t *restrict format, va_list vlist );
```
_(since C11)_

```cpp
int vswscanf_s( const wchar_t *restrict buffer,
const wchar_t *restrict format, va_list vlist );
```
_(since C11)_

## Parameters
- `stream`: input file stream to read from
- `buffer`: pointer to a null-terminated wide string to read from
- `format`: pointer to a null-terminated wide string specifying how to read the input
- `vlist`: variable argument list containing the receiving arguments.

## Notes
All these functions may invoke va_arg, the value of arg is indeterminate after the return. These functions to not invoke va_end, and it must be done by the caller.

## Example
This section is incompleteReason: no example

## See also
- [wscanffwscanfswscanfwscanf_sfwscanf_sswscanf_s](/c/io/fwscanf/)
- [stdin](/c/io/std_streams/)
- [C++ documentation](/cpp/io/c/vfwscanf/)
