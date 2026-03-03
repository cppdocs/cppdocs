---
title: "std::basic_ostringstream::operator="
source_path: "cpp/io/basic_ostringstream/operator"
category: "io"
since: "C++11"
---

Move assigns the string stream other to *this, effectively move-assigning both the [std::basic_ostream](/cpp/io/basic_ostream/) base class and the associated [std::basic_stringbuf](/cpp/io/basic_stringbuf/).

## Declarations
```cpp
basic_ostringstream& operator=( basic_ostringstream&& other );
```
_(since C++11)_

## Parameters
- `other`: string stream to move from

## Return value
*this

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/io/basic_ostringstream/swap/)
- [operator=](/cpp/io/basic_stringbuf/operator/)
- [operator=](/cpp/io/basic_ostream/operator/)
