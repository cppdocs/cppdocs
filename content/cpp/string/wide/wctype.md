---
title: "std::wctype"
source_path: "cpp/string/wide/wctype"
header: "<cwctype>"
category: "string"
---

Constructs a value of type [std::wctype_t](/cpp/string/wide/) that describes a [LC_CTYPE](/cpp/locale/lc_categories/) category of wide character classification. It may be one of the standard classification categories, or a locale-specific category, such as "jkanji".

## Declarations
```cpp
std::wctype_t wctype( const char* str );
```

## Parameters
- `str`: C string holding the name of the desired category

## Return value
[std::wctype_t](/cpp/string/wide/) object suitable for use with [std::iswctype](/cpp/string/wide/iswctype/) to classify wide characters according to the named category of the current C locale or zero if str does not name a category supported by the current C locale.

## See also
- [iswctype](/cpp/string/wide/iswctype/)
- [LC_CTYPE](/cpp/locale/lc_categories/)
- [C documentation](/c/string/wide/wctype/)
