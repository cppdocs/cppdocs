---
title: "std::isprint(std::locale)"
source_path: "cpp/locale/isprint"
header: "<locale>"
category: "locale"
---

Checks if the given character is classified as a printable character (including space) by the given locale's [std::ctype](/cpp/locale/ctype/) facet.

## Declarations
```cpp
template< class CharT >
bool isprint( CharT ch, const locale& loc );
```

## Parameters
- `ch`: character
- `loc`: locale

## Return value
Returns true if the character is classified as printable, false otherwise.

## Example
```cpp
#include <iostream>
#include <locale>
 
int main()
{
    const wchar_t c = L'\u2122'; // trademark sign
 
    std::locale loc1("C");
    std::cout << "isprint('™', C locale) returned "
              << std::boolalpha << std::isprint(c, loc1) << '\n';
 
    std::locale loc2("en_US.UTF-8");
    std::cout << "isprint('™', Unicode locale) returned "
              << std::boolalpha << std::isprint(c, loc2) << '\n';
}
```

## See also
- [isprint](/cpp/string/byte/isprint/)
- [iswprint](/cpp/string/wide/iswprint/)
