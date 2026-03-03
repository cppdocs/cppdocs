---
title: "std::ranges::for_each, std::ranges::for_each_result"
source_path: "cpp/algorithm/ranges/for_each"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Applies the given function object f to the result of the value projected by each iterator in the range [first,last), in order.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, std::sentinel_for<I> S, class Proj = std::identity,
std::indirectly_unary_invocable<std::projected<I, Proj>> Fun >
constexpr for_each_result<I, Fun>
for_each( I first, S last, Fun f, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R, class Proj = std::identity,
std::indirectly_unary_invocable<
std::projected<ranges::iterator_t<R>, Proj>> Fun >
constexpr for_each_result<ranges::borrowed_iterator_t<R>, Fun>
for_each( R&& r, Fun f, Proj proj = {} );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I, class F >
using for_each_result = ranges::in_fun_result<I, F>;
```
_(since C++20)_

## Parameters
- `first, last`: iterator-sentinel pair denoting the range to apply the function to
- `r`: the range of elements to apply the function to
- `f`: the function to apply to the projected range
- `proj`: projection to apply to the elements

## Return value
{std::[ranges::next](/cpp/iterator/ranges/next/)(std::move(first), last), std::move(f)}

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <iostream>
#include <string>
#include <utility>
#include <vector>
 
struct Sum
{
    void operator()(int n) { sum += n; }
    int sum {0};
};
 
int main()
{
    std::vector<int> nums {3, 4, 2, 8, 15, 267};
 
    auto print = [](const auto& n) { std::cout << ' ' << n; };
 
    namespace ranges = std::ranges;
    std::cout << "before:";
    ranges::for_each(std::as_const(nums), print);
    print('\n');
 
    ranges::for_each(nums, [](int& n) { ++n; });
 
    // calls Sum::operator() for each number
    auto [i, s] = ranges::for_each(nums.begin(), nums.end(), Sum());
    assert(i == nums.end());
 
    std::cout << "after: ";
    ranges::for_each(nums.cbegin(), nums.cend(), print);
 
    std::cout << "\n" "sum: " << s.sum << '\n';
 
    using pair = std::pair<int, std::string>; 
    std::vector<pair> pairs {{1,"one"}, {2,"two"}, {3,"tree"}};
 
    std::cout << "project the pair::first: ";
    ranges::for_each(pairs, print, [](const pair& p) { return p.first; });
 
    std::cout << "\n" "project the pair::second:";
    ranges::for_each(pairs, print, &pair::second);
    print('\n');
}
```

## See also
- [range-for loop](/cpp/language/range-for/)
- [ranges::transform](/cpp/algorithm/ranges/transform/)
- [ranges::for_each_n](/cpp/algorithm/ranges/for_each_n/)
- [for_each](/cpp/algorithm/for_each/)
