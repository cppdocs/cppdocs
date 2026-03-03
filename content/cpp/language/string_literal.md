---
title: "String literal"
source_path: "cpp/language/string_literal"
category: "language"
since: "C++11"
---

[1 Syntax](#Syntax)

## Notes
String literals can be used to [initialize character arrays](/cpp/language/aggregate_initialization/). If an array is initialized like char str[] = "foo";, str will contain a copy of the string "foo".

String literals are convertible and assignable to non-const char* or wchar_t* in order to be compatible with C, where string literals are of types char[N] and wchar_t[N]. Such implicit conversion is deprecated.

String literals are not convertible or assignable to non-const CharT*. An explicit cast (e.g. [const_cast](/cpp/language/const_cast/)) must be used if such conversion is wanted.

A string literal is not necessarily a null-terminated character sequence: if a string literal has embedded null characters, it represents an array which contains more than one string.

If a valid hexadecimal digit follows a hexadecimal escape sequence in a string literal, it would fail to compile as an invalid escape sequence. String concatenation can be used as a workaround:

## Example
```cpp
#include <iostream>
 
// array1 and array2 contains the same values:
char array1[] = "Foo" "bar";
char array2[] = {'F', 'o', 'o', 'b', 'a', 'r', '\0'};
 
const char* s1 = R"foo(
Hello
  World
)foo";
// same as
const char* s2 = "\nHello\n  World\n";
// same as
const char* s3 = "\n"
                 "Hello\n"
                 "  World\n";
 
const wchar_t* s4 = L"ABC" L"DEF"; // OK, same as
const wchar_t* s5 = L"ABCDEF";
const char32_t* s6 = U"GHI" "JKL"; // OK, same as
const char32_t* s7 = U"GHIJKL";
const char16_t* s9 = "MN" u"OP" "QR"; // OK, same as
const char16_t* sA = u"MNOPQR";
 
// const auto* sB = u"Mixed" U"Types";
        // before C++23 may or may not be supported by
        // the implementation; ill-formed since C++23
 
const wchar_t* sC = LR"--(STUV)--"; // OK, raw string literal
 
int main()
{
    std::cout << array1 << ' ' << array2 << '\n'
              << s1 << s2 << s3 << std::endl;
    std::wcout << s4 << ' ' << s5 << ' ' << sC
               << std::endl;
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 411(P2029R4) | C++98 | escape sequences in string literals werenot allowed to map to multiple code units | allowed |
| CWG 1656(P2029R4) | C++98 | the characters denoted by numeric escapesequences in string literals were unclear | made clear |
| CWG 1759 | C++11 | a UTF-8 string literal might have codeunits that are not representable in char | char can represent all UTF-8 code units |
| CWG 1823 | C++98 | whether string literals are distinctwas implementation-defined | distinctness is unspecified, and samestring literal can yield different object |
| CWG 2333(P2029R4) | C++11 | it was unclear whether numeric escape sequenceswere allowed in UTF-8/16/32 string literals | made clear |
| CWG 2870 | C++11 | the concatenation result of twoordinary string literals was unclear | made clear |
| P1854R4 | C++98 | ordinary and wide string literals with non-encodablecharacters were conditionally-supported | programs with such literals are ill-formed |
| P2029R4 | C++98 | 1. it was unclear whether string literals could contain non-encodable characters2. it was unclear whether string literals could contain numeric escape sequences such that the code units they represent are not representable in the literals' array element type | 1. made conditionally-supported for ordinary and wide string literals[1]2. ill-formed if the code units are neither representable in the unsigned integer type corresponding to the underlying type |

## See also
- [user-defined literals](/cpp/language/user_literal/)
- [C documentation](/c/language/string_literal/)
