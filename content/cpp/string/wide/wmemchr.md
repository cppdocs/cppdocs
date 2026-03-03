---
title: "std::wmemchr"
source_path: "cpp/string/wide/wmemchr"
header: "<cwchar>"
category: "string"
---

Locates the first occurrence of wide character ch in the initial count wide characters of the wide character array pointed to by ptr.

## Declarations
```cpp
const wchar_t* wmemchr( const wchar_t* ptr, wchar_t ch, std::size_t count );
```

```cpp
wchar_t* wmemchr( wchar_t* ptr, wchar_t ch, std::size_t count );
```

## Parameters
- `ptr`: pointer to the wide character array to be examined
- `ch`: wide character to search for
- `count`: number of wide characters to examine

## Return value
Pointer to the location of the wide character, or a null pointer if no such character is found.

## Example
```cpp
#include <clocale>
#include <cwchar>
#include <iostream>
#include <locale>
 
int main()
{
    const wchar_t str[] = L"诺不轻信，故人不负我\0诺不轻许，故我不负人。";
    wchar_t target = L'许';
    const std::size_t sz = sizeof str / sizeof *str;
    if (const wchar_t* result = std::wmemchr(str, target, sz))
    {
        std::setlocale(LC_ALL, "en_US.utf8");
        std::wcout.imbue(std::locale("en_US.utf8"));
        std::wcout << "Found '" << target << "' at position " << result - str << '\n';
    }
}
```

## See also
- [memchr](/cpp/string/byte/memchr/)
- [strchr](/cpp/string/byte/strchr/)
- [wcschr](/cpp/string/wide/wcschr/)
- [findfind_iffind_if_not](/cpp/algorithm/find/)
- [C documentation](/c/string/wide/wmemchr/)
