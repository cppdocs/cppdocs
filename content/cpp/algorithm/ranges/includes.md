---
title: "std::ranges::includes"
source_path: "cpp/algorithm/ranges/includes"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Returns true if the projections of the sorted range [first2,last2) is a [subsequence](https://en.wikipedia.org/wiki/subsequence) of the projections of the sorted range [first1,last1).

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I1, std::sentinel_for<I1> S1,
std::input_iterator I2, std::sentinel_for<I2> S2,
class Proj1 = std::identity, class Proj2 = std::identity,
std::indirect_strict_weak_order<
std::projected<I1, Proj1>,
std::projected<I2, Proj2>> Comp = ranges::less >
constexpr bool
includes( I1 first1, S1 last1, I2 first2, S2 last2,
Comp comp = {}, Proj1 proj1 = {}, Proj2 proj2 = {} )
```
_(since C++20)_

```cpp
template< ranges::input_range R1, ranges::input_range R2,
class Proj1 = std::identity, class Proj2 = std::identity,
std::indirect_strict_weak_order<
std::projected<ranges::iterator_t<R1>, Proj1>,
std::projected<ranges::iterator_t<R2>, Proj2>> Comp = ranges::less >
constexpr bool
includes( R1&& r1, R2&& r2, Comp comp = {}, Proj1 proj1 = {}, Proj2 proj2 = {} )
```
_(since C++20)_

## Parameters
- `first1, last1`: the sorted range of elements to examine
- `r1`: the sorted range of elements to examine
- `first2, last2`: the sorted range of elements to search for
- `r2`: the sorted range of elements to search for
- `comp`: comparison function to apply to the projected elements
- `proj1`: projection to apply to the elements in the first range
- `proj2`: projection to apply to the elements in the second range

## Return value
true if [first2,last2) is a subsequence of [first1,last1); otherwise false.

## Example
```cpp
#include <algorithm>
#include <cctype>
#include <initializer_list>
#include <iomanip>
#include <iostream>
#include <locale>
#include <string>
 
template<class T>
std::ostream& operator<<(std::ostream& os, std::initializer_list<T> const& list)
{
    for (os << "{ "; auto const& elem : list)
        os << elem << ' ';
    return os << "} ";
}
 
struct true_false : std::numpunct<char>
{
    std::string do_truename() const { return "? Yes\n"; }
    std::string do_falsename() const { return "? No\n"; }
};
 
int main()
{
    std::cout.imbue(std::locale(std::cout.getloc(), new true_false));
 
    auto ignore_case = [](char a, char b) { return std::tolower(a) < std::tolower(b); };
 
    const auto
        a = {'a', 'b', 'c'},
        b = {'a', 'c'},
        c = {'a', 'a', 'b'},
        d = {'g'},
        e = {'a', 'c', 'g'},
        f = {'A', 'B', 'C'},
        z = {'a', 'b', 'c', 'f', 'h', 'x'};
 
    std::cout
        << z << "includes\n" << std::boolalpha
        << a << std::ranges::includes(z.begin(), z.end(), a.begin(), a.end())
        << b << std::ranges::includes(z, b)
        << c << std::ranges::includes(z, c)
        << d << std::ranges::includes(z, d)
        << e << std::ranges::includes(z, e)
        << f << std::ranges::includes(z, f, ignore_case);
}
```

## See also
- [ranges::set_difference](/cpp/algorithm/ranges/set_difference/)
- [ranges::search](/cpp/algorithm/ranges/search/)
- [ranges::containsranges::contains_subrange](/cpp/algorithm/ranges/contains/)
- [includes](/cpp/algorithm/includes/)
