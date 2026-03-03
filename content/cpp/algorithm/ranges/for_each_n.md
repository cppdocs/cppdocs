---
title: "std::ranges::for_each_n, std::ranges::for_each_n_result"
source_path: "cpp/algorithm/ranges/for_each_n"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Applies the given function object f to the projected result by proj of dereferencing each iterator in the range [first,first + n), in order.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, class Proj = std::identity,
std::indirectly_unary_invocable<std::projected<I, Proj>> Fun >
constexpr for_each_n_result<I, Fun>
for_each_n( I first, std::iter_difference_t<I> n, Fun f, Proj proj = {});
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I, class F >
using for_each_n_result = ranges::in_fun_result<I, F>;
```
_(since C++20)_

## Parameters
- `first`: iterator denoting the begin of the range to apply the function to
- `n`: the number of elements to apply the function to
- `f`: the function to apply to the projected range [first, first + n)
- `proj`: projection to apply to the elements

## Return value
An object {first + n, std::move(f)}, where first + n may be evaluated as std::[ranges::next](/cpp/iterator/ranges/next/)(std::move(first), n) depending on iterator category.

## Example
```cpp
#include <algorithm>
#include <array>
#include <iostream>
#include <ranges>
#include <string_view>
 
struct P
{
    int first;
    char second;
    friend std::ostream& operator<<(std::ostream& os, const P& p)
    {
        return os << '{' << p.first << ",'" << p.second << "'}";
    }
};
 
auto print = [](std::string_view name, auto const& v)
{
    std::cout << name << ": ";
    for (auto n = v.size(); const auto& e : v)
        std::cout << e << (--n ? ", " : "\n");
};
 
int main()
{
    std::array a {1, 2, 3, 4, 5};
    print("a", a);
    // Negate first three numbers:
    std::ranges::for_each_n(a.begin(), 3, [](auto& n) { n *= -1; });
    print("a", a);
 
    std::array s { P{1,'a'}, P{2, 'b'}, P{3, 'c'}, P{4, 'd'} };
    print("s", s);
    // Negate data members 'P::first' using projection:
    std::ranges::for_each_n(s.begin(), 2, [](auto& x) { x *= -1; }, &P::first);
    print("s", s);
    // Capitalize data members 'P::second' using projection:
    std::ranges::for_each_n(s.begin(), 3, [](auto& c) { c -= 'a'-'A'; }, &P::second);
    print("s", s);
}
```

## See also
- [range-for loop](/cpp/language/range-for/)
- [ranges::for_each](/cpp/algorithm/ranges/for_each/)
- [for_each_n](/cpp/algorithm/for_each_n/)
- [for_each](/cpp/algorithm/for_each/)
