---
title: "C++ named requirements: LiteralType (since C++11)"
source_path: "cpp/named_req/LiteralType"
category: "named_req"
since: "C++11"
---

Specifies that a type is a literal type. Literal types are the types of [constexpr variables](/cpp/language/constexpr/#constexpr_variable) and they can be constructed, manipulated, and returned from [constexpr functions](/cpp/language/constexpr/#constexpr_function).

## Notes
A type can be literal even if all of its constexpr constructors are deleted, inaccessible, or cannot participate in overload resolution.

## Example
```cpp
#include <cstddef>
#include <iostream>
#include <stdexcept>
 
class conststr // conststr is a literal type
{
    const char* p;
    std::size_t sz;
public:
    template<std::size_t N>
    constexpr conststr(const char(&a)[N]) : p(a), sz(N - 1) {}
 
    constexpr char operator[](std::size_t n) const
    {
        return n < sz ? p[n] : throw std::out_of_range("");
    }
 
    constexpr std::size_t size() const { return sz; }
};
 
constexpr std::size_t count_lower(conststr s)
{
    std::size_t c{};
    for (std::size_t n{}; n != s.size(); ++n)
        if ('a' <= s[n] && s[n] <= 'z')
            ++c;
    return c;
}
 
// An output function that requires a compile-time constant N, for testing
template<int N>
struct constN
{
    constN() { std::cout << N << '\n'; }
};
 
int main()
{
    std::cout << "The number of lowercase letters in \"Hello, world!\" is ";
    constN<count_lower("Hello, world!")>(); // the string literal is implicitly
                                            // converted to conststr
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1453 | C++11 | a literal class could have volatile data members | not allowed |
| CWG 1951 | C++11C++14 | it was unclear whether cv-qualified void (C++14)and class types (C++11) are literal types | they are |
| CWG 2096 | C++11 | for a union type to be literal, all its non-static data members must be literal | only one non-static datamember needs to be |
| CWG 2598 | C++11 | for a union type to be literal, it must haveat least one non-static data member | it can have no non-static data member |

## See also
- [is_literal_type](/cpp/types/is_literal_type/)
