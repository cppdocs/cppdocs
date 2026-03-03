---
title: "std::wcspbrk"
source_path: "cpp/string/wide/wcspbrk"
header: "<cwchar>"
category: "string"
---

Finds the first character in wide string pointed to by dest, that is also in wide string pointed to by src.

## Declarations
```cpp
const wchar_t* wcspbrk( const wchar_t* dest, const wchar_t* src );
```

```cpp
wchar_t* wcspbrk( wchar_t* dest, const wchar_t* src );
```

## Parameters
- `dest`: pointer to the null-terminated wide string to be analyzed
- `src`: pointer to the null-terminated wide string that contains the characters to search for

## Return value
Pointer to the first character in dest, that is also in src, or a null pointer if no such character exists.

## Notes
The name stands for "wide character string pointer break", because it returns a pointer to the first of the separator ("break") characters.

## Example
```cpp
#include <cwchar>
#include <iomanip>
#include <iostream>
 
int main()
{
    const wchar_t* str = L"Hello world, friend of mine!";
    const wchar_t* sep = L" ,!";
 
    unsigned int cnt = 0;
    do
    {
        str = std::wcspbrk(str, sep); // find separator
        std::wcout << std::quoted(str) << L'\n';
        if (str)
            str += std::wcsspn(str, sep); // skip separator
        ++cnt; // increment word count
    } while (str && *str);
 
    std::wcout << L"There are " << cnt << L" words\n";
}
```

## See also
- [wcscspn](/cpp/string/wide/wcscspn/)
- [wcschr](/cpp/string/wide/wcschr/)
- [strpbrk](/cpp/string/byte/strpbrk/)
- [C documentation](/c/string/wide/wcspbrk/)
