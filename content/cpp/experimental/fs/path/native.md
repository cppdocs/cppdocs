---
title: "std::experimental::filesystem::path::c_str, std::experimental::filesystem::path::native, std::experimental::filesystem::path::operator string_type()"
source_path: "cpp/experimental/fs/path/native"
category: "experimental"
---

Accesses the native path name as a character string.

## Declarations
```cpp
const value_type* c_str() const;
```
_(filesystem TS)_

```cpp
const string_type& native() const;
```
_(filesystem TS)_

```cpp
operator string_type() const;
```
_(filesystem TS)_

## Return value
The native string representation of the pathname, using native syntax, native character type, and native character encoding. This string is suitable for use with OS APIs.

## Notes
The conversion function (3) is provided so that standard file-opening APIs that accept [std::basic_string](/cpp/string/basic_string/) file names, such as the [std::ifstream](/cpp/io/basic_ifstream/) constructor, can use pathnames with no changes to code:

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
- [stringwstringu8stringu16stringu32string](/cpp/experimental/fs/path/string/)
- [generic_stringgeneric_wstringgeneric_u8stringgeneric_u16stringgeneric_u32string](/cpp/experimental/fs/path/generic_string/)
