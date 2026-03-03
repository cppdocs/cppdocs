---
title: "std::basic_stringstream::operator="
source_path: "cpp/io/basic_stringstream/operator"
category: "io"
since: "C++11"
---

Move assigns the string stream other to *this, effectively move-assigning both the [std::basic_iostream](/cpp/io/basic_iostream/) base class and the associated [std::basic_stringbuf](/cpp/io/basic_stringbuf/).

## Declarations
```cpp
basic_stringstream& operator=( basic_stringstream&& other );
```
_(since C++11)_

## Parameters
- `other`: string stream to move from

## Return value
*this

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/io/basic_stringstream/swap/)
- [operator=](/cpp/io/basic_stringbuf/operator/)
- [operator=](/cpp/io/basic_iostream/operator/)
