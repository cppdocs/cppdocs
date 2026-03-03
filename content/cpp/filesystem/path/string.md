---
title: "std::filesystem::path::string, std::filesystem::path::wstring, std::filesystem::path::u8string, std::filesystem::path::u16string, std::filesystem::path::u32string"
source_path: "cpp/filesystem/path/string"
category: "filesystem"
since: "C++17"
---

Returns the internal pathname in native pathname format, converted to specific string type. Conversion, if any, is performed as follows:

## Declarations
```cpp
template< class CharT, class Traits = std::char_traits<CharT>,
class Alloc = std::allocator<CharT> >
std::basic_string<CharT,Traits,Alloc>
string( const Alloc& a = Alloc() ) const;
```
_(since C++17)_

```cpp
std::string string() const;
```

```cpp
std::wstring wstring() const;
```

```cpp
std::u16string u16string() const;
```

```cpp
std::u32string u32string() const;
```

```cpp
std::string u8string() const;
```
_(since C++17) (until C++20)_

```cpp
std::u8string u8string() const;
```
_(since C++20)_

## Return value
The internal pathname in native pathname format, converted to specified string type.

## Example
```cpp
#include <clocale>
#include <cstdio>
#include <filesystem>
#include <fstream>
#include <iostream>
#include <locale>
 
int main()
{
    const char* const localeName = "ja_JP.utf-8";
    std::setlocale(LC_ALL, localeName);
    std::locale::global(std::locale(localeName));
 
    const std::filesystem::path p(u8"要らない.txt");
    std::ofstream(p) << "File contents";
 
    // native string representation can be used with OS APIs
    if (std::FILE* const f = std::fopen(p.string().c_str(), "r"))
    {
        for (int ch; (ch = std::fgetc(f)) != EOF;)
            std::putchar(ch);
 
        std::fclose(f);
    }
 
    // multibyte and wide representation can be used for output
    std::cout << "\nFile name in narrow multibyte encoding: " << p.string() << '\n';
 
    // wstring() will throw in stdlibc++ (as per gcc-12.1.0), see:
    // https://gcc.gnu.org/bugzilla/show_bug.cgi?id=95048
    // https://gcc.gnu.org/bugzilla/show_bug.cgi?id=102839
    // works with more recent gcc-12.2.1 (2023/02/01) and clang-10+
    std::wcout << "File name in wide encoding: " << p.wstring() << '\n';
 
    std::filesystem::remove(p);
}
```

## See also
- [generic_stringgeneric_wstringgeneric_u8stringgeneric_u16stringgeneric_u32string](/cpp/filesystem/path/generic_string/)
