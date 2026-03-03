---
title: "wcsxfrm"
source_path: "c/string/wide/wcsxfrm"
header: "<wchar.h>"
category: "c"
---

Transforms the null-terminated wide string pointed to by src into the implementation-defined form such that comparing two transformed strings with [wcscmp](/c/string/wide/wcscmp/) gives the same result as comparing the original strings with [wcscoll](/c/string/wide/wcscoll/), in the current C locale.

## Declarations
```cpp
size_t wcsxfrm( wchar_t* dest, const wchar_t* src, size_t count );
```
_(until C99) (since C95)_

```cpp
size_t wcsxfrm( wchar_t* restrict dest, const wchar_t* restrict src, size_t count );
```
_(since C99)_

## Parameters
- `dest`: pointer to the first element of a wide null-terminated string to write the transformed string to
- `src`: pointer to the null-terminated wide character string to transform
- `count`: maximum number of characters to output

## Return value
The length of the transformed wide string, not including the terminating null-character.

## Notes
The correct length of the buffer that can receive the entire transformed string is 1+wcsxfrm([NULL](/c/types/NULL/), src, 0)

This function is used when making multiple locale-dependent comparisons using the same wide string or set of wide strings, because it is more efficient to use wcsxfrm to transform all the strings just once, and subsequently compare the transformed wide strings with [wcscmp](/c/string/wide/wcscmp/).

## Example
```cpp
#include <stdio.h>
#include <wchar.h>
#include <locale.h>
 
int main(void)
{
    setlocale(LC_ALL, "sv_SE.utf8");
 
    const wchar_t *in1 = L"\u00e5r";
    wchar_t out1[1+wcsxfrm(NULL, in1, 0)];
    wcsxfrm(out1, in1, sizeof out1/sizeof *out1);
 
    const wchar_t *in2 = L"\u00e4ngel";
    wchar_t out2[1+wcsxfrm(NULL, in2, 0)];
    wcsxfrm(out2, in2, sizeof out2/sizeof *out2);
 
    printf("In the Swedish locale: ");
    if(wcscmp(out1, out2) < 0)
         printf("%ls before %ls\n", in1, in2);
    else
         printf("%ls before %ls\n", in2, in1);
 
    printf("In lexicographical comparison: ");
    if(wcscmp(in1, in2) < 0)
         printf("%ls before %ls\n", in1, in2);
    else
         printf("%ls before %ls\n", in2, in1);
}
```

## See also
- [strcoll](/c/string/byte/strcoll/)
- [wcscoll](/c/string/wide/wcscoll/)
- [wcscmp](/c/string/wide/wcscmp/)
- [strxfrm](/c/string/byte/strxfrm/)
- [C++ documentation](/cpp/string/wide/wcsxfrm/)
