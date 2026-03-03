---
title: "std::fwide"
source_path: "cpp/io/c/fwide"
header: "<cwchar>"
category: "io"
---

If mode > 0, attempts to make stream wide-oriented. If mode < 0, attempts to make stream byte-oriented. If mode == 0, only queries the current orientation of the stream.

## Declarations
```cpp
int fwide( std::FILE* stream, int mode );
```

## Parameters
- `stream`: pointer to the C I/O stream to modify or query
- `mode`: integer value greater than zero to set the stream wide, less than zero to set the stream narrow, or zero to query only

## Return value
An integer greater than zero if the stream is wide-oriented after this call, less than zero if the stream is byte-oriented after this call, and zero if the stream has no orientation.

## Example
```cpp
#include <cstdio>
#include <cstdlib>
#include <cwchar>
#include <iostream>
 
void show_orientation(int n)
{
    n < 0 ? std::wcout << "\tnarrow orientation\n" :
    n > 0 ? std::wcout << "\twide orientation\n" :
            std::wcout << "\tno orientation\n";
}
 
void try_read(FILE* fp)
{
    if (const int c = std::fgetc(fp); c == EOF)
        std::wcout << "\tnarrow character read failed\n";
    else
        std::wcout << "\tnarrow character read '" << static_cast<char>(c) << "'\n";
 
    if (const wint_t wc = std::fgetwc(fp); wc == WEOF)
        std::wcout << "\twide character read failed\n";
    else
        std::wcout << "\twide character read '" << static_cast<wchar_t>(wc) << "'\n";
}
 
int main()
{
    enum fwide_orientation : int { narrow = -1, query, wide };
 
    FILE* fp = std::fopen("main.cpp", "r");
    if (!fp)
    {
        std::wcerr << "fopen() failed\n";
        return EXIT_FAILURE;
    }
 
    std::wcout << "1) A newly opened stream has no orientation.\n";
    show_orientation(std::fwide(fp, fwide_orientation::query));
 
    std::wcout << "2) Establish byte orientation.\n";
    show_orientation(std::fwide(fp, fwide_orientation::narrow));
    try_read(fp);
 
    std::wcout << "3) Only freopen() can reset stream orientation.\n";
    if (std::freopen("main.cpp", "r", fp) == NULL)
    {
        std::wcerr << "freopen() failed\n";
        return EXIT_FAILURE;
    }
 
    std::wcout << "4) A reopened stream has no orientation.\n";
    show_orientation(std::fwide(fp, fwide_orientation::query));
 
    std::wcout << "5) Establish wide orientation.\n";
    show_orientation(std::fwide(fp, fwide_orientation::wide));
    try_read(fp);
 
    std::fclose(fp);
}
```

## See also
- [fopen](/cpp/io/c/fopen/)
- [C documentation](/c/io/fwide/)
