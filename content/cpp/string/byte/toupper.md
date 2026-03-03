---
title: "std::toupper"
source_path: "cpp/string/byte/toupper"
header: "<cctype>"
category: "string"
---

Converts the given character to uppercase according to the character conversion rules defined by the currently installed C locale.

## Declarations
```cpp
int toupper( int ch );
```

## Parameters
- `ch`: character to be converted. If the value of ch is not representable as unsigned char and does not equal EOF, the behavior is undefined.

## Return value
Converted character or ch if no uppercase version is defined by the current C locale.

## Notes
Like all other functions from [<cctype>](/cpp/header/cctype/), the behavior of std::toupper is undefined if the argument's value is neither representable as unsigned char nor equal to [EOF](/cpp/io/c/). To use these functions safely with plain chars (or signed chars), the argument should first be converted to unsigned char:

Similarly, they should not be directly used with standard algorithms when the iterator's value type is char or signed char. Instead, convert the value to unsigned char first:

## Example
```cpp
#include <cctype>
#include <climits>
#include <clocale>
#include <iostream>
#include <ranges>
 
int main()
{
    for (auto bd{0}; unsigned char lc : std::views::iota(0, UCHAR_MAX))
        if (unsigned char uc = std::toupper(lc); uc != lc)
            std::cout << lc << uc << (13 == ++bd ? '\n' : ' ');
    std::cout << "\n\n";
 
    unsigned char c = '\xb8'; // the character ž in ISO-8859-15
                              // but ¸ (cedilla) in ISO-8859-1
 
    std::setlocale(LC_ALL, "en_US.iso88591");
    std::cout << std::hex << std::showbase;
    std::cout << "in iso8859-1, toupper('0xb8') gives " << std::toupper(c) << '\n';
    std::setlocale(LC_ALL, "en_US.iso885915");
    std::cout << "in iso8859-15, toupper('0xb8') gives " << std::toupper(c) << '\n';
}
```

## See also
- [tolower](/cpp/string/byte/tolower/)
- [toupper(std::locale)](/cpp/locale/toupper/)
- [towupper](/cpp/string/wide/towupper/)
- [C documentation](/c/string/byte/toupper/)
