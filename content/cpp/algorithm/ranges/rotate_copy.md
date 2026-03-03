---
title: "std::ranges::rotate_copy, std::ranges::rotate_copy_result"
source_path: "cpp/algorithm/ranges/rotate_copy"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Copies the elements from the source range [first,last), to the destination range beginning at result in such a way, that the element *middle becomes the first element of the destination range and *(middle - 1) becomes the last element. The result is that the destination range contains a left rotated copy of the source range.

## Declarations
```cpp
Call signature
```

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S,
std::weakly_incrementable O >
requires std::indirectly_copyable<I, O>
constexpr rotate_copy_result<I, O>
rotate_copy( I first, I middle, S last, O result );
```
_(since C++20)_

```cpp
template< ranges::forward_range R, std::weakly_incrementable O >
requires std::indirectly_copyable<ranges::iterator_t<R>, O>
constexpr rotate_copy_result<ranges::borrowed_iterator_t<R>, O>
rotate_copy( R&& r, ranges::iterator_t<R> middle, O result );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I, class O >
using rotate_copy_result = in_out_result<I, O>;
```
_(since C++20)_

## Parameters
- `first, last`: the source range of elements to copy from
- `r`: the source range of elements to copy from
- `middle`: the iterator to the element that should appear at the beginning of the destination range
- `result`: beginning of the destination range

## Return value
{last, result + N}, where N = [ranges::distance](/cpp/iterator/ranges/distance/)(first, last).

## Notes
If the value type is [TriviallyCopyable](/cpp/named_req/triviallycopyable/) and the iterator types satisfy [contiguous_iterator](/cpp/iterator/contiguous_iterator/), implementations of ranges::rotate_copy usually avoid multiple assignments by using a "bulk copy" function such as [std::memmove](/cpp/string/byte/memmove/).

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    std::vector<int> src {1, 2, 3, 4, 5};
    std::vector<int> dest(src.size());
    auto pivot = std::ranges::find(src, 3);
 
    std::ranges::rotate_copy(src, pivot, dest.begin());
    for (int i : dest)
        std::cout << i << ' ';
    std::cout << '\n';
 
    // copy the rotation result directly to the std::cout
    pivot = std::ranges::find(dest, 1);
    std::ranges::rotate_copy(dest, pivot, std::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
}
```

## See also
- [ranges::rotate](/cpp/algorithm/ranges/rotate/)
- [ranges::copyranges::copy_if](/cpp/algorithm/ranges/copy/)
- [rotate_copy](/cpp/algorithm/rotate_copy/)
