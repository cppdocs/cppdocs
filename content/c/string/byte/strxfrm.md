---
title: "strxfrm"
source_path: "c/string/byte/strxfrm"
header: "<string.h>"
category: "c"
---

Transforms the null-terminated byte string pointed to by src into the implementation-defined form such that comparing two transformed strings with [strcmp](/c/string/byte/strcmp/) gives the same result as comparing the original strings with [strcoll](/c/string/byte/strcoll/), in the current C locale.

## Declarations
```cpp
size_t strxfrm( char *dest, const char *src, size_t count );
```
_(until C99)_

```cpp
size_t strxfrm( char *restrict dest, const char *restrict src, size_t count );
```
_(since C99)_

## Parameters
- `dest`: pointer to the first element of the array where the transformed string will be written
- `src`: pointer to the first character of a null-terminated byte string to transform
- `count`: maximum number of characters to be written

## Return value
The length of the transformed string, not including the terminating null-character.

## Notes
The correct length of the buffer that can receive the entire transformed string is 1+strxfrm([NULL](/c/types/NULL/), src, 0)

This function is used when making multiple locale-dependent comparisons using the same string or set of strings, because it is more efficient to use strxfrm to transform all the strings just once, and subsequently compare the transformed strings with [strcmp](/c/string/byte/strcmp/).

## Example
```cpp
#include <stdio.h>
#include <string.h>
#include <locale.h>
 
int main(void)
{
    setlocale(LC_COLLATE, "cs_CZ.iso88592");
 
    const char *in1 = "hrnec";
    char out1[1+strxfrm(NULL, in1, 0)];
    strxfrm(out1, in1, sizeof out1);
 
    const char *in2 = "chrt";
    char out2[1+strxfrm(NULL, in2, 0)];
    strxfrm(out2, in2, sizeof out2);
 
    printf("In the Czech locale: ");
    if(strcmp(out1, out2) < 0)
         printf("%s before %s\n",in1, in2);
    else
         printf("%s before %s\n",in2, in1);
 
    printf("In lexicographical comparison: ");
    if(strcmp(in1, in2)<0)
         printf("%s before %s\n",in1, in2);
    else
         printf("%s before %s\n",in2, in1);
 
}
```

## See also
- [strcoll](/c/string/byte/strcoll/)
- [wcscoll](/c/string/wide/wcscoll/)
- [strcmp](/c/string/byte/strcmp/)
- [wcsxfrm](/c/string/wide/wcsxfrm/)
- [C++ documentation](/cpp/string/byte/strxfrm/)
