---
title: "Escape sequences"
source_path: "c/language/escape"
category: "c"
---

Escape sequences are used to represent certain special characters within [string literals](/c/language/string_literal/) and [character constants](/c/language/character_constant/).

## Notes
\0 is the most commonly used octal escape sequence, because it represents the terminating null character in null-terminated strings.

The new-line character \n has special meaning when used in [text mode I/O](/c/io/): it is converted to the OS-specific newline byte or byte sequence.

Octal escape sequences have a length limit of three octal digits but terminate at the first character that is not a valid octal digit if encountered sooner.

Hexadecimal escape sequences have no length limit and terminate at the first character that is not a valid hexadecimal digit. If the value represented by a single hexadecimal escape sequence does not fit the range of values represented by the character type used in this string literal or character constant (char, char8_t(since C23), char16_t, char32_t(since C11), or wchar_t), the result is unspecified.

A universal character name in a narrow string literal or a 16-bit string literal(since C11) may map to more than one code unit, e.g. \U0001f34c is 4 char code units in UTF-8 (\xF0\x9F\x8D\x8C)and 2 char16_t code units in UTF-16 (\xD83C\xDF4C)(since C11).

A universal character name corresponding to a code pointer greater than 0x10FFFF (which is undefined in ISO/ISC 10646) can be used in [character constants](/c/language/character_constant/) and [string literals](/c/language/string_literal/). Such usage is not allowed in C++20.

The question mark escape sequence \? is used to prevent [trigraphs](/c/language/operator_alternative/) from being interpreted inside string literals: a string such as "??/" is compiled as "\", but if the second question mark is escaped, as in "?\?/", it becomes "??/"

## Example
```cpp
#include <stdio.h>
 
int main(void)
{
    printf("This\nis\na\ntest\n\nShe said, \"How are you?\"\n");
}
```

## See also
- [ASCII chart](/c/language/ascii/)
- [C++ documentation](/cpp/language/escape/)
