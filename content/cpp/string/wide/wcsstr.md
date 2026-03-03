---
title: "std::wcsstr"
source_path: "cpp/string/wide/wcsstr"
header: "<cwchar>"
category: "string"
---

Finds the first occurrence of the wide string src in the wide string pointed to by dest. The terminating null characters are not compared.

## Declarations
```cpp
const wchar_t* wcsstr( const wchar_t* dest, const wchar_t* src );
```

```cpp
wchar_t* wcsstr( wchar_t* dest, const wchar_t* src );
```

## Parameters
- `dest`: pointer to the null-terminated wide string to examine
- `src`: pointer to the null-terminated wide string to search for

## Return value
Pointer to the first character of the found substring in dest, or a null pointer if no such substring is found. If src points to an empty string, dest is returned.

## Example
```cpp
#include <clocale>
#include <cwchar>
#include <iostream>
 
int main()
{
    wchar_t const* origin = L"アルファ, ベータ, ガンマ, アルファ, ベータ, ガンマ.";
    wchar_t const* target = L"ベータ";
    wchar_t const* result = origin;
 
    std::setlocale(LC_ALL, "en_US.utf8");
    std::wcout << L"Substring to find: \"" << target << L"\"\n"
               << L"String to search: \"" << origin << L"\"\n\n";
 
    for (; (result = std::wcsstr(result, target)) != nullptr; ++result)
        std::wcout << L"Found: \"" << result << L"\"\n";
}
```

## See also
- [find](/cpp/string/basic_string/find/)
- [strstr](/cpp/string/byte/strstr/)
- [wcschr](/cpp/string/wide/wcschr/)
- [wcsrchr](/cpp/string/wide/wcsrchr/)
- [C documentation](/c/string/wide/wcsstr/)
