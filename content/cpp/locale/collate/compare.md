---
title: "std::collate<CharT>::compare, std::collate<CharT>::do_compare"
source_path: "cpp/locale/collate/compare"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the protected virtual member function do_compare of the most derived class.

## Declarations
```cpp
public:
int compare( const CharT* low1, const CharT* high1,
const CharT* low2, const CharT* high2 ) const;
```

```cpp
protected:
virtual int do_compare( const CharT* low1, const CharT* high1,
const CharT* low2, const CharT* high2 ) const;
```

## Parameters
- `low1`: pointer to the first character of the first string
- `high1`: one past the end pointer for the first string
- `low2`: pointer to the first character of the second string
- `high2`: one past the end pointer for the second string

## Return value
1 if the first string is greater than the second (that is, follows the second in the collation order), -1 if the first string is less than the second (precedes the second in the collation order), zero if the two strings are equivalent.

## Notes
When three-way comparison is not required (such as when providing a Compare argument to standard algorithms such as [std::sort](/cpp/algorithm/sort/)), [std::locale::operator()](/cpp/locale/locale/operator/) may be more appropriate.

Collation order is the dictionary order: the position of the letter in the national alphabet (its equivalence class) has higher priority than its case or variant. Within an equivalence class, lowercase characters collate before their uppercase equivalents and locale-specific order may apply to the characters with diacritics. In some locales, groups of characters compare as single collation units. For example, "ch" in Czech follows "h" and precedes "i", and "dzs" in Hungarian follows "dz" and precedes "g".

## Example
```cpp
#include <iostream>
#include <locale>
#include <string>
 
template<typename CharT>
void try_compare(const std::locale& l, const CharT* p1, const CharT* p2)
{
    auto& f = std::use_facet<std::collate<CharT>>(l);
 
    std::basic_string<CharT> s1(p1), s2(p2);
    if (f.compare(&s1[0], &s1[0] + s1.size(),
                  &s2[0], &s2[0] + s2.size()) < 0)
        std::wcout << p1 << " before " << p2 << '\n';
    else
        std::wcout << p2 << " before " << p1 << '\n';
}
 
int main()
{
    std::locale::global(std::locale("en_US.utf8"));
    std::wcout.imbue(std::locale());
 
    std::wcout << "In the American locale: ";
    try_compare(std::locale(), "hrnec", "chrt");
    std::wcout << "In the Czech locale: ";
    try_compare(std::locale("cs_CZ.utf8"), "hrnec", "chrt");
 
    std::wcout << "In the American locale: ";
    try_compare(std::locale(), L"år", L"ängel");
    std::wcout << "In the Swedish locale: ";
    try_compare(std::locale("sv_SE.utf8"), L"år", L"ängel");
}
```

## See also
- [strcoll](/cpp/string/byte/strcoll/)
- [wcscoll](/cpp/string/wide/wcscoll/)
- [operator()](/cpp/locale/locale/operator/)
