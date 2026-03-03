---
title: "std::gets"
source_path: "cpp/io/c/gets"
header: "<cstdio>"
category: "io"
---

Reads [stdin](/cpp/io/c/std_streams/) into given character string until a newline character is found or end-of-file occurs.

## Declarations
```cpp
char* gets( char* str );
```
_(deprecated in C++11) (removed in C++14)_

## Parameters
- `str`: character string to be written

## Return value
str on success, a null pointer on failure.

## Notes
The std::gets() function does not perform bounds checking. Therefore, this function is extremely vulnerable to buffer-overflow attacks. It cannot be used safely (unless the program runs in an environment which restricts what can appear on stdin). For this reason, the function was deprecated in C++11 and removed altogether in C++14. [std::fgets()](/cpp/io/c/fgets/) may be used instead.

## Example
```cpp
#include <array>
#include <cstdio>
#include <cstring>
 
int main()
{
    std::puts("Never use std::gets(). Use std::fgets() instead!");
 
    std::array<char, 16> buf;
 
    std::printf("Enter a string:\n>");
 
    if (std::fgets(buf.data(), buf.size(), stdin))
    {
        const auto len = std::strlen(buf.data());
        std::printf(
            "The input string:\n[%s] is %s and has the length %li characters.\n",
            buf.data(), len + 1 < buf.size() ? "not truncated" : "truncated", len
        );
    }
    else if (std::feof(stdin))
    {
        std::puts("Error: the end of stdin stream has been reached.");
    }
    else if (std::ferror(stdin))
    {
        std::puts("I/O error when reading from stdin.");
    }
    else
    {
        std::puts("Unknown stdin error.");
    }
}
```

## See also
- [scanffscanfsscanf](/cpp/io/c/scanf/)
- [stdin](/cpp/io/c/std_streams/)
- [fgets](/cpp/io/c/fgets/)
- [fputs](/cpp/io/c/fputs/)
- [C documentation](/c/io/gets/)
