---
title: "strcoll"
source_path: "c/string/byte/strcoll"
header: "<string.h>"
category: "c"
---

Compares two null-terminated byte strings according to the current locale as defined by the [LC_COLLATE](/c/locale/LC_categories/) category.

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
#include <locale.h>
#include <stdio.h>
#include <string.h>
 
int main(void)
{
    setlocale(LC_COLLATE, "cs_CZ.utf8");
    // Alternatively, ISO-8859-2 (a.k.a. Latin-2)
    // may also work on some OS:
    // setlocale(LC_COLLATE, "cs_CZ.iso88592");
 
    const char* s1 = "hrnec";
    const char* s2 = "chrt";
 
    printf("In the Czech locale: ");
    if (strcoll(s1, s2) < 0)
        printf("%s before %s\n", s1, s2);
    else
        printf("%s before %s\n", s2, s1);
 
    printf("In lexicographical comparison: ");
    if (strcmp(s1, s2) < 0)
        printf("%s before %s\n", s1, s2);
    else
        printf("%s before %s\n", s2, s1);
}
```

## See also
- [wcscoll](/c/string/wide/wcscoll/)
- [strxfrm](/c/string/byte/strxfrm/)
- [wcsxfrm](/c/string/wide/wcsxfrm/)
- [strcmp](/c/string/byte/strcmp/)
- [C++ documentation](/cpp/string/byte/strcoll/)
