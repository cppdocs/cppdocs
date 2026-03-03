---
title: "std::ctype<CharT>::narrow, do_narrow"
source_path: "cpp/locale/ctype/narrow"
header: "<locale>"
category: "locale"
---

1,2) Public member function, calls the corresponding protected virtual member function do_narrow overload of the most derived class. Overload (1) calls do_narrow(c, dflt), overload (2) calls do_narrow(beg, end, dflt, dst).

## Declarations
```cpp
public:
char narrow( CharT c, char dflt ) const;
```

```cpp
public:
const CharT* narrow( const CharT* beg, const CharT* end,
char dflt, char* dst ) const;
```

```cpp
protected:
virtual char do_narrow( CharT c, char dflt ) const;
```

```cpp
protected:
virtual const CharT* do_narrow( const CharT* beg, const CharT* end,
char dflt, char* dst ) const;
```

## Parameters
- `c`: character to convert
- `dflt`: default value to produce if the conversion fails
- `beg`: pointer to the first character in an array of characters to convert
- `end`: one past the end pointer for the array of characters to convert
- `dst`: pointer to the first element of the array of characters to fill

## Example
```cpp
#include <iostream>
#include <locale>
 
void try_narrow(const std::ctype<wchar_t>& f, wchar_t c)
{
    char n = f.narrow(c, 0);
    if (n)
        std::wcout << '\'' << c << "' narrowed to " << +(unsigned char)n << '\n';
    else
        std::wcout << '\'' << c << "' could not be narrowed\n";
}
 
int main()
{
    std::locale::global(std::locale("en_US.utf8"));
    std::wcout.imbue(std::locale());
    std::wcout << std::hex << std::showbase << "In US English UTF-8 locale:\n";
    auto& f = std::use_facet<std::ctype<wchar_t>>(std::locale());
    try_narrow(f, L'A');
    try_narrow(f, L'Ａ');
    try_narrow(f, L'ě');
 
    std::locale::global(std::locale("cs_CZ.iso88592"));
    auto& f2 = std::use_facet<std::ctype<wchar_t>>(std::locale());
    std::wcout << "In Czech ISO-8859-2 locale:\n";
    try_narrow(f2, L'A');
    try_narrow(f2, L'Ａ');
    try_narrow(f2, L'ě');
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 126 | C++98 | 1. the code representing reversibility wasdo_widen(do_narrow(c), 0) == c2. the code representing category preservation wasis(m, c) \|\| !ctc.is(m, do_narrow(c), dflt) | corrected both |
| LWG 153 | C++98 | narrow always called overload (4) | calls the corresponding overload |

## See also
- [widen](/cpp/locale/ctype/widen/)
- [narrow](/cpp/io/basic_ios/narrow/)
- [wctob](/cpp/string/multibyte/wctob/)
