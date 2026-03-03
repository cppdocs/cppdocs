---
title: "std::scanf, std::fscanf, std::sscanf"
source_path: "cpp/io/c/scanf"
header: "<cstdio>"
category: "io"
---

Reads data from a variety of sources, interprets it according to format and stores the results into given locations.

## Declarations
```cpp
int scanf( const char* format, ... );
```

```cpp
int fscanf( std::FILE* stream, const char* format, ... );
```

```cpp
int sscanf( const char* buffer, const char* format, ... );
```

## Parameters
- `stream`: input file stream to read from
- `buffer`: pointer to a null-terminated character string to read from
- `format`: pointer to a null-terminated character string specifying how to read the input
- `...`: receiving arguments

## Return value
Number of receiving arguments successfully assigned (which may be zero in case a matching failure occurred before the first receiving argument was assigned), or [EOF](/cpp/io/c/) if input failure occurs before the first receiving argument was assigned.

## Notes
Because most conversion specifiers first consume all consecutive whitespace, code such as

will read two integers that are entered on different lines (second %d will consume the newline left over by the first) or on the same line, separated by spaces or tabs (second %d will consume the spaces or tabs).

Note that some implementations of std::sscanf involve a call to [std::strlen](/cpp/string/byte/strlen/), which makes their runtime linear on the length of the entire string. This means that if std::sscanf is called in a loop to repeatedly parse values from the front of a string, your code might run in quadratic time ([example](https://nee.lv/2021/02/28/How-I-cut-GTA-Online-loading-times-by-70/#Problem-one-It%E2%80%99s%E2%80%A6-strlen)).

## Example
```cpp
#include <clocale>
#include <cstdio>
#include <iostream>
 
int main()
{
    int i, j;
    float x, y;
    char str1[10], str2[4];
    wchar_t warr[2];
    std::setlocale(LC_ALL, "en_US.utf8");
 
    char input[] = "25 54.32E-1 Thompson 56789 0123 56ß水";
    // parse as follows:
    // %d: an integer 
    // %f: a floating-point value
    // %9s: a string of at most 9 non-whitespace characters
    // %2d: two-digit integer (digits 5 and 6)
    // %f: a floating-point value (digits 7, 8, 9)
    // %*d an integer which isn't stored anywhere
    // ' ': all consecutive whitespace
    // %3[0-9]: a string of at most 3 digits (digits 5 and 6)
    // %2lc: two wide characters, using multibyte to wide conversion
    const int ret = std::sscanf(input, "%d%f%9s%2d%f%*d %3[0-9]%2lc",
                                &i, &x, str1, &j, &y, str2, warr);
 
    std::cout << "Converted " << ret << " fields:\n"
                 "i = " << i << "\n"
                 "x = " << x << "\n"
                 "str1 = " << str1 << "\n"
                 "j = " << j << "\n"
                 "y = " << y << "\n"
                 "str2 = " << str2 << std::hex << "\n"
                 "warr[0] = U+" << (int)warr[0] << "\n"
                 "warr[1] = U+" << (int)warr[1] << '\n';
}
```

## See also
- [vscanfvfscanfvsscanf](/cpp/io/c/vfscanf/)
- [stdin](/cpp/io/c/std_streams/)
- [fgets](/cpp/io/c/fgets/)
- [printffprintfsprintfsnprintf](/cpp/io/c/printf/)
- [stdout](/cpp/io/c/std_streams/)
- [from_chars](/cpp/utility/from_chars/)
- [C documentation](/c/io/fscanf/)
