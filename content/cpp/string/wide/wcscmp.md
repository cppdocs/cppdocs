---
title: "std::wcscmp"
source_path: "cpp/string/wide/wcscmp"
header: "<cwchar>"
category: "string"
---

Compares two null-terminated wide strings lexicographically.

## Declarations
```cpp
int wcscmp( const wchar_t* lhs, const wchar_t* rhs );
```

## Parameters
- `lhs, rhs`: pointers to the null-terminated wide strings to compare

## Return value
Negative value if lhs appears before rhs in lexicographical order.

## Notes
This function is not locale-sensitive, unlike [std::wcscoll](/cpp/string/wide/wcscoll/), and the order may not be meaningful when characters from different Unicode blocks are used together or when the order of code units does not match collation order.

## Example
```cpp
#include <algorithm>
#include <cwchar>
#include <iostream>
#include <locale>
#include <vector>
 
int main()
{
    std::vector<const wchar_t*> leaders
    {
        L"Ленин", L"Сталин", L"Маленков", L"Хрущёв",
        L"Брежнев", L"Андропов", L"Черненко", L"Горбачёв"
    };
 
    std::ranges::sort(leaders, [](auto leaderLHS, auto leaderRHS)
    {
        return std::wcscmp(leaderLHS, leaderRHS) < 0;
    });
 
    std::setlocale(LC_ALL, "en_US.utf8");
    std::wcout.imbue(std::locale("en_US.utf8"));
    for (auto leader : leaders)
        std::wcout << leader[0] << ' ';
    std::wcout << '\n';
}
```

## See also
- [wcsncmp](/cpp/string/wide/wcsncmp/)
- [wmemcmp](/cpp/string/wide/wmemcmp/)
- [strcmp](/cpp/string/byte/strcmp/)
- [wcscoll](/cpp/string/wide/wcscoll/)
- [C documentation](/c/string/wide/wcscmp/)
