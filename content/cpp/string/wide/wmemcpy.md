---
title: "std::wmemcpy"
source_path: "cpp/string/wide/wmemcpy"
header: "<cwchar>"
category: "string"
---

Copies exactly count successive wide characters from the wide character array pointed to by src to the wide character array pointed to by dest. If the objects overlap, the behavior is undefined. If count is zero, the function does nothing.

## Declarations
```cpp
wchar_t* wmemcpy( wchar_t* dest, const wchar_t* src, std::size_t count );
```

## Parameters
- `dest`: pointer to the wide character array to copy to
- `src`: pointer to the wide character array to copy from
- `count`: number of wide characters to copy

## Return value
dest

## Notes
This function's analog for byte strings is [std::strncpy](/cpp/string/byte/strncpy/), not [std::strcpy](/cpp/string/byte/strcpy/).

This function is not locale-sensitive and pays no attention to the values of the wchar_t objects it copies: nulls as well as invalid characters are copied too.

## Example
```cpp
#include <clocale>
#include <cwchar>
#include <iostream>
#include <iterator>
#include <locale>
 
int main(void)
{
    const wchar_t from1[] = L"नमस्ते";
    const wchar_t from2[] = L"Բարև";
    const std::size_t sz1 = std::size(from1);
    const std::size_t sz2 = std::size(from2);
    wchar_t to[sz1 + sz2];
 
    std::wmemcpy(to, from1, sz1); // copy from1, along with its null terminator
    std::wmemcpy(to + sz1, from2, sz2); // append from2, along with its null terminator
 
    std::setlocale(LC_ALL, "en_US.utf8");
    std::wcout.imbue(std::locale("en_US.utf8"));
    std::wcout << L"Wide array contains: ";
    for (std::size_t n = 0; n < std::size(to); ++n)
        if (to[n])
            std::wcout << to[n];
        else
            std::wcout << L"\\0";
    std::wcout << L'\n';
}
```

## See also
- [strncpy](/cpp/string/byte/strncpy/)
- [wmemmove](/cpp/string/wide/wmemmove/)
- [C documentation](/c/string/wide/wmemcpy/)
