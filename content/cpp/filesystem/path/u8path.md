---
title: "std::filesystem::u8path"
source_path: "cpp/filesystem/path/u8path"
header: "<filesystem>"
category: "filesystem"
---

Constructs a path p from a UTF-8 encoded sequence of charsor char8_ts(since C++20), supplied either as an [std::string](/cpp/string/basic_string/), or as [std::string_view](/cpp/string/basic_string_view/), or as a null-terminated multibyte string, or as a [first, last) iterator pair.

## Declarations
```cpp
template< class Source >
std::filesystem::path u8path( const Source& source );
```
_(since C++17) (deprecated in C++20)_

```cpp
template< class InputIt >
std::filesystem::path u8path( InputIt first, InputIt last );
```
_(since C++17) (deprecated in C++20)_

## Parameters
- `source`: a UTF-8 encoded std::string, std::string_view, a pointer to a null-terminated multibyte string, or an input iterator with char value type that points to a null-terminated multibyte string
- `first, last`: pair of LegacyInputIterators that specify a UTF-8 encoded character sequence

## Return value
The path constructed from the input string after conversion from UTF-8 to the filesystem's native character encoding.

## Notes
On systems where native path format differs from the generic path format (neither Windows nor POSIX systems are examples of such OSes), if the argument to this function is using generic format, it will be converted to native.

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
- [path](/cpp/filesystem/path/)
