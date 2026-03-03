---
title: "std::isalpha(std::locale)"
source_path: "cpp/locale/isalpha"
header: "<locale>"
category: "locale"
---

Checks if the given character is classified as an alphabetic character by the given locale's [std::ctype](/cpp/locale/ctype/) facet.

## Declarations
```cpp
template< class CharT >
bool isalpha( CharT ch, const locale& loc );
```

## Parameters
- `ch`: character
- `loc`: locale

## Return value
Returns true if the character is classified as alphabetic, false otherwise.

## Example
```cpp
#include <iostream>
#include <locale>
 
int main()
{
    const wchar_t c = L'\u042f'; // cyrillic capital letter ya
 
    std::locale loc1("C");
    std::cout << "isalpha('Я', C locale) returned "
              << std::boolalpha << std::isalpha(c, loc1) << '\n';
 
    std::locale loc2("en_US.UTF8");
    std::cout << "isalpha('Я', Unicode locale) returned "
              << std::boolalpha << std::isalpha(c, loc2) << '\n';
}
```

## See also
- [isalpha](/cpp/string/byte/isalpha/)
- [iswalpha](/cpp/string/wide/iswalpha/)
