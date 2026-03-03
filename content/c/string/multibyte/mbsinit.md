---
title: "mbsinit"
source_path: "c/string/multibyte/mbsinit"
header: "<wchar.h>"
category: "c"
---

If ps is not a null pointer, the mbsinit function determines whether the pointed-to [mbstate_t](/c/string/multibyte/mbstate_t/) object describes the initial conversion state.

## Declarations
```cpp
int mbsinit( const mbstate_t* ps);
```
_(since C95)_

## Parameters
- `ps`: pointer to the mbstate_t object to examine

## Return value
0 if ps is not a null pointer and does not represent the initial conversion state, nonzero value otherwise.

## Notes
Although a zero-initialized [mbstate_t](/c/string/multibyte/mbstate_t/) always represents the initial conversion state, there may be other values of [mbstate_t](/c/string/multibyte/mbstate_t/) that also represent the initial conversion state.

## Example
```cpp
#include <locale.h>
#include <string.h>
#include <stdio.h>
#include <wchar.h>
 
int main(void)
{
    // allow mbrlen() to work with UTF-8 multibyte encoding
    setlocale(LC_ALL, "en_US.utf8");
    // UTF-8 narrow multibyte encoding
    const char* str = u8"水"; // or u8"\u6c34" or "\xe6\xb0\xb4"
    static mbstate_t mb; // zero-initialize
    (void)mbrlen(&str[0], 1, &mb);
    if (!mbsinit(&mb)) {
        printf("After processing the first 1 byte of %s,\n"
               "the conversion state is not initial\n\n", str);
    }
 
    (void)mbrlen(&str[1], strlen(str), &mb);
    if (mbsinit(&mb)) {
        printf("After processing the remaining 2 bytes of %s,\n"
               "the conversion state is initial conversion state\n", str);
    }
}
```

## See also
- [mbstate_t](/c/string/multibyte/mbstate_t/)
- [C++ documentation](/cpp/string/multibyte/mbsinit/)
