---
title: "std::mbrtoc32"
source_path: "cpp/string/multibyte/mbrtoc32"
header: "<cuchar>"
category: "string"
since: "C++11"
---

Converts a narrow multibyte character to its UTF-32 character representation.

## Declarations
```cpp
std::size_t mbrtoc32( char32_t* pc32,
const char* s,
std::size_t n,
std::mbstate_t* ps );
```
_(since C++11)_

## Parameters
- `pc32`: pointer to the location where the resulting 32-bit character will be written
- `s`: pointer to the multibyte character string used as input
- `n`: limit on the number of bytes in s that can be examined
- `ps`: pointer to the conversion state object used when interpreting the multibyte string

## Return value
The first of the following that applies:

## See also
- [c32rtomb](/cpp/string/multibyte/c32rtomb/)
- [do_in](/cpp/locale/codecvt/in/)
- [C documentation](/c/string/multibyte/mbrtoc32/)
