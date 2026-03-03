---
title: "std::collate"
source_path: "cpp/locale/collate"
header: "<locale>"
category: "locale"
---

Class std::collate encapsulates locale-specific collation (comparison) and hashing of strings. This facet is used by [std::basic_regex](/cpp/regex/basic_regex/) and can be applied, by means of [std::locale::operator()](/cpp/locale/locale/operator()/), directly to all standard algorithms that expect a string comparison predicate.

## Declarations
```cpp
template< class CharT >
class collate;
```

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <locale>
#include <string>
#include <vector>
 
int main()
{
    std::locale::global(std::locale("en_US.utf8"));
    std::wcout.imbue(std::locale(""));
    std::vector<std::wstring> v
    {
        L"ar", L"zebra", L"\u00f6grupp", L"Zebra",
        L"\u00e4ngel",L"\u00e5r", L"f\u00f6rnamn"
    };
 
    std::wcout << "Default locale collation order: ";
    std::sort(v.begin(), v.end());
    for (auto s : v)
        std::wcout << s << ' ';
    std::wcout << '\n';
 
    std::wcout << "English locale collation order: ";
    std::sort(v.begin(), v.end(), std::locale("en_US.UTF-8"));
    for (auto s : v)
        std::wcout << s << ' ';
    std::wcout << '\n';
 
    std::wcout << "Swedish locale collation order: ";
    std::sort(v.begin(), v.end(), std::locale("sv_SE.UTF-8"));
    for (auto s : v)
        std::wcout << s << ' ';
    std::wcout << '\n';
}
```

## See also
- [operator()](/cpp/locale/locale/operator()/)
- [collate_byname](/cpp/locale/collate_byname/)
