---
title: "std::compare_weak_order_fallback"
source_path: "cpp/utility/compare/compare_weak_order_fallback"
header: "<compare>"
category: "utility"
since: "C++20"
---

Performs three-way comparison on [subexpressions](/cpp/language/expressions/#Full-expressions) t and u and produces a result of type [std::weak_ordering](/cpp/utility/compare/weak_ordering/), even if the operator <=> is unavailable.

## Declarations
```cpp
inline namespace /* unspecified */ {
inline constexpr /* unspecified */
compare_weak_order_fallback = /* unspecified */;
}
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< class T, class U >
requires /* see below */
constexpr std::weak_ordering
compare_weak_order_fallback( T&& t, U&& u ) noexcept(/* see below */);
```
_(since C++20)_

## Example
```cpp
#include <compare>
#include <iostream>
 
// does not support <=>
struct Rational_1
{
    int num;
    int den; // > 0
};
 
inline constexpr bool operator<(Rational_1 lhs, Rational_1 rhs)
{
    return lhs.num * rhs.den < rhs.num * lhs.den;
}
 
inline constexpr bool operator==(Rational_1 lhs, Rational_1 rhs)
{
    return lhs.num * rhs.den == rhs.num * lhs.den;
}
 
// supports <=>
struct Rational_2
{
    int num;
    int den; // > 0
};
 
inline constexpr std::weak_ordering operator<=>(Rational_2 lhs, Rational_2 rhs)
{
    return lhs.num * rhs.den <=> rhs.num * lhs.den;
}
 
inline constexpr bool operator==(Rational_2 lhs, Rational_2 rhs)
{
    return lhs <=> rhs == 0;
}
 
void print(int id, std::weak_ordering value)
{
    std::cout << id << ") ";
    if (value == 0)
        std::cout << "equal\n";
    else if (value < 0)
        std::cout << "less\n";
    else
        std::cout << "greater\n";
}
 
int main()
{
    Rational_1 a{1, 2}, b{3, 4};
//  print(0, a <=> b); // does not work
    print(1, std::compare_weak_order_fallback(a, b)); // works, defaults to < and ==
 
    Rational_2 c{6, 5}, d{8, 7};
    print(2, c <=> d); // works
    print(3, std::compare_weak_order_fallback(c, d)); // works
 
    Rational_2 e{2, 3}, f{4, 6};
    print(4, e <=> f); // works
    print(5, std::compare_weak_order_fallback(e, f)); // works
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2114(P2167R3) | C++20 | the fallback mechanism only requiredreturn types to be convertible to bool | constraints strengthened |

## See also
- [weak_order](/cpp/utility/compare/weak_order/)
