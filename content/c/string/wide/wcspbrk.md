---
title: "wcspbrk"
source_path: "c/string/wide/wcspbrk"
header: "<wchar.h>"
category: "c"
---

1) Finds the first character in wide string pointed to by dest, that is also in wide string pointed to by str.

## Declarations
```cpp
wchar_t *wcspbrk( const wchar_t *dest, const wchar_t *str );
```
_(since C95)_

```cpp
/*QWchar_t*/ *wcspbrk( /*QWchar_t*/ *dest, const wchar_t *str );
```
_(since C23)_

## Parameters
- `dest`: pointer to the null-terminated wide string to be analyzed
- `src`: pointer to the null-terminated wide string that contains the characters to search for

## Return value
Pointer to the first character in dest, that is also in str, or a null pointer if no such character exists.

## Notes
The name stands for "wide character string pointer break", because it returns a pointer to the first of the separator ("break") characters.

## Example
```cpp
#include <stdio.h>
#include <wchar.h>
 
int main(void)
{
    const wchar_t* str = L"Hello world, friend of mine!";
    const wchar_t* sep = L" ,!";
 
    unsigned int cnt = 0;
    do {
       str = wcspbrk(str, sep); // find separator
       if (str) str += wcsspn(str, sep); // skip separator
       ++cnt; // increment word count
    } while (str && *str);
 
    wprintf(L"There are %u words.\n", cnt);
}
```

## See also
- [wcscspn](/c/string/wide/wcscspn/)
- [wcschr](/c/string/wide/wcschr/)
- [strpbrk](/c/string/byte/strpbrk/)
- [C++ documentation](/cpp/string/wide/wcspbrk/)
