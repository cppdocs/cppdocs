---
title: "Escape sequences"
source_path: "cpp/language/escape"
category: "language"
---

Escape sequences are used to represent certain special characters within [string literals](/cpp/language/string_literal/) and [character literals](/cpp/language/character_literal/).

## Notes
\0 is the most commonly used octal escape sequence, because it represents the terminating null character in [null-terminated strings](/cpp/string/#Null-terminated_strings).

The new-line character \n has special meaning when used in [text mode I/O](/cpp/io/c/): it is converted to the OS-specific newline representation, usually a byte or byte sequence. Some systems mark their lines with length fields instead.

Octal escape sequences have a limit of three octal digits, but terminate at the first character that is not a valid octal digit if encountered sooner.

Hexadecimal escape sequences have no length limit and terminate at the first character that is not a valid hexadecimal digit. If the value represented by a single hexadecimal escape sequence does not fit the range of values represented by the character type used in this string literal (char, char8_t,(since C++20)char16_t, char32_t,(since C++11)or wchar_t), the result is unspecified.

A universal character name in a narrow string literal or a 16-bit string literal may map to more than one code unit, e.g. \U0001f34c is 4 char code units in UTF-8 (\xF0\x9F\x8D\x8C) and 2 char16_t code units in UTF-16 (\xD83C\xDF4C).

The question mark escape sequence \? is used to prevent [trigraphs](/cpp/language/operator_alternative/) from being interpreted inside string literals: a string such as "??/" is compiled as "\", but if the second question mark is escaped, as in "?\?/", it becomes "??/". As trigraphs have been removed from C++, the question mark escape sequence is no longer necessary. It is preserved for compatibility with C++14 (and former revisions) and C.(since C++17)

## Example
```cpp
#include <iostream>
 
int main()
{
    std::cout << "This\nis\na\ntest\n\n";
    std::cout << "She said, \"Sells she seashells on the seashore?\"\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 505 | C++98 | the behavior was undefined if the character followinga backslash was not one of those specified in the table | made conditionally supported(semantic is implementation-defined) |

## See also
- [ASCII chart](/cpp/language/ascii/)
- [C documentation](/c/language/escape/)
