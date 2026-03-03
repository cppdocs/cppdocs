---
title: "std::basic_spanbuf<CharT,Traits>::swap"
source_path: "cpp/io/basic_spanbuf/swap"
category: "io"
since: "C++23"
---

Swaps the state of *this and rhs.

## Declarations
```cpp
void swap( basic_spanbuf& rhs );
```
_(since C++23)_

## Parameters
- `rhs`: another basic_stringbuf

## Return value
(none)

## Notes
This function is called automatically when swapping stream objects, it is rarely necessary to call it directly.

## Example
This section is incompleteReason: no example

## See also
- [operator=](/cpp/io/basic_spanbuf/operator/)
- [swap](/cpp/io/basic_ispanstream/swap/)
- [swap](/cpp/io/basic_ospanstream/swap/)
- [swap](/cpp/io/basic_spanstream/swap/)
