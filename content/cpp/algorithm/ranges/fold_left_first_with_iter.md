---
title: "std::ranges::fold_left_first_with_iter, std::ranges::fold_left_first_with_iter_result"
source_path: "cpp/algorithm/ranges/fold_left_first_with_iter"
header: "<algorithm>"
category: "algorithm"
since: "C++23"
---

Left-[folds](https://en.wikipedia.org/wiki/Fold_(higher-order_function)) the elements of given range, that is, returns the result of evaluation of the chain expression:f(f(f(f(x1, x2), x3), ...), xn), where x1, x2, ..., xn are elements of the range.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
/*indirectly-binary-left-foldable*/<std::iter_value_t<I>, I> F >
requires std::constructible_from<
std::iter_value_t<I>, std::iter_reference_t<I>>
constexpr /* see description */
fold_left_first_with_iter( I first, S last, F f );
```
_(since C++23)_

```cpp
template< ranges::input_range R,
/*indirectly-binary-left-foldable*/<
ranges::range_value_t<R>, ranges::iterator_t<R>> F >
requires std::constructible_from<
ranges::range_value_t<R>, ranges::range_reference_t<R>>
constexpr /* see description */
fold_left_first_with_iter( R&& r, F f );
```
_(since C++23)_

```cpp
Helper concepts
```

```cpp
template< class F, class T, class I >
concept /*indirectly-binary-left-foldable*/ = /* see description */;
```
_(exposition only*)_

```cpp
Helper class template
```

```cpp
template< class I, class T >
using fold_left_first_with_iter_result = ranges::in_value_result<I, T>;
```
_(since C++23)_

## Parameters
- `first, last`: the range of elements to fold
- `r`: the range of elements to fold
- `f`: the binary function object

## Return value
Let U be decltype([ranges::fold_left](/cpp/algorithm/ranges/fold_left/)(std::move(first), last, [std::iter_value_t](/cpp/iterator/iter_t/)<I>(*first), f)).

## Notes
The following table compares all constrained folding algorithms:

(1) [ranges::in_value_result](/cpp/algorithm/ranges/return_types/in_value_result/)<I, U>

(2) [ranges::in_value_result](/cpp/algorithm/ranges/return_types/in_value_result/)<BR, U>,

where BR is [ranges::borrowed_iterator_t](/cpp/ranges/borrowed_iterator_t/)<R>

(1) [ranges::in_value_result](/cpp/algorithm/ranges/return_types/in_value_result/)<I, [std::optional](/cpp/utility/optional/)<U>>

(2) [ranges::in_value_result](/cpp/algorithm/ranges/return_types/in_value_result/)<BR, [std::optional](/cpp/utility/optional/)<U>>

where BR is [ranges::borrowed_iterator_t](/cpp/ranges/borrowed_iterator_t/)<R>

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <functional>
#include <iostream>
#include <ranges>
#include <utility>
#include <vector>
 
int main()
{
    std::vector v{1, 2, 3, 4, 5, 6, 7, 8};
 
    auto sum = std::ranges::fold_left_first_with_iter
    (
        v.begin(), v.end(), std::plus<int>()
    );
    std::cout << "sum: " << sum.value.value() << '\n';
    assert(sum.in == v.end());
 
    auto mul = std::ranges::fold_left_first_with_iter(v, std::multiplies<int>());
    std::cout << "mul: " << mul.value.value() << '\n';
    assert(mul.in == v.end());
 
    // get the product of the std::pair::second of all pairs in the vector:
    std::vector<std::pair<char, float>> data {{'A', 2.f}, {'B', 3.f}, {'C', 7.f}};
    auto sec = std::ranges::fold_left_first_with_iter
    (
        data | std::ranges::views::values, std::multiplies<>()
    );
    std::cout << "sec: " << sec.value.value() << '\n';
 
    // use a program defined function object (lambda-expression):
    auto lambda = [](int x, int y) { return x + y + 2; };
    auto val = std::ranges::fold_left_first_with_iter(v, lambda);
    std::cout << "val: " << val.value.value() << '\n';
    assert(val.in == v.end());
}
```

## See also
- [ranges::fold_left](/cpp/algorithm/ranges/fold_left/)
- [ranges::fold_left_first](/cpp/algorithm/ranges/fold_left_first/)
- [ranges::fold_right](/cpp/algorithm/ranges/fold_right/)
- [ranges::fold_right_last](/cpp/algorithm/ranges/fold_right_last/)
- [ranges::fold_left_with_iter](/cpp/algorithm/ranges/fold_left_with_iter/)
- [pair](/cpp/algorithm/ranges/return_types/in_value_result/)
- [accumulate](/cpp/algorithm/accumulate/)
- [reduce](/cpp/algorithm/reduce/)
- [std::accumulate](/cpp/algorithm/accumulate/)
