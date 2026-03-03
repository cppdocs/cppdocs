---
title: "std::lexicographical_compare_three_way"
source_path: "cpp/algorithm/lexicographical_compare_three_way"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Lexicographically compares two ranges [first1,last1) and [first2,last2) using three-way comparison and produces a result of the strongest applicable comparison category type.

## Declarations
```cpp
template< class InputIt1, class InputIt2, class Cmp >
constexpr auto lexicographical_compare_three_way
( InputIt1 first1, InputIt1 last1, InputIt2 first2, InputIt2 last2,
Cmp comp ) -> decltype(comp(*first1, *first2));
```
_(since C++20)_

```cpp
template< class InputIt1, class InputIt2 >
constexpr auto lexicographical_compare_three_way
( InputIt1 first1, InputIt1 last1, InputIt2 first2, InputIt2 last2 );
```
_(since C++20)_

## Parameters
- `first1, last1`: the first range of elements to examine
- `first2, last2`: the second range of elements to examine
- `comp`: a function object

## Return value
The value of a comparison category type specified above.

## Example
```cpp
#include <algorithm>
#include <cctype>
#include <compare>
#include <iomanip>
#include <iostream>
#include <string_view>
#include <utility>
 
using namespace std::literals;
 
void show_result(std::string_view s1, std::string_view s2, std::strong_ordering o)
{
    std::cout << std::quoted(s1) << " is ";
    std::is_lt(o) ? std::cout << "less than ":
    std::is_gt(o) ? std::cout << "greater than ":
                    std::cout << "equal to ";
    std::cout << std::quoted(s2) << '\n';
}
 
std::strong_ordering cmp_icase(unsigned char x, unsigned char y)
{
    return std::toupper(x) <=> std::toupper(y);
};
 
int main()
{
    for (const auto& [s1, s2] :
    {
        std::pair{"one"sv, "ONE"sv}, {"two"sv, "four"sv}, {"three"sv, "two"sv}
    })
    {
        const auto res = std::lexicographical_compare_three_way(
            s1.cbegin(), s1.cend(), s2.cbegin(), s2.cend(), cmp_icase);
        show_result(s1, s2, res);
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3410 | C++20 | extraneous comparisons between iterators were required | such requirement removed |

## See also
- [lexicographical_compare](/cpp/algorithm/lexicographical_compare/)
- [compare_three_way](/cpp/utility/compare/compare_three_way/)
- [ranges::lexicographical_compare](/cpp/algorithm/ranges/lexicographical_compare/)
