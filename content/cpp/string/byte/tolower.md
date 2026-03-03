---
title: "std::tolower"
source_path: "cpp/string/byte/tolower"
header: "<cctype>"
category: "string"
---

Converts the given character to lowercase according to the character conversion rules defined by the currently installed C locale.

## Declarations
```cpp
int tolower( int ch );
```

## Parameters
- `ch`: character to be converted. If the value of ch is not representable as unsigned char and does not equal EOF, the behavior is undefined

## Return value
Lowercase version of ch or unmodified ch if no lowercase version is listed in the current C locale.

## Notes
Like all other functions from [<cctype>](/cpp/header/cctype/), the behavior of std::tolower is undefined if the argument's value is neither representable as unsigned char nor equal to [EOF](/cpp/io/c/). To use these functions safely with plain chars (or signed chars), the argument should first be converted to unsigned char:

Similarly, they should not be directly used with standard algorithms when the iterator's value type is char or signed char. Instead, convert the value to unsigned char first:

## Example
```cpp
#include <cctype>
#include <clocale>
#include <iostream>
 
int main()
{
    unsigned char c = '\xb4'; // the character Ž in ISO-8859-15
                              // but ´ (acute accent) in ISO-8859-1
 
    std::setlocale(LC_ALL, "en_US.iso88591");
    std::cout << std::hex << std::showbase;
    std::cout << "in iso8859-1, tolower('0xb4') gives " << std::tolower(c) << '\n';
    std::setlocale(LC_ALL, "en_US.iso885915");
    std::cout << "in iso8859-15, tolower('0xb4') gives " << std::tolower(c) << '\n';
}
```

## See also
- [toupper](/cpp/string/byte/toupper/)
- [tolower(std::locale)](/cpp/locale/tolower/)
- [towlower](/cpp/string/wide/towlower/)
- [C documentation](/c/string/byte/tolower/)
