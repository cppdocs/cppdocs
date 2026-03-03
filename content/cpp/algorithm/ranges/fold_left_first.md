---
title: "std::ranges::fold_left_first"
source_path: "cpp/algorithm/ranges/fold_left_first"
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
requires std::constructible_from<std::iter_value_t<I>, std::iter_reference_t<I>>
constexpr auto
fold_left_first( I first, S last, F f );
```
_(since C++23)_

```cpp
template< ranges::input_range R,
/*indirectly-binary-left-foldable*/<
ranges::range_value_t<R>, ranges::iterator_t<R>> F >
requires std::constructible_from<
ranges::range_value_t<R>, ranges::range_reference_t<R>>
constexpr auto
fold_left_first( R&& r, F f );
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

## Parameters
- `first, last`: the range of elements to fold
- `r`: the range of elements to fold
- `f`: the binary function object

## Return value
An object of type [std::optional](/cpp/utility/optional/)<U> that contains the result of left-[fold](https://en.wikipedia.org/wiki/Fold_(higher-order_function)) of the given range over f, where U is equivalent to
decltype([ranges::fold_left](/cpp/algorithm/ranges/fold_left/)(std::move(first), last, [std::iter_value_t](/cpp/iterator/iter_t/)<I>(*first), f)).

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
#include <functional>
#include <iostream>
#include <ranges>
#include <utility>
#include <vector>
 
int main()
{
    std::vector v{1, 2, 3, 4, 5, 6, 7, 8};
 
    auto sum = std::ranges::fold_left_first(v.begin(), v.end(), std::plus<int>()); // (1)
    std::cout << "*sum: " << sum.value() << '\n';
 
    auto mul = std::ranges::fold_left_first(v, std::multiplies<int>()); // (2)
    std::cout << "*mul: " << mul.value() << '\n';
 
    // get the product of the std::pair::second of all pairs in the vector:
    std::vector<std::pair<char, float>> data {{'A', 3.f}, {'B', 3.5f}, {'C', 4.f}};
    auto sec = std::ranges::fold_left_first
    (
        data | std::ranges::views::values, std::multiplies<>()
    );
    std::cout << "*sec: " << *sec << '\n';
 
    // use a program defined function object (lambda-expression):
    auto val = std::ranges::fold_left_first(v, [](int x, int y) { return x + y + 13; });
    std::cout << "*val: " << *val << '\n';
}
```

## See also
- [ranges::fold_left](/cpp/algorithm/ranges/fold_left/)
- [ranges::fold_right](/cpp/algorithm/ranges/fold_right/)
- [ranges::fold_right_last](/cpp/algorithm/ranges/fold_right_last/)
- [ranges::fold_left_with_iter](/cpp/algorithm/ranges/fold_left_with_iter/)
- [pair](/cpp/algorithm/ranges/return_types/in_value_result/)
- [ranges::fold_left_first_with_iter](/cpp/algorithm/ranges/fold_left_first_with_iter/)
- [pair](/cpp/algorithm/ranges/return_types/in_value_result/)
- [optional](/cpp/utility/optional/)
- [accumulate](/cpp/algorithm/accumulate/)
- [reduce](/cpp/algorithm/reduce/)
- [std::accumulate](/cpp/algorithm/accumulate/)
