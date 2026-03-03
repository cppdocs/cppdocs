---
title: "wcsspn"
source_path: "c/string/wide/wcsspn"
header: "<wchar.h>"
category: "c"
---

Returns the length of the maximum initial segment of the wide string pointed to by dest, that consists of only the characters found in wide string pointed to by src.

## Declarations
```cpp
size_t wcsspn( const wchar_t* dest, const wchar_t* src );
```
_(since C95)_

## Parameters
- `dest`: pointer to the null-terminated wide string to be analyzed
- `src`: pointer to the null-terminated wide string that contains the characters to search for

## Return value
The length of the maximum initial segment that contains only characters from wide string pointed to by src

## Example
```cpp
#include <locale.h>
#include <wchar.h>
 
int main(void)
{
    wchar_t dest[] = L"白猫 黑狗 甲虫";
    const wchar_t src[] = L" 狗猫 白黑 ";
    const size_t len = wcsspn(dest, src);
    dest[len] = L'\0'; /* terminates the segment to print it out */
 
    setlocale(LC_ALL, "en_US.utf8");
    wprintf(L"The length of maximum initial segment is %td.\n"
            L"The segment is \"%ls\".\n", len, dest);
}
```

## See also
- [wcscspn](/c/string/wide/wcscspn/)
- [wcspbrk](/c/string/wide/wcspbrk/)
- [C++ documentation](/cpp/string/wide/wcsspn/)
