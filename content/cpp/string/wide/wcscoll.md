---
title: "std::wcscoll"
source_path: "cpp/string/wide/wcscoll"
header: "<cwchar>"
category: "string"
---

Compares two null-terminated wide strings according to the locale most recently installed by [std::setlocale](/cpp/locale/setlocale/), as defined by the [LC_COLLATE](/cpp/locale/lc_categories/) category.

## Declarations
```cpp
int wcscoll( const wchar_t* lhs, const wchar_t* rhs );
```

## Parameters
- `lhs, rhs`: pointers to the null-terminated wide strings to compare

## Return value
Negative value if lhs is less than (precedes) rhs.

## Notes
Collation order is the dictionary order: the position of the letter in the national alphabet (its equivalence class) has higher priority than its case or variant. Within an equivalence class, lowercase characters collate before their uppercase equivalents and locale-specific order may apply to the characters with diacritics. In some locales, groups of characters compare as single collation units. For example, "ch" in Czech follows "h" and precedes "i", and "dzs" in Hungarian follows "dz" and precedes "g".

## Example
```cpp
#include <clocale>
#include <iostream>
 
void try_compare(const wchar_t* p1, const wchar_t* p2)
{
    if (std::wcscoll(p1, p2) < 0)
        std::wcout << p1 << " before " << p2 << '\n';
    else
        std::wcout << p2 << " before " << p1 << '\n';
}
 
int main()
{
    std::setlocale(LC_ALL, "en_US.utf8");
    std::wcout << "In the American locale: ";
    try_compare(L"hrnec", L"chrt");
 
    std::setlocale(LC_COLLATE, "cs_CZ.utf8");
    std::wcout << "In the Czech locale: ";
    try_compare(L"hrnec", L"chrt");
 
    std::setlocale(LC_COLLATE, "en_US.utf8");
    std::wcout << "In the American locale: ";
    try_compare(L"år", L"ängel");
 
    std::setlocale(LC_COLLATE, "sv_SE.utf8");
    std::wcout << "In the Swedish locale: ";
    try_compare(L"år", L"ängel");
}
```

## See also
- [strcoll](/cpp/string/byte/strcoll/)
- [do_compare](/cpp/locale/collate/compare/)
- [wcsxfrm](/cpp/string/wide/wcsxfrm/)
- [C documentation](/c/string/wide/wcscoll/)
