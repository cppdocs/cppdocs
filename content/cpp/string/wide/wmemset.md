---
title: "std::wmemset"
source_path: "cpp/string/wide/wmemset"
header: "<cwchar>"
category: "string"
---

Copies the wide character ch into each of the first count wide characters of the wide character array pointed to by dest.

## Declarations
```cpp
wchar_t* wmemset( wchar_t* dest, wchar_t ch, std::size_t count );
```

## Parameters
- `dest`: pointer to the wide character array to fill
- `ch`: fill wide character
- `count`: number of wide characters to fill

## Return value
Returns a copy of dest.

## Notes
This function is not locale-sensitive and pays no attention to the values of the wchar_t objects it writes: nulls as well as invalid wide characters are written too.

## Example
```cpp
#include <clocale>
#include <cwchar>
#include <iostream>
#include <locale>
 
int main()
{
    wchar_t ar[4] = {L'1', L'2', L'3', L'4'};
    std::wmemset(ar, L'\U0001f34c', 2); // replaces [12] with the 🍌 bananas
    std::wmemset(ar + 2, L'蕉', 2); // replaces [34] with the 蕉 bananas
 
    std::setlocale(LC_ALL, "en_US.utf8");
    std::wcout.imbue(std::locale("en_US.utf8"));
    std::wcout << std::wstring(ar, 4) << '\n';
}
```

## See also
- [memset](/cpp/string/byte/memset/)
- [wmemcpy](/cpp/string/wide/wmemcpy/)
- [fill_n](/cpp/algorithm/fill_n/)
- [C documentation](/c/string/wide/wmemset/)
