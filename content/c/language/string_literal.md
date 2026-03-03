---
title: "String literals"
source_path: "c/language/string_literal"
category: "c"
---

Constructs an unnamed object of specified character array type in-place, used when a character string needs to be embedded in source code.

## Notes
A string literal is not necessarily a string; if a string literal has embedded null characters, it represents an array which contains more than one string:

If a valid hex digit follows a hex escape in a string literal, it would fail to compile as an invalid escape sequence, but string concatenation can be used as a workaround:

String literals can be used to [initialize arrays](/c/language/array_initialization/), and if the size of the array is one less the size of the string literal, the null terminator is ignored:

The encoding of character string literals (1) and wide string literals (5) is implementation-defined. For example, gcc selects them with the [commandline options](https://gcc.gnu.org/onlinedocs/cpp/Invocation.html) -fexec-charset and -fwide-exec-charset.

Although mixed wide string literal concatenation is allowed in C11, almost all compilers reject such concatenation (the only known exception is [SDCC](http://sdcc.sourceforge.net/)), and its usage experience is unknown. As a result, allowance of mixed wide string literal concatenation is removed in C23.

## Example
```cpp
#include <inttypes.h>
#include <locale.h>
#include <stddef.h>
#include <stdio.h>
#include <stdlib.h>
#include <uchar.h>
 
int main(void)
{
    char s1[] = "a猫🍌"; // or "a\u732B\U0001F34C"
#if __STDC_VERSION__ >= 202311L
    char8_t
#else
    char
#endif
    s2[] = u8"a猫🍌";
    char16_t s3[] = u"a猫🍌";
    char32_t s4[] = U"a猫🍌";
    wchar_t s5[] = L"a猫🍌";
 
    setlocale(LC_ALL, "en_US.utf8");
    printf("  \"%s\" is a char[%zu] holding     { ", s1, sizeof s1 / sizeof *s1);
    for(size_t n = 0; n < sizeof s1 / sizeof *s1; ++n)
        printf("0x%02X ", +(unsigned char)s1[n]);
    puts("}");
    printf(
#if __STDC_VERSION__ >= 202311L
    "u8\"%s\" is a char8_t[%zu] holding  { "
#else
    "u8\"%s\" is a char[%zu] holding     { "
#endif
, s2, sizeof s2 / sizeof *s2);
    for(size_t n = 0; n < sizeof s2 / sizeof *s2; ++n)
#if __STDC_VERSION__ >= 202311L
       printf("0x%02X ", s2[n]);
#else
       printf("0x%02X ", +(unsigned char)s2[n]);
#endif
    puts("}");
    printf(" u\"a猫🍌\" is a char16_t[%zu] holding { ", sizeof s3 / sizeof *s3);
    for(size_t n = 0; n < sizeof s3 / sizeof *s3; ++n)
       printf("0x%04" PRIXLEAST16" ", s3[n]);
    puts("}");
    printf(" U\"a猫🍌\" is a char32_t[%zu] holding { ", sizeof s4 / sizeof *s4);
    for(size_t n = 0; n < sizeof s4 / sizeof *s4; ++n)
       printf("0x%08" PRIXLEAST32" ", s4[n]);
    puts("}");
    printf(" L\"%ls\" is a wchar_t[%zu] holding  { ", s5, sizeof s5 / sizeof *s5);
    for(size_t n = 0; n < sizeof s5 / sizeof *s5; ++n)
       printf("0x%08X ", (unsigned)s5[n]);
    puts("}");
}
```

## See also
- [C++ documentation](/cpp/language/string_literal/)
