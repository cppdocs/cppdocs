---
title: "std::ctype<char>::classic_table"
source_path: "cpp/locale/ctype_char/classic_table"
header: "<locale>"
category: "locale"
since: "C++11"
---

Returns the classification table that matches the classification used by the minimal "C" locale.

## Declarations
```cpp
static const mask* classic_table() throw();
```
_(until C++11)_

```cpp
static const mask* classic_table() noexcept;
```
_(since C++11)_

## Return value
A pointer to the first element in the classification table (which is an array of size std::ctype<char>::table_size).

## Notes
Default-constructed [std::ctype](/cpp/locale/ctype/)<char> facets use this table for classification.

## Example
This section is incompleteReason: no example
