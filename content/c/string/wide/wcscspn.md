---
title: "wcscspn"
source_path: "c/string/wide/wcscspn"
header: "<wchar.h>"
category: "c"
---

Returns the length of the maximum initial segment of the wide string pointed to by dest, that consists of only the characters not found in wide string pointed to by src.

## Declarations
```cpp
size_t wcscspn( const wchar_t* dest, const wchar_t* src );
```
_(since C95)_

## Parameters
- `dest`: pointer to the null-terminated wide string to be analyzed
- `src`: pointer to the null-terminated wide string that contains the characters to search for

## Return value
The length of the maximum initial segment that contains only characters not found in the character string pointed to by src

## Example
```cpp
#include <locale.h>
#include <wchar.h>
 
int main(void)
{
    wchar_t dest[] = L"白猫 黑狗 甲虫";
    /*                      └───┐   */
    const wchar_t *src = L"甲虫,黑狗";
 
    const size_t len = wcscspn(dest, src);
    dest[len] = L'\0'; /* terminates the segment to print it out */
 
    setlocale(LC_ALL, "en_US.utf8");
    wprintf(L"The length of maximum initial segment is %td.\n"
            L"The segment is \"%ls\".\n", len, dest);
}
```

## See also
- [wcsspn](/c/string/wide/wcsspn/)
- [wcspbrk](/c/string/wide/wcspbrk/)
- [C++ documentation](/cpp/string/wide/wcscspn/)
