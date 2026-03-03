---
title: "std::wcsncpy"
source_path: "cpp/string/wide/wcsncpy"
header: "<cwchar>"
category: "string"
---

Copies at most count characters of the wide string pointed to by src (including the terminating null wide character) to wide character array pointed to by dest.

## Declarations
```cpp
wchar_t* wcsncpy( wchar_t* dest, const wchar_t* src, std::size_t count );
```

## Parameters
- `dest`: pointer to the wide character array to copy to
- `src`: pointer to the wide string to copy from
- `count`: maximum number of wide characters to copy

## Return value
dest

## Notes
In typical usage, count is the size of the destination array.

## Example
```cpp
#include <cwchar>
#include <iostream>
 
int main()
{
    const wchar_t src[] = L"hi";
    wchar_t dest[6] = {L'a', L'b', L'c', L'd', L'e', L'f'};
 
    std::wcsncpy(dest, src, 5); // this will copy 'hi' and repeat \0 three times
 
    std::wcout << "The contents of dest are: ";
    for (const wchar_t c : dest)
    {
        if (c)
            std::wcout << c << ' ';
        else
            std::wcout << "\\0" << ' ';
    }
    std::wcout << '\n';
}
```

## See also
- [wcscpy](/cpp/string/wide/wcscpy/)
- [wmemcpy](/cpp/string/wide/wmemcpy/)
- [strncpy](/cpp/string/byte/strncpy/)
- [C documentation](/c/string/wide/wcsncpy/)
