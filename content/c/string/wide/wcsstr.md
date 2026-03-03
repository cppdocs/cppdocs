---
title: "wcsstr"
source_path: "c/string/wide/wcsstr"
header: "<wchar.h>"
category: "c"
---

1) Finds the first occurrence of the wide string src in the wide string pointed to by dest. The terminating null characters are not compared.

## Declarations
```cpp
wchar_t *wcsstr( const wchar_t *dest, const wchar_t *src );
```
_(since C95)_

```cpp
/*QWchar_t*/ *wcsstr( /*QWchar_t*/ *dest, const wchar_t *src );
```
_(since C23)_

## Parameters
- `dest`: pointer to the null-terminated wide string to examine
- `src`: pointer to the null-terminated wide string to search for

## Return value
Pointer to the first character of the found substring in dest, or a null pointer if no such substring is found. If src points to an empty string, dest is returned.

## Example
```cpp
#include <stdio.h>
#include <locale.h>
#include <wchar.h>
 
int main(void)
{
    setlocale(LC_ALL, "ru_RU.UTF-8");
 
    wchar_t str[5][64] = {
        L"Строка, где есть подстрока 'но'.",
        L"Строка, где такой подстроки нет.",
        L"Он здесь.",
        L"Здесь он.",
        L"Его нет."
    };
 
    for (size_t i = 0; i < 5; ++i) {
        if (wcsstr(str[i], L"но")) {
            wprintf(L"%ls\n", str[i]);
        }
    }
}
```

## See also
- [wcschr](/c/string/wide/wcschr/)
- [wcsrchr](/c/string/wide/wcsrchr/)
- [C++ documentation](/cpp/string/wide/wcsstr/)
