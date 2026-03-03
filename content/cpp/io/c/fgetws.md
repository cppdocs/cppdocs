---
title: "std::fgetws"
source_path: "cpp/io/c/fgetws"
header: "<cwchar>"
category: "io"
---

Reads at most count - 1 wide characters from the given file stream and stores them in str. The produced wide string is always null-terminated. Parsing stops if end-of-file occurs or a newline wide character is found, in which case str will contain that wide newline character.

## Declarations
```cpp
wchar_t* fgetws( wchar_t* str, int count, std::FILE* stream );
```

## Parameters
- `str`: wide string to read the characters to
- `count`: the length of str
- `stream`: file stream to read the data from

## Return value
str on success, a null pointer on an error.

## Example
```cpp
#include <array>
#include <clocale>
#include <cstdio>
#include <cstdlib>
#include <cwchar>
#include <cwctype>
#include <iomanip>
#include <iostream>
#include <span>
#include <string>
 
void dump(std::span<const wchar_t> sp, std::size_t width = 14)
{
    for (wchar_t wc : sp)
        std::wcout << (std::iswprint(wc) ? wc : L'.');
    std::wcout << std::wstring(width > sp.size() ? width - sp.size() : 1, L' ')
               << std::hex << std::uppercase << std::setfill(L'0');
    for (wchar_t wc : sp)
        std::wcout << std::setw(sizeof wc) << static_cast<unsigned>(wc) << ' ';
    std::wcout << '\n';
}
 
int main()
{
    // Create temp file that contains wide characters
    std::setlocale(LC_ALL, "en_US.utf8");
    std::FILE* tmpf = std::tmpfile();
 
    for (const wchar_t* text : {
        L"Tétraèdre"    L"\n",
        L"Cube"         L"\n",
        L"Octaèdre"     L"\n",
        L"Icosaèdre"    L"\n",
        L"Dodécaèdre"   L"\n"
        })
        if (int rc = std::fputws(text, tmpf); rc == EOF)
        {
            std::perror("fputws()"); // POSIX requires that errno is set
            return EXIT_FAILURE;
        }
 
    std::rewind(tmpf);
 
    std::array<wchar_t, 12> buf;
    while (std::fgetws(buf.data(), buf.size(), tmpf) != nullptr)
        dump(std::span(buf.data(), buf.size()));
 
    return EXIT_SUCCESS;
}
```

## See also
- [wscanffwscanfswscanf](/cpp/io/c/fwscanf/)
- [stdin](/cpp/io/c/std_streams/)
- [fgetwcgetwc](/cpp/io/c/fgetwc/)
- [fputws](/cpp/io/c/fputws/)
- [C documentation](/c/io/fgetws/)
