---
title: "std::experimental::filesystem::u8path"
source_path: "cpp/experimental/fs/path/u8path"
header: "<experimental/filesystem>"
category: "experimental"
---

Constructs a path p from a UTF-8 encoded sequence of chars, supplied either as an [std::string](/cpp/string/basic_string/), or as a null-terminated multibyte string, or as a [first, last) iterator pair.

## Declarations
```cpp
template< class Source >
path u8path( const Source& source );
```
_(filesystem TS)_

```cpp
template< class InputIt >
path u8path( InputIt first, InputIt last );
```
_(filesystem TS)_

## Parameters
- `source`: a UTF-8 encoded std::string, pointer to a null-terminated multibyte string, or an input iterator with char value type that points to a null-terminated multibyte string
- `first, last`: pair of LegacyInputIterators that specify a UTF-8 encoded character sequence

## Return value
The path constructed from the input string after conversion from UTF-8 to the filesystem's native character encoding.

## Notes
On systems where native path format differs from the generic path format (neither Windows nor POSIX systems are examples of such OSes), if the argument to this function is using generic format, it will be converted to native.

## Example
```cpp
#include <clocale>
#include <cstdio>
#include <experimental/filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    std::setlocale(LC_ALL, "en_US.utf8");
    std::locale::global(std::locale("en_US.utf8"));
 
    fs::path p = fs::u8path(u8"要らない.txt");
 
    // native string representation can be used with OS APIs
    std::ofstream(p) << "File contents"; // this uses operator string()
    if (std::FILE* f = std::fopen(p.c_str(), "r"))
    {
        int ch;
        while ((ch=fgetc(f))!= EOF) putchar(ch);
        std::fclose(f);
    }
 
    // multibyte and wide representation can be used for output
    std::cout.imbue(std::locale());
    std::cout << "\nFile name in narrow multibyte encoding: "
              << p.string() << '\n';
 
    std::wcerr.imbue(std::locale());
    std::wcerr << "File name in wide encoding: "
               << p.wstring() << '\n';
 
    fs::remove(p);
}
```

## See also
- [path](/cpp/experimental/fs/path/)
