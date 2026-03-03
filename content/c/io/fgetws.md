---
title: "fgetws"
source_path: "c/io/fgetws"
header: "<wchar.h>"
category: "c"
---

Reads at most count - 1 wide characters from the given file stream and stores them in str. The produced wide string is always null-terminated. Parsing stops if end-of-file occurs or a newline wide character is found, in which case str will contain that wide newline character.

## Declarations
```cpp
wchar_t* fgetws( wchar_t* str, int count, FILE* stream );
```
_(since C95) (until C99)_

```cpp
wchar_t* fgetws( wchar_t* restrict str, int count, FILE* restrict stream );
```
_(since C99)_

## Parameters
- `str`: wide string to read the characters to
- `count`: the length of str
- `stream`: file stream to read the data from

## Return value
str on success, a null pointer on an error

## Example
This section is incompleteReason: no example

## See also
- [wscanffwscanfswscanfwscanf_sfwscanf_sswscanf_s](/c/io/fwscanf/)
- [stdin](/c/io/std_streams/)
- [fgetwcgetwc](/c/io/fgetwc/)
- [fputws](/c/io/fputws/)
- [getlinegetwlinegetdelimgetwdelim](/c/experimental/dynamic/getline/)
- [C++ documentation](/cpp/io/c/fgetws/)
