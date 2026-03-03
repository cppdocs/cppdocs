---
title: "Enumeration declaration"
source_path: "cpp/language/enum"
category: "language"
since: "C++11"
---

An enumeration is a distinct type whose value is restricted to a range of values (see below for details), which may include several explicitly named constants ("enumerators").

## Notes
Values of unscoped enumeration type can be [promoted](/cpp/language/implicit_cast/#Promotion_from_enumeration_types) or [converted](/cpp/language/implicit_cast/#Integral_conversions) to integral types:

Values of integer, floating-point, and enumeration types can be converted to any enumeration type by using [static_cast](/cpp/language/static_cast/). Note that the value after such conversion may not necessarily equal any of the named enumerators defined for the enumeration:

## Example
```cpp
#include <cstdint>
#include <iostream>
 
// enum that takes 16 bits
enum smallenum: std::int16_t
{
    a,
    b,
    c
};
 
// color may be red (value 0), yellow (value 1), green (value 20), or blue (value 21)
enum color
{
    red,
    yellow,
    green = 20,
    blue
};
 
// altitude may be altitude::high or altitude::low
enum class altitude: char
{
    high = 'h',
    low = 'l', // trailing comma only allowed after CWG 518
}; 
 
// the constant d is 0, the constant e is 1, the constant f is 3
enum
{
    d,
    e,
    f = e + 2
};
 
// enumeration types (both scoped and unscoped) can have overloaded operators
std::ostream& operator<<(std::ostream& os, color c)
{
    switch(c)
    {
        case red   : os << "red";    break;
        case yellow: os << "yellow"; break;
        case green : os << "green";  break;
        case blue  : os << "blue";   break;
        default    : os.setstate(std::ios_base::failbit);
    }
    return os;
}
 
std::ostream& operator<<(std::ostream& os, altitude al)
{
    return os << static_cast<char>(al);
}
 
// The scoped enum (C++11) can be partially emulated in earlier C++ revisions:
 
enum struct E11 { x, y }; // since C++11
 
struct E98 { enum { x, y }; }; // OK in pre-C++11
 
namespace N98 { enum { x, y }; } // OK in pre-C++11
 
struct S98 { static const int x = 0, y = 1; }; // OK in pre-C++11
 
void emu()
{
    std::cout << (static_cast<int>(E11::y) + E98::y + N98::y + S98::y) << '\n'; // 4
}
 
namespace cxx20
{
    enum class long_long_long_name { x, y };
 
    void using_enum_demo()
    {
        std::cout << "C++20 `using enum`: __cpp_using_enum == ";
        switch (auto rnd = []{return long_long_long_name::x;}; rnd())
        {
#if defined(__cpp_using_enum)
            using enum long_long_long_name;
            case x: std::cout << __cpp_using_enum << "; x\n"; break;
            case y: std::cout << __cpp_using_enum << "; y\n"; break;
#else
            case long_long_long_name::x: std::cout << "?; x\n"; break;
            case long_long_long_name::y: std::cout << "?; y\n"; break;
#endif
        }
    }
}
 
int main()
{
    color col = red;
    altitude a;
    a = altitude::low;
 
    std::cout << "col = " << col << '\n'
              << "a = "   << a   << '\n'
              << "f = "   << f   << '\n';
 
    cxx20::using_enum_demo();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 377 | C++98 | the behavior was unspecified when no integraltype can represent all the enumerator values | the enumeration is ill-formed in this case |
| CWG 518 | C++98 | a trailing comma was not allowed after the enumerator list | allowed |
| CWG 1514 | C++11 | a redefinition of enumeration with fixed underlying typecould be parsed as a bit-field in a class member declaration | always parsed as a redefinition |
| CWG 1638 | C++11 | grammar of opaque enumeration declarationprohibited use for template specializations | nested-name-specifierpermitted |
| CWG 1766 | C++98 | casting an out-of-range value to an enumerationwithout fixed underlying type had an unspecified result | the behavior is undefined |
| CWG 1966 | C++11 | the resolution of CWG issue 1514 made the :of a conditional expression part of enum-base | only apply the resolution tomember declaration specifiers |
| CWG 2156 | C++11 | enum definitions could defineenumeration types by using-declarations | prohibited |
| CWG 2157 | C++11 | the resolution of CWG issue 1966 didnot cover qualified enumeration names | covered |
| CWG 2530 | C++98 | an enumerator list could contain multipleenumerators with the same identifier | prohibited |
| CWG 2590 | C++98 | the size, value representation and alignment requirementsof an enumeration did not depend on its underlying type | all of them are identical tothose of the underlying type |
| CWG 2621 | C++20 | the enumeration name lookup used inusing enum declarations was unclear | made clear |
| CWG 2877 | C++20 | the enumeration name lookup used inusing enum declarations was not type-only | made type-only |

## See also
- [is_enum](/cpp/types/is_enum/)
- [is_scoped_enum](/cpp/types/is_scoped_enum/)
- [underlying_type](/cpp/types/underlying_type/)
- [to_underlying](/cpp/utility/to_underlying/)
- [C documentation](/c/language/enum/)
