---
title: "std::regex_traits<CharT>::translate_nocase"
source_path: "cpp/regex/regex_traits/translate_nocase"
category: "regex"
---

Obtains the comparison key for the character c, such that all characters that are equivalent to this character in the imbued locale, ignoring the case differences, if any, produce the same key.

## Declarations
```cpp
CharT translate_nocase( CharT c ) const;
```

## Parameters
- `c`: character that needs to be examined for equivalence, ignoring case

## Return value
The case-insensitive comparison key for c in the currently imbued locale.

## Example
This section is incompleteReason: no example
