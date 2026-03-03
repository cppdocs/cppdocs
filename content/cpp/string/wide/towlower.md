---
title: "std::towlower"
source_path: "cpp/string/wide/towlower"
header: "<cwctype>"
category: "string"
---

Converts the given wide character to lowercase, if possible.

## Declarations
```cpp
std::wint_t towlower( std::wint_t ch );
```

## Parameters
- `ch`: wide character to be converted

## Return value
Lowercase version of ch or unmodified ch if no lowercase version is listed in the current C locale.

## Notes
Only 1:1 character mapping can be performed by this function, e.g. the Greek uppercase letter 'Σ' has two lowercase forms, depending on the position in a word: 'σ' and 'ς'. A call to std::towlower cannot be used to obtain the correct lowercase form in this case.

[ISO 30112](https://www.open-std.org/JTC1/SC35/WG5/docs/30112d10.pdf) specifies which pairs of Unicode characters are included in this mapping.

## Example
```cpp
#include <clocale>
#include <cwctype>
#include <iostream>
 
int main()
{
    wchar_t c = L'\u0190'; // Latin capital open E ('Ɛ')
 
    std::cout << std::hex << std::showbase;
    std::cout << "in the default locale, towlower("
              << static_cast<std::wint_t>(c) << ") = "
              << std::towlower(c) << '\n';
    std::setlocale(LC_ALL, "en_US.utf8");
    std::cout << "in Unicode locale, towlower("
              << static_cast<std::wint_t>(c) << ") = "
              << std::towlower(c) << '\n';
}
```

## See also
- [towupper](/cpp/string/wide/towupper/)
- [tolower(std::locale)](/cpp/locale/tolower/)
- [tolower](/cpp/string/byte/tolower/)
- [C documentation](/c/string/wide/towlower/)
