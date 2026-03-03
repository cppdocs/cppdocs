---
title: "c8rtomb"
source_path: "c/string/multibyte/c8rtomb"
header: "<uchar.h>"
category: "c"
---

Converts a single code point from UTF-8 to a narrow multibyte character representation.

## Declarations
```cpp
size_t c8rtomb( char* restrict s, char8_t c8, mbstate_t* restrict ps );
```
_(since C23)_

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
- [mbrtoc8](/c/string/multibyte/mbrtoc8/)
- [C++ documentation](/cpp/string/multibyte/c8rtomb/)
