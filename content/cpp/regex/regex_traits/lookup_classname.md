---
title: "std::regex_traits<CharT>::lookup_classname"
source_path: "cpp/regex/regex_traits/lookup_classname"
category: "regex"
---

If the character sequence [first,last) represents the name of a valid character class in the currently imbued locale (that is, the string between [: and :] in regular expressions), returns the implementation-defined value representing this character class. Otherwise, returns zero.

## Declarations
```cpp
template< class ForwardIt >
char_class_type lookup_classname( ForwardIt first,
ForwardIt last,
bool icase = false ) const;
```

## Parameters
- `first, last`: a pair of iterators which determines the sequence of characters that represents a name of a character class
- `icase`: if true, ignores the upper/lower case distinction in the character classification

## Return value
The bitmask representing the character classification determined by the given character class, or char_class_type() if the class is unknown.

## Example
```cpp
#include <cwctype>
#include <iostream>
#include <locale>
#include <regex>
 
// This custom regex traits uses wctype/iswctype to implement lookup_classname/isctype.
struct wctype_traits : std::regex_traits<wchar_t>
{
    using char_class_type = std::wctype_t;
 
    template<class It>
    char_class_type lookup_classname(It first, It last, bool = false) const
    {
        return std::wctype(std::string(first, last).c_str());
    }
 
    bool isctype(wchar_t c, char_class_type f) const
    {
        return std::iswctype(c, f);
    }
};
 
int main()
{
    std::locale::global(std::locale("ja_JP.utf8"));
    std::wcout.sync_with_stdio(false);
    std::wcout.imbue(std::locale());
 
    std::wsmatch m;
    std::wstring in = L"風の谷のナウシカ";
    // matches all characters (they are classified as alnum)
    std::regex_search(in, m, std::wregex(L"([[:alnum:]]+)"));
    std::wcout << "alnums: " << m[1] << '\n'; // prints "風の谷のナウシカ"
    // matches only the katakana
    std::regex_search(in, m,
                      std::basic_regex<wchar_t, wctype_traits>(L"([[:jkata:]]+)"));
    std::wcout << "katakana: " << m[1] << '\n'; // prints "ナウシカ"
}
```

## See also
- [isctype](/cpp/regex/regex_traits/isctype/)
- [wctype](/cpp/string/wide/wctype/)
