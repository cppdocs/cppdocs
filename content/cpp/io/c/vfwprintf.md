---
title: "std::vwprintf, std::vfwprintf, std::vswprintf"
source_path: "cpp/io/c/vfwprintf"
header: "<cwchar>"
category: "io"
---

Loads the data from locations, defined by vlist,, converts them to wide string equivalents and writes the results to a variety of sinks.

## Declarations
```cpp
int vwprintf( const wchar_t* format, va_list vlist );
```

```cpp
int vfwprintf( std::FILE* stream, const wchar_t* format, va_list vlist );
```

```cpp
int vswprintf( wchar_t* buffer, std::size_t buf_size, const wchar_t* format, va_list vlist );
```

## Parameters
- `stream`: output wide stream to write to
- `buffer`: pointer to a wide string to write to
- `buf_size`: maximum number of wide characters to write
- `format`: pointer to a null-terminated wide string specifying how to interpret the data
- `vlist`: variable argument list containing the data to print.

## Notes
While narrow strings provide [std::vsnprintf](/cpp/io/c/vfprintf/), which makes it possible to determine the required output buffer size, there is no equivalent for wide strings, and in order to determine the buffer size, the program may need to call std::vswprintf, check the result value, and reallocate a larger buffer, trying again until successful.

## Example
This section is incompleteReason: no example

## See also
- [vprintfvfprintfvsprintfvsnprintf](/cpp/io/c/vfprintf/)
- [stdout](/cpp/io/c/std_streams/)
- [wprintffwprintfswprintf](/cpp/io/c/fwprintf/)
- [stdout](/cpp/io/c/std_streams/)
- [C documentation](/c/io/vfwprintf/)
