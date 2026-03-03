---
title: "std::ispunct(std::locale)"
source_path: "cpp/locale/ispunct"
header: "<locale>"
category: "locale"
---

Checks if the given character is classified as a punctuation character by the given locale's [std::ctype](/cpp/locale/ctype/) facet.

## Declarations
```cpp
template< class CharT >
bool ispunct( CharT ch, const locale& loc );
```

## Parameters
- `ch`: character
- `loc`: locale

## Return value
Returns true if the character is classified as punctuation, false otherwise.

## Example
```cpp
#include <iostream>
#include <locale>
 
int main()
{
    const wchar_t c = L'\u214b'; // upside-down ampersand
 
    std::locale loc1("C");
    std::cout << "ispunct('⅋', C locale) returned "
              << std::boolalpha << std::ispunct(c, loc1) << '\n';
 
    std::locale loc2("en_US.UTF-8");
    std::cout << "ispunct('⅋', Unicode locale) returned "
              << std::boolalpha << std::ispunct(c, loc2) << '\n';
}
```

## See also
- [ispunct](/cpp/string/byte/ispunct/)
- [iswpunct](/cpp/string/wide/iswpunct/)
