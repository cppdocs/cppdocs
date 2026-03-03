---
title: "std::toupper(std::locale)"
source_path: "cpp/locale/toupper"
header: "<locale>"
category: "locale"
---

Converts the character ch to uppercase if possible, using the conversion rules specified by the given locale's [std::ctype](/cpp/locale/ctype/) facet.

## Declarations
```cpp
template< class CharT >
CharT toupper( CharT ch, const locale& loc );
```

## Parameters
- `ch`: character
- `loc`: locale

## Return value
Returns the uppercase form of ch if one is listed in the locale, otherwise returns ch unchanged.

## Notes
Only 1:1 character mapping can be performed by this function, e.g. the uppercase form of 'ß' is (with some exceptions) the two-character string "SS", which cannot be obtained by std::toupper.

## Example
```cpp
#include <cwctype>
#include <iostream>
#include <locale>
 
int main()
{
    wchar_t c = L'\u017f'; // Latin small letter Long S ('ſ')
 
    std::cout << std::hex << std::showbase;
 
    std::cout << "in the default locale, toupper(" << (std::wint_t)c << ") = "
              << (std::wint_t)std::toupper(c, std::locale()) << '\n';
 
    std::cout << "in Unicode locale, toupper(" << (std::wint_t)c << ") = "
              << (std::wint_t)std::toupper(c, std::locale("en_US.utf8")) << '\n';
}
```

## See also
- [tolower(std::locale)](/cpp/locale/tolower/)
- [toupper](/cpp/string/byte/toupper/)
- [towupper](/cpp/string/wide/towupper/)
