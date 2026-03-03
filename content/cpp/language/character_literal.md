---
title: "Character literal"
source_path: "cpp/language/character_literal"
category: "language"
since: "C++11"
---

[1 Syntax](#Syntax)

## Notes
Multicharacter literals were inherited by C from the B programming language. Although not specified by the C or C++ standard, most compilers (MSVC is a notable exception) implement multicharacter literals as specified in B: the values of each char in the literal initialize successive bytes of the resulting integer, in big-endian zero-padded right-adjusted order, e.g. the value of '\1' is 0x00000001 and the value of '\1\2\3\4' is 0x01020304.

In C, character constants such as 'a' or '\n' have type int, rather than char.

## Example
```cpp
#include <cstdint>
#include <iomanip>
#include <iostream>
#include <string_view>
 
template<typename CharT>
void dump(std::string_view s, const CharT c)
{
    const uint8_t* data{reinterpret_cast<const uint8_t*>(&c)};
 
    std::cout << s << " \t" << std::hex
              << std::uppercase << std::setfill('0');
 
    for (auto i{0U}; i != sizeof(CharT); ++i)
        std::cout << std::setw(2) << static_cast<unsigned>(data[i]) << ' ';
 
    std::cout << '\n';
}
 
void print(std::string_view str = "") { std::cout << str << '\n'; }
 
int main()
{
    print("Ordinary character literals:");
    char c1 = 'a'; dump("'a'", c1);
    char c2 = '\x2a'; dump("'*'", c2);
 
    print("\n" "Ordinary multi-character literals:");
    int mc1 = 'ab'; dump("'ab'", mc1);       // implementation-defined
    int mc2 = 'abc'; dump("'abc'", mc2);     // implementation-defined
 
    print("\n" "UTF-8 character literals:");
    char8_t C1 = u8'a'; dump("u8'a'", C1);
//  char8_t C2 = u8'¢'; dump("u8'¢'", C2);   // error: ¢ maps to two UTF-8 code units
//  char8_t C3 = u8'猫'; dump("u8'猫'", C3); // error: 猫 maps to three UTF-8 code units
//  char8_t C4 = u8'🍌'; dump("u8'🍌'", C4); // error: 🍌 maps to four UTF-8 code units
 
    print("\n" "UTF-16 character literals:");
    char16_t uc1 = u'a'; dump("u'a'", uc1);
    char16_t uc2 = u'¢'; dump("u'¢'", uc2);
    char16_t uc3 = u'猫'; dump("u'猫'", uc3);
//  char16_t uc4 = u'🍌'; dump("u'🍌'", uc4); // error: 🍌 maps to two UTF-16 code units
 
    print("\n" "UTF-32 character literals:");
    char32_t Uc1 = U'a'; dump("U'a'", Uc1);
    char32_t Uc2 = U'¢'; dump("U'¢'", Uc2);
    char32_t Uc3 = U'猫'; dump("U'猫'", Uc3);
    char32_t Uc4 = U'🍌'; dump("U'🍌'", Uc4);
 
    print("\n" "Wide character literals:");
    wchar_t wc1 = L'a'; dump("L'a'", wc1);
    wchar_t wc2 = L'¢'; dump("L'¢'", wc2);
    wchar_t wc3 = L'猫'; dump("L'猫'", wc3);
    wchar_t wc4 = L'🍌'; dump("L'🍌'", wc4);  // unsupported on Windows since C++23
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 912 | C++98 | non-encodable ordinary character literal was unspecified | specified as conditionally-supported |
| CWG 1024 | C++98 | multicharacter literal was required to be supported | made conditionally-supported |
| CWG 1656 | C++98 | the meaning of numeric escape sequencein a character literal was unclear | specified |
| P1854R4 | C++98 | non-encodable character literals were conditionally-supported | the program is ill-formed |

## See also
- [user-defined literals](/cpp/language/user_literal/)
- [C documentation](/c/language/character_constant/)
