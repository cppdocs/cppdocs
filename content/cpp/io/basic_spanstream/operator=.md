---
title: "std::basic_spanstream<CharT,Traits>::operator="
source_path: "cpp/io/basic_spanstream/operator"
category: "io"
since: "C++23"
---

1) Move assigns the other to *this, effectively move-assigning both the [std::basic_iostream](/cpp/io/basic_iostream/) base class subobject and the wrapped std::basic_spanbuf.

## Declarations
```cpp
basic_spanstream& operator=( basic_spanstream&& other );
```
_(since C++23)_

```cpp
basic_spanstream& operator=( const basic_spanstream& ) = delete;
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
- [operator=](/cpp/io/basic_iostream/operator/)
