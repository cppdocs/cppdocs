---
title: "std::ctype<CharT>::scan_not, std::ctype<CharT>::do_scan_not"
source_path: "cpp/locale/ctype/scan_not"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the protected virtual member function do_scan_not of the most derived class.

## Declarations
```cpp
public:
const CharT* scan_not( mask m, const CharT* beg, const CharT* end ) const;
```

```cpp
protected:
virtual const CharT* do_scan_not( mask m, const CharT* beg, const CharT* end ) const;
```

## Parameters
- `m`: mask to search for
- `beg`: pointer to the first character in an array of characters to search
- `end`: one past the end pointer for the array of characters to search

## Return value
Pointer to the first character in [beg,end) that doesn't satisfy the mask, or end if no such character was found.

## Example
```cpp
#include <clocale>
#include <iostream>
#include <iterator>
#include <locale>
 
int main()
{
    std::setlocale(LC_ALL, "en_US.utf8");
    std::wcout.imbue(std::locale("en_US.utf8"));
    auto& f = std::use_facet<std::ctype<wchar_t>>(std::wcout.getloc());
 
    // skip leading whitespace
    wchar_t s1[] = L"      \t\t\n  Кошка";
    const wchar_t* p1 = f.scan_not(std::ctype_base::space, std::begin(s1), std::end(s1));
    std::wcout << '\'' << p1 << "'\n";
 
    // skip leading digits
    wchar_t s2[] = L"123456789ネプネプ";
    const wchar_t* p2 = f.scan_not(std::ctype_base::digit, std::begin(s2), std::end(s2));
    std::wcout << '\'' << p2 << "'\n";
}
```

## See also
- [scan_not](/cpp/locale/ctype_char/scan_not/)
- [do_scan_is](/cpp/locale/ctype/scan_is/)
