---
title: "std::isspace(std::locale)"
source_path: "cpp/locale/isspace"
header: "<locale>"
category: "locale"
---

Checks if the given character is classified as a whitespace character by the given locale's [std::ctype](/cpp/locale/ctype/) facet.

## Declarations
```cpp
template< class CharT >
bool isspace( CharT ch, const locale& loc );
```

## Parameters
- `ch`: character
- `loc`: locale

## Return value
Returns true if the character is classified as a whitespace character, false otherwise.

## Example
```cpp
#include <iostream>
#include <locale>
 
void try_with(wchar_t c, const char* loc)
{
    std::wcout << "isspace('" << c << "', locale(\"" << loc << "\")) returned "
               << std::boolalpha << std::isspace(c, std::locale(loc)) << '\n';
}
 
int main()
{
    const wchar_t EM_SPACE = L'\u2003'; // Unicode character 'EM SPACE'
    try_with(EM_SPACE, "C");
    try_with(EM_SPACE, "en_US.UTF8");
}
```

## See also
- [isspace](/cpp/string/byte/isspace/)
- [iswspace](/cpp/string/wide/iswspace/)
