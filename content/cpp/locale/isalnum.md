---
title: "std::isalnum(std::locale)"
source_path: "cpp/locale/isalnum"
header: "<locale>"
category: "locale"
---

Checks if the given character is classified as an alphanumeric character by the given locale's [std::ctype](/cpp/locale/ctype/) facet.

## Declarations
```cpp
template< class CharT >
bool isalnum( CharT ch, const locale& loc );
```

## Parameters
- `ch`: character
- `loc`: locale

## Return value
Returns true if the character is classified as alphanumeric, false otherwise.

## Example
```cpp
#include <iostream>
#include <locale>
 
int main()
{
    const wchar_t c = L'\u2135'; // mathematical symbol aleph
 
    std::locale loc1("C");
    std::cout << "isalnum('ℵ', C locale) returned "
              << std::boolalpha << std::isalnum(c, loc1) << '\n';
 
    std::locale loc2("en_US.UTF-8");
    std::cout << "isalnum('ℵ', Unicode locale) returned "
              << std::boolalpha << std::isalnum(c, loc2) << '\n';
}
```

## See also
- [isalnum](/cpp/string/byte/isalnum/)
- [iswalnum](/cpp/string/wide/iswalnum/)
