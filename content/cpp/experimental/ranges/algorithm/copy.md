---
title: "std::experimental::ranges::copy, std::experimental::ranges::copy_if"
source_path: "cpp/experimental/ranges/algorithm/copy"
header: "<experimental/ranges/algorithm>"
category: "experimental"
---

Copies elements in the source range ([first,last) or r) into the destination range beginning at result, starting from the first element in the source range and proceeding to the last one.

## Declarations
```cpp
template< InputIterator I, Sentinel<I> S, WeaklyIncrementable O >
requires IndirectlyCopyable<I, O>
ranges::tagged_pair<tag::in(I), tag::out(O)>
copy( I first, S last, O result );
```
_(ranges TS)_

```cpp
template< InputRange R, WeaklyIncrementable O >
requires IndirectlyCopyable<ranges::iterator_t<R>, O>
ranges::tagged_pair<tag::in(ranges::safe_iterator_t<R>), tag::out(O)>
copy( R&& r, O result );
```
_(ranges TS)_

```cpp
template< InputIterator I, Sentinel<I> S, WeaklyIncrementable O,
class Proj = ranges::identity,
IndirectUnaryPredicate<projected<I, Proj>> Pred >
requires IndirectlyCopyable<I, O>
ranges::tagged_pair<tag::in(I), tag::out(O)>
copy_if( I first, S last, O result, Pred pred, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< InputRange R, WeaklyIncrementable O,
class Proj = ranges::identity,
IndirectUnaryPredicate<projected<ranges::iterator_t<R>, Proj>> Pred >
requires IndirectlyCopyable<iterator_t<R>, O>
ranges::tagged_pair<tag::in(ranges::safe_iterator_t<R>), tag::out(O)>
copy_if( R&& r, O result, Pred pred, Proj proj = Proj{} );
```
_(ranges TS)_

## Parameters
- `first, last`: the range of elements to copy
- `r`: the range of elements to copy
- `result`: the beginning of the destination range
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
A tagged_pair object containing the following two members:

## Example
```cpp
#include <experimental/ranges/algorithm>
#include <experimental/ranges/iterator>
#include <iostream>
#include <numeric>
#include <vector>
 
int main()
{
    // see https://en.cppreference.com/w/cpp/language/namespace_alias
    namespace ranges = std::experimental::ranges;
 
    std::vector<int> from_vector(10);
    std::iota(from_vector.begin(), from_vector.end(), 0);
 
    std::vector<int> to_vector;
    ranges::copy_if(from_vector.begin(), from_vector.end(),
                    ranges::back_inserter(to_vector),
                    [](const auto i)
                    {
                       return i % 3;
                    });
// or, alternatively,
//  std::vector<int> to_vector(from_vector.size());
//  std::copy(from_vector, to_vector.begin());
 
    std::cout << "to_vector contains: ";
 
    ranges::copy(to_vector, ranges::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
}
```

## See also
- [copycopy_if](/cpp/algorithm/copy/)
