---
title: "std::ctype<char>::ctype"
source_path: "cpp/locale/ctype_char/ctype"
header: "<locale>"
category: "locale"
---

Creates a [std::ctype](/cpp/locale/ctype/)<char> facet and forwards the starting reference count refs to the base class constructor, [locale::facet::facet()](/cpp/locale/locale/facet/facet/).

## Declarations
```cpp
explicit ctype( const mask* tbl = 0, bool del = false, std::size_t refs = 0);
```

## Parameters
- `tbl`: classification table to use or a null pointer
- `del`: indicator whether the table needs to be deleted
- `refs`: starting reference count

## Example
This section is incompleteReason: no example
