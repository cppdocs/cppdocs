---
title: "std::wcsncmp"
source_path: "cpp/string/wide/wcsncmp"
header: "<cwchar>"
category: "string"
---

Compares at most count wide characters of two null-terminated wide strings. The comparison is done lexicographically.

## Declarations
```cpp
int wcsncmp( const wchar_t* lhs, const wchar_t* rhs, std::size_t count );
```

## Parameters
- `lhs, rhs`: pointers to the null-terminated wide strings to compare
- `count`: maximum number of characters to compare

## Return value
Negative value if lhs appears before rhs in lexicographical order.

## Example
```cpp
#include <clocale>
#include <cwchar>
#include <iostream>
#include <locale>
 
void demo(const wchar_t* lhs, const wchar_t* rhs, int sz)
{
    int rc = std::wcsncmp(lhs, rhs, sz);
    if (rc == 0)
        std::wcout << "First " << sz << " characters of ["
                   << lhs << "] equal [" << rhs << "]\n";
    else if (rc < 0)
        std::wcout << "First " << sz << " characters of ["
                   << lhs << "] precede [" << rhs << "]\n";
    else if (rc > 0)
        std::wcout << "First " << sz << " characters of ["
                   << lhs << "] follow [" << rhs << "]\n";
}
 
int main()
{
    const wchar_t str1[] = L"안녕하세요";
    const wchar_t str2[] = L"안녕히 가십시오";
 
    std::setlocale(LC_ALL, "en_US.utf8");
    std::wcout.imbue(std::locale("en_US.utf8"));
    demo(str1, str2, 5);
    demo(str2, str1, 8);
    demo(str1, str2, 2);
}
```

## See also
- [strncmp](/cpp/string/byte/strncmp/)
- [wcscmp](/cpp/string/wide/wcscmp/)
- [wmemcmp](/cpp/string/wide/wmemcmp/)
- [wcscoll](/cpp/string/wide/wcscoll/)
- [C documentation](/c/string/wide/wcsncmp/)
