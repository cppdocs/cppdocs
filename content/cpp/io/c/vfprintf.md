---
title: "std::vprintf, std::vfprintf, std::vsprintf, std::vsnprintf"
source_path: "cpp/io/c/vfprintf"
header: "<cstdio>"
category: "io"
since: "C++11"
---

Loads the data from the locations, defined by vlist, converts them to character string equivalents and writes the results to a variety of sinks.

## Declarations
```cpp
int vprintf( const char* format, std::va_list vlist );
```

```cpp
int vfprintf( std::FILE* stream, const char* format, std::va_list vlist );
```

```cpp
int vsprintf( char* buffer, const char* format, std::va_list vlist );
```

```cpp
int vsnprintf( char* buffer, std::size_t buf_size, const char* format, std::va_list vlist );
```
_(since C++11)_

## Parameters
- `stream`: output file stream to write to
- `buffer`: pointer to a character string to write to
- `buf_size`: maximum number of characters to write
- `format`: pointer to a null-terminated character string specifying how to interpret the data
- `vlist`: variable argument list containing the data to print

## Notes
All these functions invoke [va_arg](/cpp/utility/variadic/va_arg/) at least once, the value of arg is indeterminate after the return. These functions do not invoke [va_end](/cpp/utility/variadic/va_end/), and it must be done by the caller.

## Example
```cpp
#include <cstdarg>
#include <cstdio>
#include <ctime>
#include <vector>
 
void debug_log(const char *fmt, ...)
{
    std::time_t t = std::time(nullptr);
    char time_buf[100];
    std::strftime(time_buf, sizeof time_buf, "%D %T", std::gmtime(&t));
    std::va_list args1;
    va_start(args1, fmt);
    std::va_list args2;
    va_copy(args2, args1);
    std::vector<char> buf(1 + std::vsnprintf(nullptr, 0, fmt, args1));
    va_end(args1);
    std::vsnprintf(buf.data(), buf.size(), fmt, args2);
    va_end(args2);
    std::printf("%s [debug]: %s\n", time_buf, buf.data());
}
 
int main()
{
    debug_log("Logging, %d, %d, %d", 1, 2, 3);
}
```

## See also
- [printffprintfsprintfsnprintf](/cpp/io/c/printf/)
- [stdout](/cpp/io/c/std_streams/)
- [vscanfvfscanfvsscanf](/cpp/io/c/vfscanf/)
- [stdin](/cpp/io/c/std_streams/)
- [vprint_unicodevprint_unicode_buffered](/cpp/io/vprint_unicode/)
- [stdout](/cpp/io/c/std_streams/)
- [type-erased](/cpp/utility/format/basic_format_args/)
- [vprint_nonunicodevprint_nonunicode_buffered](/cpp/io/vprint_nonunicode/)
- [stdout](/cpp/io/c/std_streams/)
- [type-erased](/cpp/utility/format/basic_format_args/)
- [C documentation](/c/io/vfprintf/)
