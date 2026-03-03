---
title: "std::wmemmove"
source_path: "cpp/string/wide/wmemmove"
header: "<cwchar>"
category: "string"
---

Copies exactly count successive wide characters from the wide character array pointed to by src to the wide character array pointed to by dest.

## Declarations
```cpp
wchar_t* wmemmove( wchar_t* dest, const wchar_t* src, std::size_t count );
```

## Parameters
- `dest`: pointer to the wide character array to copy to
- `src`: pointer to the wide character array to copy from
- `count`: number of wide characters to copy

## Return value
Returns a copy of dest.

## Notes
This function is not locale-sensitive and pays no attention to the values of the wchar_t objects it copies: nulls as well as invalid characters are copied too.

## Example
```cpp
#include <clocale>
#include <cwchar>
#include <iostream>
#include <locale>
 
int main()
{
    std::setlocale(LC_ALL, "en_US.utf8");
    std::wcout.imbue(std::locale("en_US.utf8"));
 
    wchar_t str[] = L"αβγδεζηθικλμνξοπρστυφχψω";
    std::wcout << str << '\n';
    std::wmemmove(str + 4, str + 3, 3); // copy from [δεζ] to [εζη]
    std::wcout << str << '\n';
}
```

## See also
- [wmemcpy](/cpp/string/wide/wmemcpy/)
- [memmove](/cpp/string/byte/memmove/)
- [copycopy_if](/cpp/algorithm/copy/)
- [copy_backward](/cpp/algorithm/copy_backward/)
- [C documentation](/c/string/wide/wmemmove/)
