---
title: "std::basic_regex<CharT,Traits>::imbue"
source_path: "cpp/regex/basic_regex/imbue"
category: "regex"
since: "C++11"
---

Replaces the current locale with loc. The regular expression does not match any character sequence after the call.

## Declarations
```cpp
locale_type imbue( locale_type loc );
```
_(since C++11)_

## Parameters
- `loc`: new locale to use

## Return value
The locale before the call to this function. Effectively returns the result of expression traits_i.imbue(loc).

## Example
This section is incompleteReason: no example

## See also
- [getloc](/cpp/regex/basic_regex/getloc/)
