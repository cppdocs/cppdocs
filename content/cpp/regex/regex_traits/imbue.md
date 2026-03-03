---
title: "std::regex_traits<CharT>::imbue"
source_path: "cpp/regex/regex_traits/imbue"
category: "regex"
since: "C++11"
---

Replaces the current locale with a copy of loc. If loc is different than the current locale, then all cached data is invalidated.

## Declarations
```cpp
locale_type imbue( locale_type loc );
```
_(since C++11)_

## Parameters
- `loc`: the locale to imbue

## Return value
The current locale of the traits object.

## Example
This section is incompleteReason: no example

## See also
- [getloc](/cpp/regex/regex_traits/getloc/)
