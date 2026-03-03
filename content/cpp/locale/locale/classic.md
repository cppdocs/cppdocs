---
title: "std::locale::classic"
source_path: "cpp/locale/locale/classic"
category: "locale"
---

Obtains a reference to the C++ locale that implements the classic "C" locale semantics. This locale, unlike the global locale, cannot be altered.

## Declarations
```cpp
static const locale& classic();
```

## Return value
Returns a reference to the "C" locale.

## Notes
Some of the standard-required facets, such as the UTF-8/UTF-32 conversion facet [std::codecvt](/cpp/locale/codecvt/)<char32_t, char, [std::mbstate_t](/cpp/string/multibyte/mbstate_t/)>, have no equivalents in the "C" locale, but they are nevertheless present in the locale returned by std::locale::classic(), as in any other locale constructed in a C++ program.

## Example
This section is incompleteReason: no example

## See also
- [global](/cpp/locale/locale/global/)
