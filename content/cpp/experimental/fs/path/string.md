---
title: "std::experimental::filesystem::path::string,wstring,u8string,..."
source_path: "cpp/experimental/fs/path/string"
category: "experimental"
---

Returns the internal pathname in native pathname format, converted to specific string type. Conversion, if any, is specified in .

## Declarations
```cpp
template< class CharT, class Traits = std::char_traits<CharT>,
class Alloc = std::allocator<CharT> >
std::basic_string<CharT,Traits,Alloc>
string( const Alloc& a = Alloc() ) const;
```
_(filesystem TS)_

```cpp
std::string string() const;
```

```cpp
std::wstring wstring() const;
```

```cpp
std::string u8string() const;
```

```cpp
std::u16string u16string() const;
```

```cpp
std::u32string u32string() const;
```

## Return value
The internal pathname in native pathname format, converted to specified string type.

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
- [generic_stringgeneric_wstringgeneric_u8stringgeneric_u16stringgeneric_u32string](/cpp/experimental/fs/path/generic_string/)
