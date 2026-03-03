---
title: "std::regex_traits<CharT>::translate"
source_path: "cpp/regex/regex_traits/translate"
category: "regex"
---

Obtains the comparison key for the character c, such that all characters that are equivalent to this character in the imbued locale produce the same key.

## Declarations
```cpp
CharT translate( CharT c ) const;
```

## Parameters
- `c`: character that needs to be examined for equivalence

## Return value
The comparison key for c in the currently imbued locale.

## Example
This section is incompleteReason: no example
