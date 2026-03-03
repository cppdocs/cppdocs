---
title: "strlen, strnlen_s"
source_path: "c/string/byte/strlen"
header: "<string.h>"
category: "c"
---

1) Returns the length of the given null-terminated byte string, that is, the number of characters in a character array whose first element is pointed to by str up to and not including the first null character.

## Declarations
```cpp
size_t strlen( const char* str );
```

```cpp
size_t strnlen_s( const char* str, size_t strsz );
```
_(since C11)_

## Parameters
- `str`: pointer to the null-terminated byte string to be examined
- `strsz`: maximum number of characters to examine

## Notes
strnlen_s and wcsnlen_s are the only [bounds-checked functions](/c/error/) that do not invoke the runtime constraints handler. They are pure utility functions used to provide limited support for non-null terminated strings.

## Example
```cpp
#define __STDC_WANT_LIB_EXT1__ 1
#include <stdio.h>
#include <string.h>
 
int main(void)
{
    const char str[] = "How many characters does this string contain?";
 
    printf("without null character: %zu\n", strlen(str));
    printf("with null character:    %zu\n", sizeof str);
 
#ifdef __STDC_LIB_EXT1__
    printf("without null character: %zu\n", strnlen_s(str, sizeof str));
#endif
}
```

## See also
- [wcslenwcsnlen_s](/c/string/wide/wcslen/)
- [mblen](/c/string/multibyte/mblen/)
- [C++ documentation](/cpp/string/byte/strlen/)
