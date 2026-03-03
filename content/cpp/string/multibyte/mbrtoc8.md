---
title: "std::mbrtoc8"
source_path: "cpp/string/multibyte/mbrtoc8"
header: "<cuchar>"
category: "string"
since: "C++20"
---

Converts a narrow multibyte character to UTF-8 encoding.

## Declarations
```cpp
std::size_t mbrtoc8( char8_t* pc8,
const char* s,
std::size_t n,
std::mbstate_t* ps );
```
_(since C++20)_

## Parameters
- `pc8`: pointer to the location where the resulting UTF-8 code units will be written
- `s`: pointer to the multibyte character string used as input
- `n`: limit on the number of bytes in s that can be examined
- `ps`: pointer to the conversion state object used when interpreting the multibyte string

## Return value
The first of the following that applies:

## Example
This section is incompleteReason: no example

## See also
- [c8rtomb](/cpp/string/multibyte/c8rtomb/)
- [mbrtoc16](/cpp/string/multibyte/mbrtoc16/)
- [C documentation](/c/string/multibyte/mbrtoc8/)
