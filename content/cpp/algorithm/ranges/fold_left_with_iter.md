---
title: "std::ranges::fold_left_with_iter, std::ranges::fold_left_with_iter_result"
source_path: "cpp/algorithm/ranges/fold_left_with_iter"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

Left-[folds](https://en.wikipedia.org/wiki/Fold_(higher-order_function)) the elements of given range, that is, returns the result of evaluation of the chain expression:f(f(f(f(init, x1), x2), ...), xn), where x1, x2, ..., xn are elements of the range.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, std::sentinel_for<I> S, class T,
/* indirectly-binary-left-foldable */<T, I> F >
constexpr /* see description */
fold_left_with_iter( I first, S last, T init, F f );
```
_(since C++23) (until C++26)_

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class T = std::iter_value_t<I>,
/* indirectly-binary-left-foldable */<T, I> F >
constexpr /* see description */
fold_left_with_iter( I first, S last, T init, F f );
```
_(since C++26)_

```cpp
template< ranges::input_range R, class T,
/* indirectly-binary-left-foldable */
<T, ranges::iterator_t<R>> F >
constexpr /* see description */
fold_left_with_iter( R&& r, T init, F f );
```
_(since C++23) (until C++26)_

```cpp
template< ranges::input_range R, class T = ranges::range_value_t<R>,
/* indirectly-binary-left-foldable */
<T, ranges::iterator_t<R>> F >
constexpr /* see description */
fold_left_with_iter( R&& r, T init, F f );
```
_(since C++26)_

```cpp
Helper concepts
```

```cpp
template< class F, class T, class I >
concept /* indirectly-binary-left-foldable */ = /* see description */;
```
_(exposition only*)_

```cpp
Helper class template
```

```cpp
template< class I, class T >
using fold_left_with_iter_result = ranges::in_value_result<I, T>;
```
_(since C++23)_

## Parameters
- `first, last`: the range of elements to fold
- `r`: the range of elements to fold
- `init`: the initial value of the fold
- `f`: the binary function object

## Return value
Let U be [std::decay_t](/cpp/types/decay/)<[std::invoke_result_t](/cpp/types/result_of/)<F&, T, [std::iter_reference_t](/cpp/iterator/iter_t/)<I>>>.

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
#include <complex>
#include <functional>
#include <ranges>
#include <utility>
#include <vector>
 
int main()
{
    namespace ranges = std::ranges;
 
    std::vector v{1, 2, 3, 4, 5, 6, 7, 8};
 
    auto sum = ranges::fold_left_with_iter(v.begin(), v.end(), 6, std::plus<int>());
    assert(sum.value == 42);
    assert(sum.in == v.end());
 
    auto mul = ranges::fold_left_with_iter(v, 0X69, std::multiplies<int>());
    assert(mul.value == 4233600);
    assert(mul.in == v.end());
 
    // Get the product of the std::pair::second of all pairs in the vector:
    std::vector<std::pair<char, float>> data {{'A', 2.f}, {'B', 3.f}, {'C', 3.5f}};
    auto sec = ranges::fold_left_with_iter
    (
        data | ranges::views::values, 2.0f, std::multiplies<>()
    );
    assert(sec.value == 42);
 
    // Use a program defined function object (lambda-expression):
    auto lambda = [](int x, int y){ return x + 0B110 + y; };
    auto val = ranges::fold_left_with_iter(v, -42, lambda);
    assert(val.value == 42);
    assert(val.in == v.end());
 
    using CD = std::complex<double>;
    std::vector<CD> nums{{1, 1}, {2, 0}, {3, 0}};
    #ifdef __cpp_lib_algorithm_default_value_type
        auto res = ranges::fold_left_with_iter(nums, {7, 0}, std::multiplies{});
    #else
        auto res = ranges::fold_left_with_iter(nums, CD{7, 0}, std::multiplies{});
    #endif
    assert((res.value == CD{42, 42}));
}
```

## See also
- [ranges::fold_left](/cpp/algorithm/ranges/fold_left/)
- [ranges::fold_left_first](/cpp/algorithm/ranges/fold_left_first/)
- [ranges::fold_right](/cpp/algorithm/ranges/fold_right/)
- [ranges::fold_right_last](/cpp/algorithm/ranges/fold_right_last/)
- [ranges::fold_left_first_with_iter](/cpp/algorithm/ranges/fold_left_first_with_iter/)
- [pair](/cpp/algorithm/ranges/return_types/in_value_result/)
- [optional](/cpp/utility/optional/)
- [accumulate](/cpp/algorithm/accumulate/)
- [reduce](/cpp/algorithm/reduce/)
- [std::accumulate](/cpp/algorithm/accumulate/)
