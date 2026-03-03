---
title: "wcscoll"
source_path: "c/string/wide/wcscoll"
header: "<wchar.h>"
category: "c"
---

Compares two null-terminated wide strings according to the collation order defined by the [LC_COLLATE](/c/locale/LC_categories/) category of the currently installed locale.

## Declarations
```cpp
int wcscoll( const wchar_t *lhs, const wchar_t *rhs );
```
_(since C95)_

## Parameters
- `lhs, rhs`: pointers to the null-terminated wide strings to compare

## Return value
Negative value if lhs is less than (precedes) rhs.

## Notes
Collation order is the dictionary order: the position of the letter in the national alphabet (its equivalence class) has higher priority than its case or variant. Within an equivalence class, lowercase characters collate before their uppercase equivalents and locale-specific order may apply to the characters with diacritics. In some locales, groups of characters compare as single collation units. For example, "ch" in Czech follows "h" and precedes "i", and "dzs" in Hungarian follows "dz" and precedes "g".

## Example
```cpp
#include <stdio.h>
#include <wchar.h>
#include <locale.h>
 
void try_compare(const wchar_t* p1, const wchar_t* p2)
{
    if(wcscoll(p1, p2) < 0)
        printf("%ls before %ls\n", p1, p2);
    else
        printf("%ls before %ls\n", p2, p1);
}
 
int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
    printf("In the American locale: ");
    try_compare(L"hrnec", L"chrt");
 
    setlocale(LC_COLLATE, "cs_CZ.utf8");
    printf("In the Czech locale: ");
    try_compare(L"hrnec", L"chrt");
 
    setlocale(LC_COLLATE, "en_US.utf8");
    printf("In the American locale: ");
    try_compare(L"år", L"ängel");
 
    setlocale(LC_COLLATE, "sv_SE.utf8");
    printf("In the Swedish locale: ");
    try_compare(L"år", L"ängel");
}
```

## See also
- [strcoll](/c/string/byte/strcoll/)
- [wcsxfrm](/c/string/wide/wcsxfrm/)
- [wcscmp](/c/string/wide/wcscmp/)
- [C++ documentation](/cpp/string/wide/wcscoll/)
