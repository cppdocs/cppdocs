---
title: "std::wcscat"
source_path: "cpp/string/wide/wcscat"
header: "<cwchar>"
category: "string"
---

Appends a copy of the wide string pointed to by src to the end of the wide string pointed to by dest. The wide character src[0] replaces the null terminator at the end of dest. The resulting wide string is null-terminated.

## Declarations
```cpp
wchar_t* wcscat( wchar_t* dest, const wchar_t* src );
```

## Parameters
- `dest`: pointer to the null-terminated wide string to append to
- `src`: pointer to the null-terminated wide string to copy from

## Return value
Returns a copy of dest.

## Example
```cpp
#include <clocale>
#include <cwchar> 
#include <iostream>
 
int main(void) 
{
    wchar_t str[50] = L"Земля, прощай.";
    std::wcscat(str, L" ");
    std::wcscat(str, L"В добрый путь.");
 
    std::setlocale(LC_ALL, "en_US.utf8");
    std::wcout.imbue(std::locale("en_US.utf8"));
    std::wcout << str << '\n';
}
```

## See also
- [wcsncat](/cpp/string/wide/wcsncat/)
- [strcat](/cpp/string/byte/strcat/)
- [wcscpy](/cpp/string/wide/wcscpy/)
- [C documentation](/c/string/wide/wcscat/)
