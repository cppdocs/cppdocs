---
title: "wcslen, wcsnlen_s"
source_path: "c/string/wide/wcslen"
header: "<wchar.h>"
category: "c"
---

1) Returns the length of a wide string, that is the number of non-null wide characters that precede the terminating null wide character.

## Declarations
```cpp
size_t wcslen( const wchar_t *str );
```
_(since C95)_

```cpp
size_t wcsnlen_s(const wchar_t *str, size_t strsz);
```
_(since C11)_

## Parameters
- `str`: pointer to the null-terminated wide string to be examined
- `strsz`: maximum number of wide characters to examine

## Notes
strnlen_s and wcsnlen_s are the only [bounds-checked functions](/c/error/) that do not invoke the runtime constraints handler. They are pure utility functions used to provide limited support for non-null terminated strings.

## Example
```cpp
#include <wchar.h>
#include <stdio.h>
 
int main(void)
{
    wchar_t str[] = L"How many wide characters does this string contain?";
 
    printf("without null character: %zu\n", wcslen(str));
    printf("with null character: %zu\n", sizeof str / sizeof *str);
}
```

## See also
- [strlenstrnlen_s](/c/string/byte/strlen/)
- [C++ documentation](/cpp/string/wide/wcslen/)
