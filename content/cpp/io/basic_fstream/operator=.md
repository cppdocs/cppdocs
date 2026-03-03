---
title: "std::basic_fstream<CharT,Traits>::operator="
source_path: "cpp/io/basic_fstream/operator"
category: "io"
since: "C++11"
---

Move assigns the file stream other to *this, effectively move-assigning both the [std::basic_iostream](/cpp/io/basic_iostream/) base class and the associated [std::basic_filebuf](/cpp/io/basic_filebuf/).

## Declarations
```cpp
basic_fstream& operator=( basic_fstream&& other );
```
_(since C++11)_

## Parameters
- `other`: file stream to move

## Return value
*this

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/io/basic_fstream/swap/)
- [operator=](/cpp/io/basic_filebuf/operator/)
- [operator=](/cpp/io/basic_iostream/operator/)
