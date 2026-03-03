---
title: "std::ranges::move_backward, std::ranges::move_backward_result"
source_path: "cpp/algorithm/ranges/move_backward"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Moves the elements in the range, defined by [first,last), to another range [result - N,result), where N = [ranges::distance](/cpp/iterator/ranges/distance/)(first, last). The elements are moved in reverse order (the last element is moved first), but their relative order is preserved. The behavior is undefined if result is within (first, last]. In such a case, [ranges::move](/cpp/algorithm/ranges/move/) may be used instead.

## Declarations
```cpp
Call signature
```

```cpp
template< std::bidirectional_iterator I1, std::sentinel_for<I1> S1,
std::bidirectional_iterator I2 >
requires std::indirectly_movable<I1, I2>
constexpr move_backward_result<I1, I2>
move_backward( I1 first, S1 last, I2 result );
```
_(since C++20)_

```cpp
template< ranges::bidirectional_range R, std::bidirectional_iterator I >
requires std::indirectly_movable<ranges::iterator_t<R>, I>
constexpr move_backward_result<ranges::borrowed_iterator_t<R>, I>
move_backward( R&& r, I result );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I, class O >
using move_backward_result = ranges::in_out_result<I, O>;
```
_(since C++20)_

## Parameters
- `first`: the beginning of the range of elements to move
- `last`: the end of the range of elements to move
- `r`: the range of the elements to move
- `result`: the end of the destination range

## Return value
{last, result - N}.

## Notes
When moving overlapping ranges, [ranges::move](/cpp/algorithm/ranges/move/) is appropriate when moving to the left (beginning of the destination range is outside the source range) while ranges::move_backward is appropriate when moving to the right (end of the destination range is outside the source range).

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <string_view>
#include <vector>
 
using Vec = std::vector<std::string>;
 
void print(std::string_view rem, Vec const& vec)
{
    std::cout << rem << "[" << vec.size() << "]: ";
    for (const std::string& s : vec)
        std::cout << (s.size() ? s : std::string{"·"}) << ' ';
    std::cout << '\n';
}
 
int main()
{
    Vec a{"▁", "▂", "▃", "▄", "▅", "▆", "▇", "█"};
    Vec b(a.size());
 
    print("Before move:\n" "a", a);
    print("b", b);
 
    std::ranges::move_backward(a, b.end());
 
    print("\n" "Move a >> b:\n" "a", a);
    print("b", b);
 
    std::ranges::move_backward(b.begin(), b.end(), a.end());
    print("\n" "Move b >> a:\n" "a", a);
    print("b", b);
 
    std::ranges::move_backward(a.begin(), a.begin()+3, a.end());
    print("\n" "Overlapping move a[0, 3) >> a[5, 8):\n" "a", a);
}
```

## See also
- [ranges::move](/cpp/algorithm/ranges/move/)
- [ranges::copyranges::copy_if](/cpp/algorithm/ranges/copy/)
- [ranges::copy_backward](/cpp/algorithm/ranges/copy_backward/)
- [move](/cpp/algorithm/move/)
- [move](/cpp/utility/move/)
