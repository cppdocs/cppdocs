---
title: "std::ctype<CharT>::toupper, std::ctype<CharT>::do_toupper"
source_path: "cpp/locale/ctype/toupper"
header: "<locale>"
category: "locale"
---

1,2) Public member function, calls the protected virtual member function do_toupper of the most derived class.

## Declarations
```cpp
public:
CharT toupper( CharT c ) const;
```

```cpp
public:
const CharT* toupper( CharT* beg, const CharT* end ) const;
```

```cpp
protected:
virtual CharT do_toupper( CharT c ) const;
```

```cpp
protected:
virtual const CharT* do_toupper( CharT* beg, const CharT* end ) const;
```

## Parameters
- `c`: character to convert
- `beg`: pointer to the first character in an array of characters to convert
- `end`: one past the end pointer for the array of characters to convert

## Notes
Only 1:1 character mapping can be performed by this function, e.g. the uppercase form of 'ß' is the two-character string "SS" (with some exceptions - see [«Capital ẞ»](https://en.wikipedia.org/wiki/Capital_%E1%BA%9E)), which cannot be obtained by do_toupper.

## Example
```cpp
#include <iostream>
#include <locale>
 
void try_upper(const std::ctype<wchar_t>& f, wchar_t c)
{
    wchar_t up = f.toupper(c);
    if (up != c)
        std::wcout << "Upper case form of \'" << c << "' is " << up << '\n';
    else
        std::wcout << '\'' << c << "' has no upper case form\n";
}
 
int main()
{
    std::locale::global(std::locale("en_US.utf8"));
    std::wcout.imbue(std::locale());
    std::wcout << "In US English UTF-8 locale:\n";
    auto& f = std::use_facet<std::ctype<wchar_t>>(std::locale());
    try_upper(f, L's');
    try_upper(f, L'ſ');
    try_upper(f, L'δ');
    try_upper(f, L'ö');
    try_upper(f, L'ß');
 
    std::wstring str = L"Hello, World!";
    std::wcout << "Uppercase form of the string '" << str << "' is ";
    f.toupper(&str[0], &str[0] + str.size());
    std::wcout << '\'' << str << "'\n";
}
```

## See also
- [tolower](/cpp/locale/ctype/tolower/)
- [toupper](/cpp/string/byte/toupper/)
- [towupper](/cpp/string/wide/towupper/)
