---
title: "wmemchr"
source_path: "c/string/wide/wmemchr"
header: "<wchar.h>"
category: "c"
---

1) Locates the first occurrence of wide character ch in the initial count wide characters of the wide character array or integer array of compatible type, pointed to by ptr.

## Declarations
```cpp
wchar_t *wmemchr( const wchar_t *ptr, wchar_t ch, size_t count );
```
_(since C95)_

```cpp
/*QWchar_t*/ *wmemchr( /*Qwchar_t*/ *ptr, wchar_t ch, size_t count );
```
_(since C23)_

## Parameters
- `ptr`: pointer to the wide character array to be examined
- `ch`: wide character to search for
- `count`: number of wide characters to examine

## Return value
Pointer to the location of the wide character, or a null pointer if no such character is found.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <wchar.h>
 
int main(void)
{
    wchar_t str[] = L"诺不轻信，故人不负我\0诺不轻许，故我不负人。";
    size_t sz = sizeof str / sizeof *str;
 
    wchar_t target = L'许';
    wchar_t* result = wmemchr(str, target, sz);
 
    if (result)
    {
        setlocale(LC_ALL, "en_US.utf8");
        printf("Found '%lc' at position %td\n",target, result - str);
    }
}
```

## See also
- [memchr](/c/string/byte/memchr/)
- [wcschr](/c/string/wide/wcschr/)
- [C++ documentation](/cpp/string/wide/wmemchr/)
