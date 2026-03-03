---
title: "wctob"
source_path: "c/string/multibyte/wctob"
header: "<wchar.h>"
category: "c"
---

Narrows a wide character c if its multibyte character equivalent in the initial shift state is a single byte.

## Declarations
```cpp
int wctob( wint_t c );
```
_(since C95)_

## Parameters
- `c`: wide character to narrow

## Return value
[EOF](/c/io/) if c does not represent a multibyte character with length 1 in initial shift state.

## Example
```cpp
#include <locale.h>
#include <wchar.h>
#include <stdio.h>
#include <assert.h>
 
void try_narrowing(wchar_t c)
{
    int cn = wctob(c);
    if(cn != EOF)
        printf("%#x narrowed to %#x\n", c, cn);
    else
        printf("%#x could not be narrowed\n", c);
}
 
int main(void)
{
    char* utf_locale_present = setlocale(LC_ALL, "th_TH.utf8");
    assert(utf_locale_present);
    puts("In Thai UTF-8 locale:");
    try_narrowing(L'a');
    try_narrowing(L'๛');
 
    char* tis_locale_present = setlocale(LC_ALL, "th_TH.tis620");
    assert(tis_locale_present);
    puts("In Thai TIS-620 locale:");
    try_narrowing(L'a');
    try_narrowing(L'๛');
}
```

## See also
- [btowc](/c/string/multibyte/btowc/)
- [C++ documentation](/cpp/string/multibyte/wctob/)
