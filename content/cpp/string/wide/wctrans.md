---
title: "std::wctrans"
source_path: "cpp/string/wide/wctrans"
header: "<cwctype>"
category: "string"
---

Constructs a value of type [std::wctrans_t](/cpp/string/wide/) that describes a [LC_CTYPE](/cpp/locale/lc_categories/) category of wide character mapping. It may be one of the standard mappings, or a locale-specific mapping, such as "tojhira" or "tojkata".

## Declarations
```cpp
std::wctrans_t wctrans( const char* str );
```

## Parameters
- `str`: C string holding the name of the desired mapping. The following values of str are supported in all C locales: Value of str Effect "toupper" identifies the mapping used by towupper "tolower" identifies the mapping used by towlower

## Return value
[std::wctrans_t](/cpp/string/wide/) object suitable for use with [std::towctrans](/cpp/string/wide/towctrans/) to map wide characters according to the named mapping of the current C locale or zero if str does not name a mapping supported by the current C locale.

## Example
This section is incompleteReason: no example

## See also
- [towctrans](/cpp/string/wide/towctrans/)
- [LC_CTYPE](/cpp/locale/lc_categories/)
- [C documentation](/c/string/wide/wctrans/)
