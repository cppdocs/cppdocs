---
title: "std::strcoll"
source_path: "cpp/string/byte/strcoll"
header: "<cstring>"
category: "string"
---

Compares two null-terminated byte strings according to the current locale as defined by the [LC_COLLATE](/cpp/locale/lc_categories/) category.

## Declarations
```cpp
int strcoll( const char* lhs, const char* rhs );
```

## Parameters
- `lhs, rhs`: pointers to the null-terminated byte strings to compare

## Notes
Collation order is the dictionary order: the position of the letter in the national alphabet (its equivalence class) has higher priority than its case or variant. Within an equivalence class, lowercase characters collate before their uppercase equivalents and locale-specific order may apply to the characters with diacritics. In some locales, groups of characters compare as single collation units. For example, "ch" in Czech follows "h" and precedes "i", and "dzs" in Hungarian follows "dz" and precedes "g".

## Example
```cpp
#include <clocale>
#include <cstring>
#include <iostream>
 
int main()
{
    std::setlocale(LC_COLLATE, "cs_CZ.utf8");
    // Alternatively, ISO-8859-2 (a.k.a. Latin-2)
    // may also work on some OS:
    // std::setlocale(LC_COLLATE, "cs_CZ.iso88592");
 
    const char* s1 = "hrnec";
    const char* s2 = "chrt";
 
    std::cout << "In the Czech locale: ";
    if (std::strcoll(s1, s2) < 0)
        std::cout << s1 << " before " << s2 << '\n';
    else
        std::cout << s2 << " before " << s1 << '\n';
 
    std::cout << "In lexicographical comparison: ";
    if (std::strcmp(s1, s2) < 0)
        std::cout << s1 << " before " << s2 << '\n';
    else
        std::cout << s2 << " before " << s1 << '\n';
}
```

## See also
- [wcscoll](/cpp/string/wide/wcscoll/)
- [do_compare](/cpp/locale/collate/compare/)
- [strxfrm](/cpp/string/byte/strxfrm/)
- [C documentation](/c/string/byte/strcoll/)
