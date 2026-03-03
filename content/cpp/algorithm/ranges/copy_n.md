---
title: "std::ranges::copy_n, std::ranges::copy_n_result"
source_path: "cpp/algorithm/ranges/copy_n"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Copies exactly n values from the range beginning at first to the range beginning at result by performing *(result + i) = *(first + i) for each integer in [0,n). The behavior is undefined if result is within the range [first,first + n) ([ranges::copy_backward](/cpp/algorithm/ranges/copy_backward/) might be used instead in this case).

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, std::weakly_incrementable O >
requires std::indirectly_copyable<I, O>
constexpr copy_n_result<I, O>
copy_n( I first, std::iter_difference_t<I> n, O result );
```
_(since C++20)_

```cpp
Helper type
```

```cpp
template< class I, class O >
using copy_n_result = ranges::in_out_result<I, O>;
```
_(since C++20)_

## Parameters
- `first`: the beginning of the range of elements to copy from
- `n`: number of the elements to copy
- `result`: the beginning of the destination range

## Return value
ranges::copy_n_result{first + n, result + n} or more formally, a value of type [ranges::in_out_result](/cpp/algorithm/ranges/return_types/in_out_result/) that contains an [std::input_iterator](/cpp/iterator/input_iterator/) iterator equals to [ranges::next](/cpp/iterator/ranges/next/)(first, n) and a [std::weakly_incrementable](/cpp/iterator/weakly_incrementable/) iterator equals to [ranges::next](/cpp/iterator/ranges/next/)(result, n).

## Notes
In practice, implementations of std::ranges::copy_n may avoid multiple assignments and use bulk copy functions such as [std::memmove](/cpp/string/byte/memmove/) if the value type is [TriviallyCopyable](/cpp/named_req/triviallycopyable/) and the iterator types satisfy [contiguous_iterator](/cpp/iterator/contiguous_iterator/). Alternatively, such copy acceleration can be injected during an optimization phase of a compiler.

When copying overlapping ranges, std::ranges::copy_n is appropriate when copying to the left (beginning of the destination range is outside the source range) while std::ranges::copy_backward is appropriate when copying to the right (end of the destination range is outside the source range).

## Example
```cpp
#include <algorithm>
#include <iomanip>
#include <iostream>
#include <iterator>
#include <string>
#include <string_view>
 
int main()
{
    const std::string_view in {"ABCDEFGH"};
    std::string out;
 
    std::ranges::copy_n(in.begin(), 4, std::back_inserter(out));
    std::cout << std::quoted(out) << '\n';
 
    out = "abcdefgh";
    const auto res = std::ranges::copy_n(in.begin(), 5, out.begin());
    std::cout
        << "*(res.in): '" << *(res.in) << "', distance: "
        << std::distance(std::begin(in), res.in) << '\n'
        << "*(res.out): '" << *(res.out) << "', distance: "
        << std::distance(std::begin(out), res.out) << '\n';
}
```

## See also
- [ranges::copyranges::copy_if](/cpp/algorithm/ranges/copy/)
- [ranges::copy_backward](/cpp/algorithm/ranges/copy_backward/)
- [ranges::remove_copyranges::remove_copy_if](/cpp/algorithm/ranges/remove_copy/)
- [ranges::replace_copyranges::replace_copy_if](/cpp/algorithm/ranges/replace_copy/)
- [ranges::reverse_copy](/cpp/algorithm/ranges/reverse_copy/)
- [ranges::rotate_copy](/cpp/algorithm/ranges/rotate_copy/)
- [ranges::unique_copy](/cpp/algorithm/ranges/unique_copy/)
- [ranges::move](/cpp/algorithm/ranges/move/)
- [ranges::move_backward](/cpp/algorithm/ranges/move_backward/)
- [copy_n](/cpp/algorithm/copy_n/)
