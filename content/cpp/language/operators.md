---
title: "operator overloading"
source_path: "cpp/language/operator"
url: "/cpp/language/operator/"
aliases:
  - "/cpp/language/operators/"
category: "language"
---

Customizes the C++ operators for operands of user-defined types.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_static_call_operator
202207L
(C++23)
static operator()
__cpp_multidimensional_subscript
202211L
(C++23)
static operator[]

## Example
```cpp
#include <iostream>
 
class Fraction
{
    // or C++17's std::gcd
    constexpr int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }
 
    int n, d;
public:
    constexpr Fraction(int n, int d = 1) : n(n / gcd(n, d)), d(d / gcd(n, d)) {}
 
    constexpr int num() const { return n; }
    constexpr int den() const { return d; }
 
    constexpr Fraction& operator*=(const Fraction& rhs)
    {
        int new_n = n * rhs.n / gcd(n * rhs.n, d * rhs.d);
        d = d * rhs.d / gcd(n * rhs.n, d * rhs.d);
        n = new_n;
        return *this;
    }
};
 
std::ostream& operator<<(std::ostream& out, const Fraction& f)
{
   return out << f.num() << '/' << f.den();
}
 
constexpr bool operator==(const Fraction& lhs, const Fraction& rhs)
{
    return lhs.num() == rhs.num() && lhs.den() == rhs.den();
}
 
constexpr bool operator!=(const Fraction& lhs, const Fraction& rhs)
{
    return !(lhs == rhs);
}
 
constexpr Fraction operator*(Fraction lhs, const Fraction& rhs)
{
    return lhs *= rhs;
}
 
int main()
{
    constexpr Fraction f1{3, 8}, f2{1, 2}, f3{10, 2};
    std::cout << f1 << " * " << f2 << " = " << f1 * f2 << '\n'
              << f2 << " * " << f3 << " = " << f2 * f3 << '\n'
              <<  2 << " * " << f1 << " = " <<  2 * f1 << '\n';
    static_assert(f3 == f2 * 10);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1481 | C++98 | the non-member prefix increment operator could only have a parameterof class type, enumeration type, or a reference type to such types | no type requirement |
| CWG 2931 | C++23 | explicit object member operator functions could only have no parameterof class type, enumeration type, or a reference type to such types | prohibited |

## See also
- [Operator precedence](/cpp/language/operator_precedence/)
- [Alternative operator syntax](/cpp/language/operator_alternative/)
- [Argument-dependent lookup](/cpp/language/adl/)
- [assignment](/cpp/language/operator_assignment/)
- [incrementdecrement](/cpp/language/operator_incdec/)
- [arithmetic](/cpp/language/operator_arithmetic/)
- [logical](/cpp/language/operator_logical/)
- [comparison](/cpp/language/operator_comparison/)
- [memberaccess](/cpp/language/operator_member_access/)
- [other](/cpp/language/operator_other/)
- [static_cast](/cpp/language/static_cast/)
- [dynamic_cast](/cpp/language/dynamic_cast/)
- [const_cast](/cpp/language/const_cast/)
- [cv](/cpp/language/cv/)
- [reinterpret_cast](/cpp/language/reinterpret_cast/)
- [C-style cast](/cpp/language/explicit_cast/)
- [new](/cpp/language/new/)
- [delete](/cpp/language/delete/)
- [sizeof](/cpp/language/sizeof/)
- [sizeof...](/cpp/language/sizeof.../)
- [pack](/cpp/language/parameter_pack/)
- [typeid](/cpp/language/typeid/)
- [noexcept](/cpp/language/noexcept/)
- [alignof](/cpp/language/alignof/)
