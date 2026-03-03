---
title: "std::isgraph(std::locale)"
source_path: "cpp/locale/isgraph"
header: "<locale>"
category: "locale"
---

Checks if the given character is classified as a graphic character (i.e. printable, excluding space) by the given locale's [std::ctype](/cpp/locale/ctype/) facet.

## Declarations
```cpp
template< class CharT >
bool isgraph( CharT ch, const locale& loc );
```

## Parameters
- `ch`: character
- `loc`: locale

## Return value
Returns true if the character is classified as graphic, false otherwise.

## Example
```cpp
#include <iostream>
#include <locale>
 
int main()
{
    const wchar_t c = L'\u2a0c'; // quadruple integral
 
    std::locale loc1("C");
    std::cout << "isgraph('⨌', C locale) returned "
              << std::boolalpha << std::isgraph(c, loc1) << '\n';
 
    std::locale loc2("en_US.UTF-8");
    std::cout << "isgraph('⨌', Unicode locale) returned "
              << std::boolalpha << std::isgraph(c, loc2) << '\n';
}
```

## See also
- [isgraph](/cpp/string/byte/isgraph/)
- [iswgraph](/cpp/string/wide/iswgraph/)
