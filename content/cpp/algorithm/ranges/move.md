---
title: "std::ranges::move, std::ranges::move_result"
source_path: "cpp/algorithm/ranges/move"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Moves the elements in the range, defined by [first,last), to another range beginning at result.
The behavior is undefined if result is within the range [first,last). In such a case, [ranges::move_backward](/cpp/algorithm/ranges/move_backward/) may be used instead.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, std::sentinel_for<I> S, std::weakly_incrementable O >
requires std::indirectly_movable<I, O>
constexpr move_result<I, O>
move( I first, S last, O result );
```
_(since C++20)_

```cpp
template< ranges::input_range R, std::weakly_incrementable O >
requires std::indirectly_movable<ranges::iterator_t<R>, O>
constexpr move_result<ranges::borrowed_iterator_t<R>, O>
move( R&& r, O result );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I, class O >
using move_result = ranges::in_out_result<I, O>;
```
_(since C++20)_

## Parameters
- `first`: the beginning of the range of elements to move
- `last`: the end of the range of elements to move
- `r`: the range of the elements to move
- `result`: the beginning of the destination range

## Return value
{last, result + N}, where

## Notes
When moving overlapping ranges, ranges::move is appropriate when moving to the left (beginning of the destination range is outside the source range) while [ranges::move_backward](/cpp/algorithm/ranges/move_backward/) is appropriate when moving to the right (end of the destination range is outside the source range).

## Example
```cpp
#include <algorithm>
#include <chrono>
#include <iostream>
#include <iterator>
#include <list>
#include <thread>
#include <vector>
using namespace std::literals::chrono_literals;
 
void f(std::chrono::milliseconds n)
{
    std::this_thread::sleep_for(n);
    std::cout << "thread with n=" << n.count() << "ms ended" << std::endl;
}
 
int main()
{
    std::vector<std::jthread> v;
    v.emplace_back(f, 400ms);
    v.emplace_back(f, 600ms);
    v.emplace_back(f, 800ms);
 
    std::list<std::jthread> l;
 
    // std::ranges::copy() would not compile, because std::jthread is non-copyable
    std::ranges::move(v, std::back_inserter(l));
}
```

## See also
- [ranges::move_backward](/cpp/algorithm/ranges/move_backward/)
- [ranges::copyranges::copy_if](/cpp/algorithm/ranges/copy/)
- [ranges::copy_backward](/cpp/algorithm/ranges/copy_backward/)
- [move](/cpp/algorithm/move/)
- [move](/cpp/utility/move/)
