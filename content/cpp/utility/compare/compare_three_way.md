---
title: "std::compare_three_way"
source_path: "cpp/utility/compare/compare_three_way"
header: "<compare>"
category: "utility"
since: "C++20"
---

Function object for performing comparisons. Deduces the parameter types and the return type of the function call operator.

## Declarations
```cpp
struct compare_three_way;
```
_(since C++20)_

## Example
```cpp
#include <compare>
#include <iostream>
 
struct Rational
{
    int num;
    int den; // > 0
 
    // Although the comparison X <=> Y will work, a direct call
    // to std::compare_three_way{}(X, Y) requires the operator==
    // be defined, to satisfy the std::three_way_comparable_with.
    constexpr bool operator==(Rational const&) const = default;
};
 
constexpr std::weak_ordering operator<=>(Rational lhs, Rational rhs)
{
    return lhs.num * rhs.den <=> rhs.num * lhs.den;
}
 
void print(std::weak_ordering value)
{
    value < 0 ? std::cout << "less\n" :
    value > 0 ? std::cout << "greater\n" :
                std::cout << "equal\n";
}
 
int main()
{
    Rational a{6, 5};
    Rational b{8, 7};
    print(a <=> b);
    print(std::compare_three_way{}(a, b));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3530 | C++20 | syntactic checks were relaxed while comparing pointers | only semantic requirements are relaxed |

## See also
- [ranges::equal_to](/cpp/utility/functional/ranges/equal_to/)
- [ranges::not_equal_to](/cpp/utility/functional/ranges/not_equal_to/)
- [ranges::less](/cpp/utility/functional/ranges/less/)
- [ranges::greater](/cpp/utility/functional/ranges/greater/)
- [ranges::less_equal](/cpp/utility/functional/ranges/less_equal/)
- [ranges::greater_equal](/cpp/utility/functional/ranges/greater_equal/)
