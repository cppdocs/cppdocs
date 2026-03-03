---
title: "wctrans"
source_path: "c/string/wide/wctrans"
header: "<wctype.h>"
category: "c"
---

Constructs a value of type wctrans_t that describes a [LC_CTYPE](/c/locale/LC_categories/) category of wide character mapping. It may be one of the standard mappings, or a locale-specific mapping, such as "tojhira" or "tojkata".

## Declarations
```cpp
wctrans_t wctrans( const char* str );
```
_(since C95)_

## Parameters
- `str`: C string holding the name of the desired mapping. The following values of str are supported in all C locales: Value of str Effect "toupper" identifies the mapping used by towupper "tolower" identifies the mapping used by towlower

## Return value
wctrans_t object suitable for use with [towctrans](/c/string/wide/towctrans/) to map wide characters according to the named mapping of the current C locale or zero if str does not name a mapping supported by the current C locale.

## See also
- [towctrans](/c/string/wide/towctrans/)
- [C++ documentation](/cpp/string/wide/wctrans/)
