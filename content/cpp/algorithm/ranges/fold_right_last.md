---
title: "std::ranges::fold_right_last"
source_path: "cpp/algorithm/ranges/fold_right_last"
header: "<algorithm>"
category: "algorithm"
since: "C++23"
---

Right-[folds](https://en.wikipedia.org/wiki/Fold_(higher-order_function)) the elements of given range, that is, returns the result of evaluation of the chain expression:f(x1, f(x2, ...f(xn-1, xn))), where x1, x2, ..., xn are elements of the range.

## Declarations
```cpp
Call signature
```

```cpp
template< std::bidirectional_iterator I, std::sentinel_for<I> S,
/*indirectly-binary-right-foldable*/<std::iter_value_t<I>, I> F >
requires std::constructible_from<
std::iter_value_t<I>, std::iter_reference_t<I>>
constexpr auto
fold_right_last( I first, S last, F f );
```
_(since C++23)_

```cpp
template< ranges::bidirectional_range R,
/*indirectly-binary-right-foldable*/<
ranges::range_value_t<R>, ranges::iterator_t<R>> F >
requires std::constructible_from<
ranges::range_value_t<R>, ranges::range_reference_t<R>>
constexpr auto
fold_right_last( R&& r, F f );
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
template< class F, class T, class I >
concept /*indirectly-binary-right-foldable*/ = /* see description */;
```
_(exposition only*)_

## Parameters
- `first, last`: the range of elements to fold
- `r`: the range of elements to fold
- `f`: the binary function object

## Return value
An object of type [std::optional](/cpp/utility/optional/)<U> that contains the result of right-[fold](https://en.wikipedia.org/wiki/Fold_(higher-order_function)) of the given range over f.

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
    auto v = {1, 2, 3, 4, 5, 6, 7, 8};
    std::vector<std::string> vs {"A", "B", "C", "D"};
 
    auto r1 = std::ranges::fold_right_last(v.begin(), v.end(), std::plus<>()); // (1)
    std::cout << "*r1: " << *r1 << '\n';
 
    auto r2 = std::ranges::fold_right_last(vs, std::plus<>()); // (2)
    std::cout << "*r2: " << *r2 << '\n';
 
    // Use a program defined function object (lambda-expression):
    auto r3 = std::ranges::fold_right_last(v, [](int x, int y) { return x + y + 99; });
    std::cout << "*r3: " << *r3 << '\n';
 
    // Get the product of the std::pair::second of all pairs in the vector:
    std::vector<std::pair<char, float>> data {{'A', 3.f}, {'B', 3.5f}, {'C', 4.f}};
    auto r4 = std::ranges::fold_right_last
    (
        data | std::ranges::views::values, std::multiplies<>()
    );
    std::cout << "*r4: " << *r4 << '\n';
}
```

## See also
- [ranges::fold_right](/cpp/algorithm/ranges/fold_right/)
- [ranges::fold_left](/cpp/algorithm/ranges/fold_left/)
- [ranges::fold_left_first](/cpp/algorithm/ranges/fold_left_first/)
- [ranges::fold_left_with_iter](/cpp/algorithm/ranges/fold_left_with_iter/)
- [pair](/cpp/algorithm/ranges/return_types/in_value_result/)
- [ranges::fold_left_first_with_iter](/cpp/algorithm/ranges/fold_left_first_with_iter/)
- [pair](/cpp/algorithm/ranges/return_types/in_value_result/)
- [optional](/cpp/utility/optional/)
- [accumulate](/cpp/algorithm/accumulate/)
- [reduce](/cpp/algorithm/reduce/)
- [std::accumulate](/cpp/algorithm/accumulate/)
