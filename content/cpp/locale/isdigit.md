---
title: "std::isdigit(std::locale)"
source_path: "cpp/locale/isdigit"
header: "<locale>"
category: "locale"
---

Checks if the given character is classified as a digit by the given locale's [std::ctype](/cpp/locale/ctype/) facet.

## Declarations
```cpp
template< class CharT >
bool isdigit( CharT ch, const locale& loc );
```

## Parameters
- `ch`: character
- `loc`: locale

## Return value
Returns true if the character is classified as a digit, false otherwise.

## Example
```cpp
#include <iostream>
#include <locale>
#include <string>
#include <unordered_set>
 
struct jdigit_ctype : std::ctype<wchar_t>
{
    std::unordered_set<wchar_t> jdigits{
        L'一', L'二', L'三', L'四', L'五', L'六', L'七', L'八', L'九', L'十'
    };
 
    bool do_is(mask m, char_type c) const override
    {
        return (m & digit) && jdigits.contains(c)
            ? true // Japanese digits will be classified as digits
            : ctype::do_is(m, c); // leave the rest to the parent class
    }
};
 
int main()
{
    std::wstring text = L"123一二三１２３";
    std::locale loc(std::locale(""), new jdigit_ctype);
 
    std::locale::global(std::locale("en_US.utf8"));
    std::wcout.imbue(std::locale());
 
    for (const wchar_t c : text)
        if (std::isdigit(c, loc))
            std::wcout << c << " is a digit\n";
        else
            std::wcout << c << " is NOT a digit\n";
}
```

## See also
- [isdigit](/cpp/string/byte/isdigit/)
- [iswdigit](/cpp/string/wide/iswdigit/)
