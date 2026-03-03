---
title: "std::iscntrl(std::locale)"
source_path: "cpp/locale/iscntrl"
header: "<locale>"
category: "locale"
---

Checks if the given character is classified as a control character by the given locale's [std::ctype](/cpp/locale/ctype/) facet.

## Declarations
```cpp
template< class CharT >
bool iscntrl( CharT ch, const locale& loc );
```

## Parameters
- `ch`: character
- `loc`: locale

## Return value
Returns true if the character is classified as a control character, false otherwise.

## Example
```cpp
#include <iostream>
#include <locale>
 
int main()
{
    const wchar_t CCH = L'\u0094'; // Destructive Backspace in Unicode
 
    std::locale loc1("C");
    std::cout << "iscntrl(CCH, C locale) returned "
              << std::boolalpha << std::iscntrl(CCH, loc1) << '\n';
 
    std::locale loc2("en_US.UTF8");
    std::cout << "iscntrl(CCH, Unicode locale) returned "
              << std::boolalpha << std::iscntrl(CCH, loc2) << '\n';
}
```

## See also
- [iscntrl](/cpp/string/byte/iscntrl/)
- [iswcntrl](/cpp/string/wide/iswcntrl/)
