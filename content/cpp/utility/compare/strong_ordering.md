---
title: "std::strong_ordering"
source_path: "cpp/utility/compare/strong_ordering"
header: "<compare>"
category: "utility"
since: "C++20"
---

The class type std::strong_ordering is the result type of a [three-way comparison](/cpp/language/operator_comparison/#Three-way_comparison) that:

## Declarations
```cpp
class strong_ordering;
```
_(since C++20)_

## Parameters
- `v, w`: std::strong_ordering values to check
- `u`: an unused parameter of any type that accepts literal zero argument

## Return value
std::partial_ordering::less if v is less,
std::partial_ordering::greater if v is greater,
std::partial_ordering::equivalent if v is equal or equivalent.

## Example
```cpp
#include <compare>
#include <iostream>
 
struct Point
{
    int x{}, y{};
 
    friend constexpr std::strong_ordering operator<=>(Point lhs, Point rhs)
    {
        if (lhs.x < rhs.x or (lhs.x == rhs.x and lhs.y < rhs.y))
            return std::strong_ordering::less;
        if (lhs.x > rhs.x or (lhs.x == rhs.x and lhs.y > rhs.y))
            return std::strong_ordering::greater;
        return std::strong_ordering::equivalent;
    }
 
    friend std::ostream& operator<<(std::ostream& os, Point s)
    {
        return os << '(' << s.x << ',' << s.y << ')';
    }
};
 
void print_three_way_comparison(const auto& p, const auto& q)
{
    const auto cmp{p <=> q};
    std::cout << p
              << (cmp < 0 ? " <  " : cmp > 0 ? " >  " : " == " ) // compares with 0
              << q << '\n';
}
 
void print_two_way_comparison(const auto& p, const auto& q)
{
    std::cout << p
              << (p < q ? " <  " : p > q ? " >  " : " == ") // compares p and q
              << q << '\n';
}
 
int main()
{
    const Point p1{0, 1}, p2{0, 1}, p3{0, 2};
 
    print_three_way_comparison(p1, p2);
    print_two_way_comparison(p1, p2);
 
    print_three_way_comparison(p2, p3);
    print_two_way_comparison(p2, p3);
 
    print_three_way_comparison(p3, p2);
    print_two_way_comparison(p3, p2);
}
```

## See also
- [weak_ordering](/cpp/utility/compare/weak_ordering/)
- [partial_ordering](/cpp/utility/compare/partial_ordering/)
