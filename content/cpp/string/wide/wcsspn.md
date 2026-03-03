---
title: "std::wcsspn"
source_path: "cpp/string/wide/wcsspn"
header: "<cwchar>"
category: "string"
---

Returns the length of the maximum initial segment of the wide string pointed to by dest, that consists of only the characters found in wide string pointed to by src.

## Declarations
```cpp
size_t wcsspn( const wchar_t* dest, const wchar_t* src );
```

## Parameters
- `dest`: pointer to the null-terminated wide string to be analyzed
- `src`: pointer to the null-terminated wide string that contains the characters to search for

## Return value
The length of the maximum initial segment that contains only characters from wide string pointed to by src.

## Example
```cpp
#include <cwchar>
#include <iostream>
#include <locale>
 
int main()
{
    wchar_t dest[] = L"白猫 黑狗 甲虫";
    const wchar_t src[] = L" 狗猫 白黑 ";
    const std::size_t len = std::wcsspn(dest, src);
    dest[len] = L'\0'; // terminates the segment to print it out
 
    std::wcout.imbue(std::locale("en_US.utf8"));
    std::wcout << L"The length of maximum initial segment is " << len << L".\n";
    std::wcout << L"The segment is \"" << dest << L"\".\n";
}
```

## See also
- [wcscspn](/cpp/string/wide/wcscspn/)
- [wcspbrk](/cpp/string/wide/wcspbrk/)
- [C documentation](/c/string/wide/wcsspn/)
