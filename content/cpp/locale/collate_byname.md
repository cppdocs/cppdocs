---
title: "std::collate_byname"
source_path: "cpp/locale/collate_byname"
header: "<locale>"
category: "locale"
---

std::collate_byname is a [std::collate](/cpp/locale/collate/) facet which encapsulates locale-specific collation (comparison) and hashing of strings. Just like [std::collate](/cpp/locale/collate/), it can be imbued in [std::regex](/cpp/regex/basic_regex/) and applied, by means of [std::locale::operator()](/cpp/locale/locale/operator/), directly to all standard algorithms that expect a string comparison predicate.

## Declarations
```cpp
template< class CharT >
class collate_byname : public std::collate<CharT>;
```

## Parameters
- `name`: the name of the locale
- `refs`: the number of references that link to the facet

## Notes
Collation order is the dictionary order: the position of the letter in the national alphabet (its equivalence class) has higher priority than its case or variant. Within an equivalence class, lowercase characters collate before their uppercase equivalents and locale-specific order may apply to the characters with diacritics. In some locales, groups of characters compare as single collation units. For example, "ch" in Czech follows "h" and precedes "i", and "dzs" in Hungarian follows "dz" and precedes "g".

## Example
This section is incompleteReason: no example

## See also
- [collate](/cpp/locale/collate/)
- [strcoll](/cpp/string/byte/strcoll/)
- [wcscoll](/cpp/string/wide/wcscoll/)
- [operator()](/cpp/locale/locale/operator/)
