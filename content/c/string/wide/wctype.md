---
title: "wctype"
source_path: "c/string/wide/wctype"
header: "<wctype.h>"
category: "c"
---

Constructs a value of type wctype_t that describes a [LC_CTYPE](/c/locale/LC_categories/) category of wide character classification. It may be one of the standard classification categories, or a locale-specific category, such as "jkanji".

## Declarations
```cpp
wctype_t wctype( const char* str );
```
_(since C95)_

## Parameters
- `str`: C string holding the name of the desired category

## Return value
wctype_t object suitable for use with [iswctype](/c/string/wide/iswctype/) to classify wide characters according to the named category of the current C locale or zero if str does not name a category supported by the current C locale.

## See also
- [iswctype](/c/string/wide/iswctype/)
- [LC_CTYPE](/c/locale/LC_categories/)
- [C++ documentation](/cpp/string/wide/wctype/)
