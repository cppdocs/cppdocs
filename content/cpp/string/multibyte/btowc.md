---
title: "std::btowc"
source_path: "cpp/string/multibyte/btowc"
header: "<cwchar>"
category: "string"
---

Widens a single-byte character c to its wide character equivalent.

## Declarations
```cpp
std::wint_t btowc( int c );
```

## Parameters
- `c`: single-byte character to widen

## Return value
WEOF if c is [EOF](/cpp/io/c/).

## Example
```cpp
#include <clocale>
#include <cwchar>
#include <iostream>
 
void try_widen(char c)
{
    std::wint_t w = std::btowc(c);
    if (w != WEOF)
        std::cout << "The single-byte character " << +(unsigned char)c
                  << " widens to " << +w << '\n';
    else
        std::cout << "The single-byte character " << +(unsigned char)c
                  << " failed to widen\n";
}
 
int main()
{
    std::setlocale(LC_ALL, "lt_LT.iso88594");
    std::cout << std::hex << std::showbase << "In Lithuanian ISO-8859-4 locale:\n";
    try_widen('A');
    try_widen('\xdf'); // German letter ß (U+00df) in ISO-8859-4
    try_widen('\xf9'); // Lithuanian letter ų (U+0173) in ISO-8859-4
 
    std::setlocale(LC_ALL, "lt_LT.utf8");
    std::cout << "In Lithuanian UTF-8 locale:\n";
    try_widen('A');
    try_widen('\xdf');
    try_widen('\xf9');
}
```

## See also
- [wctob](/cpp/string/multibyte/wctob/)
- [do_widen](/cpp/locale/ctype/widen/)
- [C documentation](/c/string/multibyte/btowc/)
