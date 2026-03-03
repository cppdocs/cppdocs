---
title: "std::char_traits"
source_path: "cpp/string/char_traits"
header: "<string>"
category: "string"
---

The char_traits class is a traits class template that abstracts basic character and string operations for a given character type. The defined operation set is such that generic algorithms almost always can be implemented in terms of it. It is thus possible to use such algorithms with almost any possible character or string type, just by supplying a customized char_traits class.

## Declarations
```cpp
template<
class CharT
> class char_traits;
```

## Notes
[CharTraits](/cpp/named_req/chartraits/) does not require defining the types and functions listed above as direct members, it only requires types like X::type and expressions like X::func(args) are valid and have the required semantics. Users-defined character traits can be derived from other character traits classes and only override some of their members, see the example below.

## Example
```cpp
#include <cctype>
#include <iostream>
#include <string>
#include <string_view>
 
struct ci_char_traits : public std::char_traits<char>
{
    static char to_upper(char ch)
    {
        return std::toupper((unsigned char) ch);
    }
 
    static bool eq(char c1, char c2)
    {
        return to_upper(c1) == to_upper(c2);
    }
 
    static bool lt(char c1, char c2)
    {
         return to_upper(c1) < to_upper(c2);
    }
 
    static int compare(const char* s1, const char* s2, std::size_t n)
    {
        while (n-- != 0)
        {
            if (to_upper(*s1) < to_upper(*s2))
                return -1;
            if (to_upper(*s1) > to_upper(*s2))
                return 1;
            ++s1;
            ++s2;
        }
        return 0;
    }
 
    static const char* find(const char* s, std::size_t n, char a)
    {
        const auto ua{to_upper(a)};
        while (n-- != 0) 
        {
            if (to_upper(*s) == ua)
                return s;
            s++;
        }
        return nullptr;
    }
};
 
template<class DstTraits, class CharT, class SrcTraits>
constexpr std::basic_string_view<CharT, DstTraits>
    traits_cast(const std::basic_string_view<CharT, SrcTraits> src) noexcept
{
    return {src.data(), src.size()};
}
 
int main()
{
    using namespace std::literals;
 
    constexpr auto s1 = "Hello"sv;
    constexpr auto s2 = "heLLo"sv;
 
    if (traits_cast<ci_char_traits>(s1) == traits_cast<ci_char_traits>(s2))
        std::cout << s1 << " and " << s2 << " are equal\n";
}
```

## See also
- [basic_string](/cpp/string/basic_string/)
- [basic_string_view](/cpp/string/basic_string_view/)
- [basic_istream](/cpp/io/basic_istream/)
- [std::basic_streambuf](/cpp/io/basic_streambuf/)
- [basic_ostream](/cpp/io/basic_ostream/)
- [std::basic_streambuf](/cpp/io/basic_streambuf/)
- [basic_streambuf](/cpp/io/basic_streambuf/)
