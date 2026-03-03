---
title: "std::towupper"
source_path: "cpp/string/wide/towupper"
header: "<cwctype>"
category: "string"
---

Converts the given wide character to uppercase, if possible.

## Declarations
```cpp
std::wint_t towupper( std::wint_t ch );
```

## Parameters
- `ch`: wide character to be converted

## Return value
Uppercase version of ch or unmodified ch if no uppercase version is listed in the current C locale.

## Notes
Only 1:1 character mapping can be performed by this function, e.g. the uppercase form of 'ß' is (with some exceptions) the two-character string "SS", which cannot be obtained by std::towupper.

[ISO 30112](https://www.open-std.org/JTC1/SC35/WG5/docs/30112d10.pdf) specifies which pairs of Unicode characters are included in this mapping.

## Example
```cpp
#include <clocale>
#include <cwctype>
#include <iostream>
 
int main()
{
    wchar_t c = L'\u017f'; // Latin small letter Long S ('ſ')
 
    std::cout << std::hex << std::showbase;
    std::cout << "in the default locale, towupper("
              << static_cast<std::wint_t>(c) << ") = "
              << std::towupper(c) << '\n';
 
    std::setlocale(LC_ALL, "en_US.utf8");
    std::cout << "in Unicode locale, towupper("
              << static_cast<std::wint_t>(c) << ") = "
              << std::towupper(c) << '\n';
}
```

## See also
- [towlower](/cpp/string/wide/towlower/)
- [toupper(std::locale)](/cpp/locale/toupper/)
- [toupper](/cpp/string/byte/toupper/)
- [C documentation](/c/string/wide/towupper/)
