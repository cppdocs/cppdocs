---
title: "std::experimental::ranges::all_of, std::experimental::ranges::any_of, std::experimental::ranges::none_of"
source_path: "cpp/experimental/ranges/algorithm/all_any_none_of"
header: "<experimental/ranges/algorithm>"
category: "experimental"
---

1) Checks if unary predicate pred returns true for all elements in the range [first,last).

## Declarations
```cpp
template< InputIterator I, Sentinel<I> S, class Proj = ranges::identity,
IndirectUnaryPredicate<projected<I, Proj>> Pred >
bool all_of( I first, S last, Pred pred, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< InputRange R, class Proj = ranges::identity,
IndirectUnaryPredicate<projected<ranges::iterator_t<R>, Proj>> Pred >
bool all_of( R&& r, Pred pred, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< InputIterator I, Sentinel<I> S, class Proj = ranges::identity,
IndirectUnaryPredicate<projected<I, Proj>> Pred >
bool any_of( I first, S last, Pred pred, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< InputRange R, class Proj = ranges::identity,
IndirectUnaryPredicate<projected<ranges::iterator_t<R>, Proj>> Pred >
bool any_of( R&& r, Pred pred, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< InputIterator I, Sentinel<I> S, class Proj = identity,
IndirectUnaryPredicate<projected<I, Proj>> Pred >
bool none_of( I first, S last, Pred pred, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< InputRange R, class Proj = ranges::identity,
IndirectUnaryPredicate<projected<ranges::iterator_t<R>, Proj>> Pred >
bool none_of( R&& r, Pred pred, Proj proj = Proj{} );
```
_(ranges TS)_

## Parameters
- `first, last`: the range of the elements to examine
- `r`: the range of the elements to examine
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Example
```cpp
#include <experimental/ranges/algorithm>
#include <experimental/ranges/iterator>
#include <functional>
#include <iostream>
#include <iterator>
#include <numeric>
#include <vector>
 
namespace ranges = std::experimental::ranges;
 
int main()
{
    std::vector<int> v(10, 2);
    std::partial_sum(v.cbegin(), v.cend(), v.begin());
    std::cout << "Among the numbers: ";
    ranges::copy(v, ranges::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
 
    if (ranges::all_of(v.cbegin(), v.cend(), [](int i) { return i % 2 == 0; }))
        std::cout << "All numbers are even\n";
    if (ranges::none_of(v, std::bind(std::modulus<int>(), std::placeholders::_1, 2)))
        std::cout << "None of them are odd\n";
 
    struct DivisibleBy
    {
        const int d;
        DivisibleBy(int n) : d(n) {}
        bool operator()(int n) const { return n % d == 0; }
    };
 
    if (ranges::any_of(v, DivisibleBy(7)))
        std::cout << "At least one number is divisible by 7\n";
}
```

## See also
- [all_ofany_ofnone_of](/cpp/algorithm/all_any_none_of/)
