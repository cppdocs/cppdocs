---
title: "std::wctob"
source_path: "cpp/string/multibyte/wctob"
header: "<cwchar>"
category: "string"
---

Narrows a wide character c if its multibyte character equivalent in the initial shift state is a single byte.

## Declarations
```cpp
int wctob( std::wint_t c );
```

## Parameters
- `c`: wide character to narrow

## Return value
[EOF](/cpp/io/c/) if c does not represent a multibyte character with length 1 in initial shift state.

## Example
```cpp
#include <clocale>
#include <cwchar>
#include <iostream>
 
void try_narrowing(wchar_t c)
{
    int cn = std::wctob(c);
    if (cn != EOF)
        std::cout << '\'' << int(c) << "' narrowed to " << +cn << '\n';
    else
        std::cout << '\'' << int(c) << "' could not be narrowed\n";
}
 
int main()
{
    std::setlocale(LC_ALL, "th_TH.utf8");
    std::cout << std::hex << std::showbase << "In Thai UTF-8 locale:\n";
    try_narrowing(L'a');
    try_narrowing(L'๛');
 
    std::setlocale(LC_ALL, "th_TH.tis620");
    std::cout << "In Thai TIS-620 locale:\n";
    try_narrowing(L'a');
    try_narrowing(L'๛');
}
```

## See also
- [btowc](/cpp/string/multibyte/btowc/)
- [narrow](/cpp/io/basic_ios/narrow/)
- [narrow](/cpp/locale/ctype/narrow/)
- [C documentation](/c/string/multibyte/wctob/)
