---
title: "wcsrchr"
source_path: "c/string/wide/wcsrchr"
header: "<wchar.h>"
category: "c"
---

1) Finds the last occurrence of the wide character ch in the wide string pointed to by str.

## Declarations
```cpp
wchar_t *wcsrchr( const wchar_t *str, wchar_t ch );
```
_(since C95)_

```cpp
/*QWchar_t*/ *wcsrchr( /*QWchar_t*/ *str, wchar_t ch );
```
_(since C23)_

## Parameters
- `str`: pointer to the null-terminated wide string to be analyzed
- `ch`: wide character to search for

## Return value
Pointer to the found character in str, or a null pointer if no such character is found.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <wchar.h>
 
int main(void)
{
    wchar_t arr[] = L"白猫 黒猫 кошки";
    wchar_t *cat = wcsrchr(arr, L'猫');
    wchar_t *dog = wcsrchr(arr, L'犬');
 
    setlocale(LC_ALL, "en_US.utf8");
 
    cat ? printf("The character 猫 found at position %td\n", cat - arr)
        : puts("The character 猫 not found");
 
    dog ? printf("The character 犬 found at position %td\n", dog - arr)
        : puts("The character 犬 not found");
}
```

## See also
- [wcschr](/c/string/wide/wcschr/)
- [wcspbrk](/c/string/wide/wcspbrk/)
- [C++ documentation](/cpp/string/wide/wcsrchr/)
