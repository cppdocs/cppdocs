---
title: "std::basic_ospanstream<CharT,Traits>::operator="
source_path: "cpp/io/basic_ospanstream/operator"
category: "io"
since: "C++23"
---

1) Move assigns the other to *this, effectively move-assigning both the [std::basic_ostream](/cpp/io/basic_ostream/) base class subobject and the wrapped std::basic_spanbuf.

## Declarations
```cpp
basic_ospanstream& operator=( basic_ospanstream&& other );
```
_(since C++23)_

```cpp
basic_ospanstream& operator=( const basic_ospanstream& ) = delete;
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
- [operator=](/cpp/io/basic_ostream/operator/)
