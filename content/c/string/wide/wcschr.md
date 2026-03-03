---
title: "wcschr"
source_path: "c/string/wide/wcschr"
header: "<wchar.h>"
category: "c"
---

1) Finds the first occurrence of the wide character ch in the wide string pointed to by str.

## Declarations
```cpp
wchar_t *wcschr( const wchar_t *str, wchar_t ch );
```
_(since C95)_

```cpp
/*QWchar_t*/ *wcschr( /*QWchar_t*/ *str, wchar_t ch );
```
_(since C23)_

## Parameters
- `str`: pointer to the null-terminated wide string to be analyzed
- `ch`: wide character to search for

## Return value
Pointer to the found character in str, or a null pointer if no such character is found.

## Example
```cpp
#include <wchar.h>
#include <stdio.h>
#include <locale.h>
 
int main(void)
{
    wchar_t arr[] = L"白猫 黒猫 кошки";
    wchar_t *cat = wcschr(arr, L'猫');
    wchar_t *dog = wcschr(arr, L'犬');
 
    setlocale(LC_ALL, "en_US.utf8");
    if(cat)
        printf("The character 猫 found at position %td\n", cat-arr);
    else
        puts("The character 猫 not found");
 
    if(dog)
        printf("The character 犬 found at position %td\n", dog-arr);
    else
        puts("The character 犬 not found");
}
```

## See also
- [wcsrchr](/c/string/wide/wcsrchr/)
- [wcspbrk](/c/string/wide/wcspbrk/)
- [C++ documentation](/cpp/string/wide/wcschr/)
