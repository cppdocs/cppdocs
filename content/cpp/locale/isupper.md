---
title: "std::isupper(std::locale)"
source_path: "cpp/locale/isupper"
header: "<locale>"
category: "locale"
---

Checks if the given character is classified as an uppercase alphabetic character by the given locale's [std::ctype](/cpp/locale/ctype/) facet.

## Declarations
```cpp
template< class CharT >
bool isupper( CharT ch, const locale& loc );
```

## Parameters
- `ch`: character
- `loc`: locale

## Return value
Returns true if the character is classified as uppercase, false otherwise.

## Example
```cpp
#include <iostream>
#include <locale>
 
int main()
{
    const wchar_t c = L'\u00de'; // LATIN CAPITAL LETTER THORN
 
    std::locale loc1("C");
    std::cout << std::boolalpha
              << "isupper('Þ', C locale) returned " << std::isupper(c, loc1) << '\n'
              << "islower('Þ', C locale) returned " << std::islower(c, loc1) << '\n';
 
    std::locale loc2("en_US.UTF8");
    std::cout << "isupper('Þ', Unicode locale) returned "
              << std::isupper(c, loc2) << '\n'
              << "islower('Þ', Unicode locale) returned "
              << std::islower(c, loc2) << '\n';
}
```

## See also
- [isupper](/cpp/string/byte/isupper/)
- [iswupper](/cpp/string/wide/iswupper/)
