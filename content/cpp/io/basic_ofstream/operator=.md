---
title: "std::basic_ofstream<CharT,Traits>::operator="
source_path: "cpp/io/basic_ofstream/operator"
category: "io"
since: "C++11"
---

Move assigns the file stream other to *this, effectively move-assigning both the [std::basic_ostream](/cpp/io/basic_ostream/) base class and the associated [std::basic_filebuf](/cpp/io/basic_filebuf/).

## Declarations
```cpp
basic_ofstream& operator=( basic_ofstream&& other );
```
_(since C++11)_

## Parameters
- `other`: file stream to move

## Return value
*this

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/io/basic_ofstream/swap/)
- [operator=](/cpp/io/basic_filebuf/operator/)
- [operator=](/cpp/io/basic_ostream/operator/)
