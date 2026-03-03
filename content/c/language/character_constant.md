---
title: "Character constant"
source_path: "c/language/character_constant"
category: "c"
---

[1 Syntax](#Syntax)

## Notes
Multicharacter constants were inherited by C from the B programming language. Although not specified by the C standard, most compilers (MSVC is a notable exception) implement multicharacter constants as specified in B: the values of each char in the constant initialize successive bytes of the resulting integer, in big-endian zero-padded right-adjusted order, e.g. the value of '\1' is 0x00000001 and the value of '\1\2\3\4' is 0x01020304.

In C++, encodable ordinary character literals have type char, rather than int.

Unlike [integer constants](/c/language/integer_constant/), a character constant may have a negative value if char is signed: on such implementations '\xFF' is an int with the value -1.

When used in a controlling expression of [#if](/c/preprocessor/conditional/) or [#elif](/c/preprocessor/conditional/), character constants may be interpreted in terms of the source character set, the execution character set, or some other implementation-defined character set.

16/32-bit multicharacter constants are not widely supported and removed in C23. Some common implementations (e.g. clang) do not accept them at all.

## Example
```cpp
#include <stddef.h>
#include <stdio.h>
#include <uchar.h>
 
int main (void)
{
    printf("constant value     \n");
    printf("-------- ----------\n");
 
    // integer character constants,
    int c1='a'; printf("'a':\t %#010x\n", c1);
    int c2='🍌'; printf("'🍌':\t %#010x\n\n", c2); // implementation-defined
 
    // multicharacter constant
    int c3='ab'; printf("'ab':\t %#010x\n\n", c3); // implementation-defined
 
    // 16-bit wide character constants
    char16_t uc1 = u'a'; printf("'a':\t %#010x\n", (int)uc1);
    char16_t uc2 = u'¢'; printf("'¢':\t %#010x\n", (int)uc2);
    char16_t uc3 = u'猫'; printf("'猫':\t %#010x\n", (int)uc3);
    // implementation-defined (🍌 maps to two 16-bit characters)
    char16_t uc4 = u'🍌'; printf("'🍌':\t %#010x\n\n", (int)uc4);
 
    // 32-bit wide character constants
    char32_t Uc1 = U'a'; printf("'a':\t %#010x\n", (int)Uc1);
    char32_t Uc2 = U'¢'; printf("'¢':\t %#010x\n", (int)Uc2);
    char32_t Uc3 = U'猫'; printf("'猫':\t %#010x\n", (int)Uc3);
    char32_t Uc4 = U'🍌'; printf("'🍌':\t %#010x\n\n", (int)Uc4);
 
    // wide character constants
    wchar_t wc1 = L'a'; printf("'a':\t %#010x\n", (int)wc1);
    wchar_t wc2 = L'¢'; printf("'¢':\t %#010x\n", (int)wc2);
    wchar_t wc3 = L'猫'; printf("'猫':\t %#010x\n", (int)wc3);
    wchar_t wc4 = L'🍌'; printf("'🍌':\t %#010x\n\n", (int)wc4);
}
```

## See also
- [C++ documentation](/cpp/language/character_literal/)
