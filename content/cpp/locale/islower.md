---
title: "std::islower(std::locale)"
source_path: "cpp/locale/islower"
header: "<locale>"
category: "locale"
---

Checks if the given character is classified as a lowercase alphabetic character by the given locale's [std::ctype](/cpp/locale/ctype/) facet.

## Declarations
```cpp
template< class CharT >
bool islower( CharT ch, const locale& loc );
```

## Parameters
- `ch`: character
- `loc`: locale

## Return value
Returns true if the character is classified as lowercase, false otherwise.

## Example
```cpp
#include <iostream>
#include <locale>
 
int main()
{
    const wchar_t c = L'\u03c0'; // GREEK SMALL LETTER PI
 
    std::locale loc1("C");
    std::cout << std::boolalpha
              << "islower('π', C locale) returned "
              << std::islower(c, loc1) << '\n'
              << "isupper('π', C locale) returned "
              << std::isupper(c, loc1) << '\n';
 
    std::locale loc2("en_US.UTF8");
    std::cout << "islower('π', Unicode locale) returned "
              << std::islower(c, loc2) << '\n'
              << "isupper('π', Unicode locale) returned "
              << std::isupper(c, loc2) << '\n';
}
```

## See also
- [islower](/cpp/string/byte/islower/)
- [iswlower](/cpp/string/wide/iswlower/)
