---
title: "wmemset"
source_path: "c/string/wide/wmemset"
header: "<wchar.h>"
category: "c"
---

Copies the wide character ch into each of the first count wide characters of the wide character array (or integer array of compatible type) pointed to by dest.

## Declarations
```cpp
wchar_t* wmemset( wchar_t* dest, wchar_t ch, size_t count );
```
_(since C95)_

## Parameters
- `dest`: pointer to the wide character array to fill
- `ch`: fill wide character
- `count`: number of wide characters to fill

## Return value
Returns a copy of dest

## Notes
This function is not locale-sensitive and pays no attention to the values of the wchar_t objects it writes: nulls as well as invalid wide characters are written too.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <wchar.h>
 
int main(void)
{
    wchar_t ar[10] = L"1234567890"; // no trailing null in the array
    wmemset(ar, L'\U0001f34c', 5); // replaces [12345] with the 🍌 bananas
    wmemset(ar + 5, L'蕉', 5); // replaces [67890] with the 蕉 bananas
 
    setlocale(LC_ALL, "en_US.utf8");
    for (size_t n = 0; n < sizeof ar / sizeof *ar; ++n)
        putwchar(ar[n]);
    putwchar(L'\n');
}
```

## See also
- [memsetmemset_explicitmemset_s](/c/string/byte/memset/)
- [wmemcpywmemcpy_s](/c/string/wide/wmemcpy/)
- [C++ documentation](/cpp/string/wide/wmemset/)
