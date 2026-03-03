---
title: "std::ranges::copy_backward, std::ranges::copy_backward_result"
source_path: "cpp/algorithm/ranges/copy_backward"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Copies the elements from the range, defined by [first,last), to another range [result - N,result), where N = [ranges::distance](/cpp/iterator/ranges/distance/)(first, last). The elements are copied in reverse order (the last element is copied first), but their relative order is preserved. The behavior is undefined if result is within (first, last]. In such a case std::[ranges::copy](http://en.cppreference.com/w/cpp/ranges-algorithm-placeholder/copy) can be used instead.

## Declarations
```cpp
Call signature
```

```cpp
template< std::bidirectional_iterator I1, std::sentinel_for<I1> S1,
std::bidirectional_iterator I2 >
requires std::indirectly_copyable<I1, I2>
constexpr copy_backward_result<I1, I2>
copy_backward( I1 first, S1 last, I2 result );
```
_(since C++20)_

```cpp
template< ranges::bidirectional_range R, std::bidirectional_iterator I >
requires std::indirectly_copyable<ranges::iterator_t<R>, I>
constexpr copy_backward_result<ranges::borrowed_iterator_t<R>, I>
copy_backward( R&& r, I result );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I1, class I2 >
using copy_backward_result = ranges::in_out_result<I1, I2>;
```
_(since C++20)_

## Parameters
- `first`: the beginning of the range of elements to copy from
- `last`: the end of the range of elements to copy from
- `r`: the range of the elements to copy from
- `result`: the end of the destination range

## Return value
{last, result - N}

## Notes
When copying overlapping ranges, [ranges::copy](/cpp/algorithm/ranges/copy/) is appropriate when copying to the left (beginning of the destination range is outside the source range) while ranges::copy_backward is appropriate when copying to the right (end of the destination range is outside the source range).

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <ranges>
#include <string_view>
#include <vector>
 
void print(std::string_view rem, std::ranges::forward_range auto const& r)
{
    for (std::cout << rem << ": "; auto const& elem : r)
        std::cout << elem << ' ';
    std::cout << '\n';
}
 
int main()
{
    const auto src = {1, 2, 3, 4};
    print("src", src);
 
    std::vector<int> dst(src.size() + 2);
    std::ranges::copy_backward(src, dst.end());
    print("dst", dst);
 
    std::ranges::fill(dst, 0);
    const auto [in, out] =
        std::ranges::copy_backward(src.begin(), src.end() - 2, dst.end());
    print("dst", dst);
 
    std::cout
        << "(in - src.begin) == " << std::distance(src.begin(), in) << '\n'
        << "(out - dst.begin) == " << std::distance(dst.begin(), out) << '\n';
}
```

## See also
- [ranges::copyranges::copy_if](/cpp/algorithm/ranges/copy/)
- [ranges::copy_n](/cpp/algorithm/ranges/copy_n/)
- [ranges::remove_copyranges::remove_copy_if](/cpp/algorithm/ranges/remove_copy/)
- [ranges::replace_copyranges::replace_copy_if](/cpp/algorithm/ranges/replace_copy/)
- [ranges::reverse_copy](/cpp/algorithm/ranges/reverse_copy/)
- [ranges::rotate_copy](/cpp/algorithm/ranges/rotate_copy/)
- [ranges::unique_copy](/cpp/algorithm/ranges/unique_copy/)
- [ranges::move](/cpp/algorithm/ranges/move/)
- [ranges::move_backward](/cpp/algorithm/ranges/move_backward/)
- [copy_backward](/cpp/algorithm/copy_backward/)
