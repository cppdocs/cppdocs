---
title: "std::basic_ispanstream<CharT,Traits>::operator="
source_path: "cpp/io/basic_ispanstream/operator"
category: "io"
since: "C++23"
---

1) Move assigns the other to *this, effectively move-assigning both the [std::basic_istream](/cpp/io/basic_istream/) base class subobject and the wrapped std::basic_spanbuf.

## Declarations
```cpp
basic_ispanstream& operator=( basic_ispanstream&& other );
```
_(since C++23)_

```cpp
basic_ispanstream& operator=( const basic_ispanstream& ) = delete;
```
_(since C++23)_

## Parameters
- `other`: another stream to move from

## Return value
*this

## Example
This section is incompleteReason: no example

## See also
- [operator=](/cpp/io/basic_spanbuf/operator/)
- [operator=](/cpp/io/basic_istream/operator/)
