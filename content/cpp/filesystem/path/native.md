---
title: "std::filesystem::path::c_str, std::filesystem::path::native, std::filesystem::path::operator string_type()"
source_path: "cpp/filesystem/path/native"
category: "filesystem"
since: "C++17"
---

Accesses the native path name as a character string.

## Declarations
```cpp
const value_type* c_str() const noexcept;
```
_(since C++17)_

```cpp
const string_type& native() const noexcept;
```
_(since C++17)_

```cpp
operator string_type() const;
```
_(since C++17)_

## Return value
The native string representation of the pathname, using native syntax, native character type, and native character encoding. This string is suitable for use with OS APIs.

## Notes
The conversion function (3) is provided so that APIs that accept [std::basic_string](/cpp/string/basic_string/) file names can use pathnames with no changes to code.

## Example
```cpp
#include <cstdio>
#ifdef _MSC_VER
#include <fcntl.h>
#include <io.h>
#else
#include <clocale>
#include <locale>
#endif
#include <filesystem>
#include <fstream>
 
int main()
{
#ifdef _MSC_VER
    _setmode(_fileno(stderr), _O_WTEXT);
#else
    std::setlocale(LC_ALL, "");
    std::locale::global(std::locale(""));
#endif
 
    std::filesystem::path p(u8"要らない.txt");
    std::ofstream(p) << "File contents"; // Prior to LWG2676 uses operator string_type()
                                         // on MSVC, where string_type is wstring, only
                                         // works due to non-standard extension.
                                         // Post-LWG2676 uses new fstream constructors
 
    // Native string representation can be used with OS-specific APIs
#ifdef _MSC_VER
    if (std::FILE* f = _wfopen(p.c_str(), L"r"))
#else
    if (std::FILE* f = std::fopen(p.c_str(), "r"))
#endif
    {
        for (int ch; (ch = fgetc(f)) != EOF; std::putchar(ch))
        {}
        std::fclose(f);
    }
 
    std::filesystem::remove(p);
}
```

## See also
- [stringwstringu8stringu16stringu32string](/cpp/filesystem/path/string/)
- [generic_stringgeneric_wstringgeneric_u8stringgeneric_u16stringgeneric_u32string](/cpp/filesystem/path/generic_string/)
