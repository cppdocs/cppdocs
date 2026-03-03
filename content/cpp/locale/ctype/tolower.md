---
title: "std::ctype<CharT>::tolower, std::ctype<CharT>::do_tolower"
source_path: "cpp/locale/ctype/tolower"
header: "<locale>"
category: "locale"
---

1,2) Public member function, calls the protected virtual member function do_tolower of the most derived class.

## Declarations
```cpp
public:
CharT tolower( CharT c ) const;
```

```cpp
public:
const CharT* tolower( CharT* beg, const CharT* end ) const;
```

```cpp
protected:
virtual CharT do_tolower( CharT c ) const;
```

```cpp
protected:
virtual const CharT* do_tolower( CharT* beg, const CharT* end ) const;
```

## Parameters
- `c`: character to convert
- `beg`: pointer to the first character in an array of characters to convert
- `end`: one past the end pointer for the array of characters to convert

## Notes
Only 1:1 character mapping can be performed by this function, e.g. the Greek uppercase letter 'Σ' has two lowercase forms, depending on the position in a word: 'σ' and 'ς'. A call to do_tolower cannot be used to obtain the correct lowercase form in this case.

## Example
```cpp
#include <iostream>
#include <locale>
 
void try_lower(const std::ctype<wchar_t>& f, wchar_t c)
{
    wchar_t up = f.tolower(c);
    if (up != c)
        std::wcout << "Lower case form of \'" << c << "' is " << up << '\n';
    else
        std::wcout << '\'' << c << "' has no lower case form\n";
}
 
int main()
{
    std::locale::global(std::locale("en_US.utf8"));
    std::wcout.imbue(std::locale());
    std::wcout << "In US English UTF-8 locale:\n";
    auto& f = std::use_facet<std::ctype<wchar_t>>(std::locale());
    try_lower(f, L'Σ');
    try_lower(f, L'Ɛ');
    try_lower(f, L'Ａ');
 
    std::wstring str = L"HELLo, wORLD!";
    std::wcout << "Lowercase form of the string '" << str << "' is ";
    f.tolower(&str[0], &str[0] + str.size());
    std::wcout << '\'' << str << "'\n";
}
```

## See also
- [toupper](/cpp/locale/ctype/toupper/)
- [tolower](/cpp/string/byte/tolower/)
- [towlower](/cpp/string/wide/towlower/)
