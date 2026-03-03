---
title: "std::c8rtomb"
source_path: "cpp/string/multibyte/c8rtomb"
header: "<cuchar>"
category: "string"
since: "C++20"
---

Converts a single code point from UTF-8 to a narrow multibyte character representation.

## Declarations
```cpp
std::size_t c8rtomb( char* s, char8_t c8, std::mbstate_t* ps );
```
_(since C++20)_

## Parameters
- `s`: pointer to narrow character array where the multibyte character will be stored
- `c8`: the UTF-8 code unit to convert
- `ps`: pointer to the conversion state object used when interpreting the multibyte string

## Return value
The number of bytes stored in the array object (including any shift sequences). This may be zero when c8 is not the final code unit in the UTF-8 representation of a code point.

## Notes
Calls to c8rtomb with a null pointer argument for s may introduce a data race with other calls to c8rtomb with a null pointer argument for s.

## Example
This section is incompleteReason: no example

## See also
- [mbrtoc8](/cpp/string/multibyte/mbrtoc8/)
- [c16rtomb](/cpp/string/multibyte/c16rtomb/)
- [C documentation](/c/string/multibyte/c8rtomb/)
