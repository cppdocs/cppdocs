---
title: "mbrtoc8"
source_path: "c/string/multibyte/mbrtoc8"
header: "<uchar.h>"
category: "c"
---

Converts a narrow multibyte character to UTF-8 encoding.

## Declarations
```cpp
size_t mbrtoc8( char8_t * restrict pc8, const char * restrict s,
size_t n, mbstate_t * restrict ps );
```
_(since C23)_

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
- [c8rtomb](/c/string/multibyte/c8rtomb/)
- [C++ documentation](/cpp/string/multibyte/mbrtoc8/)
