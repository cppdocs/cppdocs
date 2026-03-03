---
title: "std::vscanf, std::vfscanf, std::vsscanf"
source_path: "cpp/io/c/vfscanf"
header: "<cstdio>"
category: "io"
since: "C++11"
---

Reads data from a variety of sources, interprets it according to format and stores the results into locations defined by vlist.

## Declarations
```cpp
int vscanf( const char* format, std::va_list vlist );
```
_(since C++11)_

```cpp
int vfscanf( std::FILE* stream, const char* format, std::va_list vlist );
```
_(since C++11)_

```cpp
int vsscanf( const char* buffer, const char* format, std::va_list vlist );
```
_(since C++11)_

## Parameters
- `stream`: input file stream to read from
- `buffer`: pointer to a null-terminated character string to read from
- `format`: pointer to a null-terminated character string specifying how to read the input
- `vlist`: variable argument list containing the receiving arguments.

## Return value
Number of arguments successfully read, or [EOF](/cpp/io/c/) if failure occurs.

## Notes
All these functions invoke [va_arg](/cpp/utility/variadic/va_arg/) at least once, the value of arg is indeterminate after the return. These functions to not invoke [va_end](/cpp/utility/variadic/va_end/), and it must be done by the caller.

## Example
```cpp
#include <cstdarg>
#include <cstdio>
#include <iostream>
#include <stdexcept>
 
void checked_sscanf(int count, const char* buf, const char *fmt, ...)
{
    std::va_list ap;
    va_start(ap, fmt);
    if (std::vsscanf(buf, fmt, ap) != count)
        throw std::runtime_error("parsing error");
    va_end(ap);
}
 
int main()
{
    try
    {
        int n, m;
        std::cout << "Parsing '1 2'... ";
        checked_sscanf(2, "1 2", "%d %d", &n, &m);
        std::cout << "success\n";
        std::cout << "Parsing '1 a'... ";
        checked_sscanf(2, "1 a", "%d %d", &n, &m);
        std::cout << "success\n";
    }
    catch (const std::exception& e)
    {
        std::cout << e.what() << '\n';
    }
}
```

## See also
- [scanffscanfsscanf](/cpp/io/c/scanf/)
- [stdin](/cpp/io/c/std_streams/)
- [vprintfvfprintfvsprintfvsnprintf](/cpp/io/c/vfprintf/)
- [stdout](/cpp/io/c/std_streams/)
- [C documentation](/c/io/vfscanf/)
