---
title: "std::ctype<CharT>::widen, do_widen"
source_path: "cpp/locale/ctype/widen"
header: "<locale>"
category: "locale"
---

1,2) Public member function, calls the corresponding protected virtual member function do_widen overload of the most derived class. Overload (1) calls do_widen(c), overload (2) calls do_widen(beg, end, dst).

## Declarations
```cpp
public:
CharT widen( char c ) const;
```

```cpp
public:
const char* widen( const char* beg, const char* end, CharT* dst ) const;
```

```cpp
protected:
virtual CharT do_widen( char c ) const;
```

```cpp
protected:
virtual const char* do_widen( const char* beg, const char* end, CharT* dst ) const;
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
 
void try_widen(const std::ctype<wchar_t>& f, char c)
{
    wchar_t w = f.widen(c);
    std::cout << "The single-byte character " << +(unsigned char)c
              << " widens to " << +w << '\n';
}
 
int main()
{
    std::locale::global(std::locale("cs_CZ.iso88592"));
    auto& f = std::use_facet<std::ctype<wchar_t>>(std::locale());
    std::cout << std::hex << std::showbase << "In Czech ISO-8859-2 locale:\n";
    try_widen(f, 'a');
    try_widen(f, '\xdf'); // German letter ß (U+00df) in ISO-8859-2
    try_widen(f, '\xec'); // Czech letter ě (U+011b) in ISO-8859-2
 
    std::locale::global(std::locale("cs_CZ.utf8"));
    auto& f2 = std::use_facet<std::ctype<wchar_t>>(std::locale());
    std::cout << "In Czech UTF-8 locale:\n";
    try_widen(f2, 'a');
    try_widen(f2, '\xdf'); 
    try_widen(f2, '\xec'); 
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 153 | C++98 | widen always called overload (4) | calls the corresponding overload |

## See also
- [narrow](/cpp/locale/ctype/narrow/)
- [widen](/cpp/io/basic_ios/widen/)
- [btowc](/cpp/string/multibyte/btowc/)
