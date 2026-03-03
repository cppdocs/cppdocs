---
title: "std::ctype"
source_path: "cpp/locale/ctype"
header: "<locale>"
category: "locale"
---

Class ctype encapsulates character classification features. All stream input operations performed through [std::basic_istream](/cpp/io/basic_istream/)<CharT> use the std::ctype<CharT> of the locale imbued in the stream to identify whitespace characters for input tokenization. Stream output operations apply std::ctype<CharT>::widen() to narrow-character arguments prior to output.

## Declarations
```cpp
template< class CharT >
class ctype;
```

## Example
```cpp
#include <iostream>
#include <locale>
#include <sstream>
 
struct csv_whitespace : std::ctype<wchar_t>
{
    bool do_is(mask m, char_type c) const
    {
        if ((m & space) && c == L' ')
            return false; // space will NOT be classified as whitespace
 
        if ((m & space) && c == L',')
            return true; // comma will be classified as whitespace
 
        return ctype::do_is(m, c); // leave the rest to the base class
    }
};
 
int main()
{
    std::wstring in = L"Column 1,Column 2,Column 3\n123,456,789";
    std::wstring token;
 
    std::wcout << "default locale:\n";
    std::wistringstream s1(in);
    while (s1 >> token)
        std::wcout << "  " << token << '\n';
 
    std::wcout << "locale with modified ctype:\n";
    std::wistringstream s2(in);
    csv_whitespace* my_ws = new csv_whitespace;
    s2.imbue(std::locale(s2.getloc(), my_ws));
    while (s2 >> token)
        std::wcout << "  " << token << '\n';
}
```

## See also
- [ctype<char>](/cpp/locale/ctype_char/)
- [ctype_base](/cpp/locale/ctype_base/)
- [ctype_byname](/cpp/locale/ctype_byname/)
