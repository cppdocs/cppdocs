---
title: "std::wmemcmp"
source_path: "cpp/string/wide/wmemcmp"
header: "<cwchar>"
category: "string"
---

Compares the first count wide characters of the wide character arrays pointed to by lhs and rhs. The comparison is done lexicographically.

## Declarations
```cpp
int wmemcmp( const wchar_t* lhs, const wchar_t* rhs, std::size_t count );
```

## Parameters
- `lhs, rhs`: pointers to the wide character arrays to compare
- `count`: number of wide characters to examine

## Return value
Negative value if the value of the first differing wide character in lhs is less than the value of the corresponding wide character in rhs: lhs precedes rhs in lexicographical order.

## Notes
This function is not locale-sensitive and pays no attention to the values of the wchar_t objects it examines: nulls as well as invalid wide characters are compared too.

## Example
```cpp
#include <clocale>
#include <cwchar>
#include <iostream>
#include <locale>
#include <string>
 
void demo(const wchar_t* lhs, const wchar_t* rhs, std::size_t sz)
{
    std::wcout << std::wstring(lhs, sz);
    int rc = std::wmemcmp(lhs, rhs, sz);
    if (rc == 0)
        std::wcout << " compares equal to ";
    else if (rc < 0)
        std::wcout << " precedes ";
    else if (rc > 0)
        std::wcout << " follows ";
    std::wcout << std::wstring(rhs, sz) << " in lexicographical order\n";
}
 
int main()
{
    std::setlocale(LC_ALL, "en_US.utf8");
    std::wcout.imbue(std::locale("en_US.utf8"));
 
    wchar_t a1[] = {L'α',L'β',L'γ'};
    constexpr std::size_t sz = sizeof a1 / sizeof *a1;
    wchar_t a2[sz] = {L'α',L'β',L'δ'};
 
    demo(a1, a2, sz);
    demo(a2, a1, sz);
    demo(a1, a1, sz);
}
```

## See also
- [wcscmp](/cpp/string/wide/wcscmp/)
- [memcmp](/cpp/string/byte/memcmp/)
- [wcsncmp](/cpp/string/wide/wcsncmp/)
- [C documentation](/c/string/wide/wmemcmp/)
