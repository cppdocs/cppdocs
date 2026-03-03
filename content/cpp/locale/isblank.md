---
title: "std::isblank(std::locale)"
source_path: "cpp/locale/isblank"
header: "<locale>"
category: "locale"
since: "C++11"
---

Checks if the given character is classified as a blank character by the given locale's [std::ctype](/cpp/locale/ctype/) facet.

## Declarations
```cpp
template< class CharT >
bool isblank( CharT ch, const locale& loc );
```
_(since C++11)_

## Parameters
- `ch`: character
- `loc`: locale

## Return value
Returns true if the character is classified as a blank character, false otherwise.

## Example
```cpp
#include <iostream>
#include <locale>
 
void try_with(wchar_t c, const char* loc)
{
    std::wcout << "isblank('" << c << "', locale(\"" << loc << "\")) returned "
               << std::boolalpha
               << std::isblank(c, std::locale(loc)) << '\n';
}
 
int main()
{
    const wchar_t IDEO_SPACE = L'\u3000'; // Unicode character 'IDEOGRAPHIC SPACE'
    try_with(IDEO_SPACE, "C");
    try_with(IDEO_SPACE, "en_US.UTF-8");
}
```

## See also
- [isblank](/cpp/string/byte/isblank/)
- [iswblank](/cpp/string/wide/iswblank/)
