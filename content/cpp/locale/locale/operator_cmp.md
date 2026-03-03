---
title: "std::locale::operator==, operator!="
source_path: "cpp/locale/locale/operator_cmp"
category: "locale"
---

Tests two locales for equality. Named locales are considered equal if their names are equal. Unnamed locales are considered equal if they are copies of each other.

## Declarations
```cpp
bool operator==( const locale& other ) const;
```

```cpp
bool operator!=( const locale& other ) const;
```
_(until C++20)_

## Parameters
- `other`: a std::locale object to compare

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/locale/locale/locale/)
- [name](/cpp/locale/locale/name/)
