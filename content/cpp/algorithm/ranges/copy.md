---
title: "std::ranges::copy, std::ranges::copy_if, std::ranges::copy_result, std::ranges::copy_if_result"
source_path: "cpp/algorithm/ranges/copy"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Copies the elements in the range, defined by [first,last), to another range beginning at result.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, std::sentinel_for<I> S, std::weakly_incrementable O >
requires std::indirectly_copyable<I, O>
constexpr copy_result<I, O>
copy( I first, S last, O result );
```
_(since C++20)_

```cpp
template< ranges::input_range R, std::weakly_incrementable O >
requires std::indirectly_copyable<ranges::iterator_t<R>, O>
constexpr copy_result<ranges::borrowed_iterator_t<R>, O>
copy( R&& r, O result );
```
_(since C++20)_

```cpp
template< std::input_iterator I, std::sentinel_for<I> S, std::weakly_incrementable O,
class Proj = std::identity,
std::indirect_unary_predicate<std::projected<I, Proj>> Pred >
requires std::indirectly_copyable<I, O>
constexpr copy_if_result<I, O>
copy_if( I first, S last, O result, Pred pred, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R, std::weakly_incrementable O,
class Proj = std::identity,
std::indirect_unary_predicate<
std::projected<ranges::iterator_t<R>, Proj>> Pred >
requires std::indirectly_copyable<ranges::iterator_t<R>, O>
constexpr copy_if_result<ranges::borrowed_iterator_t<R>, O>
copy_if( R&& r, O result, Pred pred, Proj proj = {} );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I, class O >
using copy_result = ranges::in_out_result<I, O>;
```
_(since C++20)_

```cpp
template< class I, class O >
using copy_if_result = ranges::in_out_result<I, O>;
```
_(since C++20)_

## Parameters
- `first, last`: the range of elements to copy
- `r`: the range of elements to copy
- `result`: the beginning of the destination range.
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
A [ranges::in_out_result](/cpp/algorithm/ranges/return_types/in_out_result/) containing an input iterator equal to last and an output iterator past the last element copied.

## Notes
In practice, implementations of ranges::copy avoid multiple assignments and use bulk copy functions such as [std::memmove](/cpp/string/byte/memmove/) if the value type is [TriviallyCopyable](/cpp/named_req/triviallycopyable/) and the iterator types satisfy [contiguous_iterator](/cpp/iterator/contiguous_iterator/).

When copying overlapping ranges, ranges::copy is appropriate when copying to the left (beginning of the destination range is outside the source range) while [ranges::copy_backward](/cpp/algorithm/ranges/copy_backward/) is appropriate when copying to the right (end of the destination range is outside the source range).

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <numeric>
#include <vector>
 
int main()
{
    std::vector<int> source(10);
    std::iota(source.begin(), source.end(), 0);
 
    std::vector<int> destination;
 
    std::ranges::copy(source.begin(), source.end(),
                      std::back_inserter(destination));
// or, alternatively,
//  std::vector<int> destination(source.size());
//  std::ranges::copy(source.begin(), source.end(), destination.begin());
// either way is equivalent to
//  std::vector<int> destination = source;
 
    std::cout << "destination contains: ";
 
    std::ranges::copy(destination, std::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
 
    std::cout << "odd numbers in destination are: ";
 
    std::ranges::copy_if(destination, std::ostream_iterator<int>(std::cout, " "),
                         [](int x) { return (x % 2) == 1; });
    std::cout << '\n';
}
```

## See also
- [ranges::copy_backward](/cpp/algorithm/ranges/copy_backward/)
- [ranges::reverse_copy](/cpp/algorithm/ranges/reverse_copy/)
- [ranges::copy_n](/cpp/algorithm/ranges/copy_n/)
- [ranges::fill](/cpp/algorithm/ranges/fill/)
- [ranges::remove_copyranges::remove_copy_if](/cpp/algorithm/ranges/remove_copy/)
- [copycopy_if](/cpp/algorithm/copy/)
