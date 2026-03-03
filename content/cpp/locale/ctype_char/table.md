---
title: "std::ctype<char>::table"
source_path: "cpp/locale/ctype_char/table"
header: "<locale>"
category: "locale"
since: "C++11"
---

Returns the classification table that was provided in the constructor of this instance of [std::ctype](/cpp/locale/ctype/)<char>, or returns a copy of classic_table() if none was provided.

## Declarations
```cpp
const mask* table() const throw();
```
_(until C++11)_

```cpp
const mask* table() const noexcept;
```
_(since C++11)_

## Return value
A pointer to the first element in the classification table (which an array of size std::ctype<char>::table_size).

## Example
This section is incompleteReason: no example
