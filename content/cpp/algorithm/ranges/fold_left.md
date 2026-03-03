---
title: "std::ranges::fold_left"
source_path: "cpp/algorithm/ranges/fold_left"
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
constexpr auto fold_left( I first, S last, T init, F f );
```
_(since C++23) (until C++26)_

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class T = std::iter_value_t<I>,
/* indirectly-binary-left-foldable */<T, I> F >
constexpr auto fold_left( I first, S last, T init, F f );
```
_(since C++26)_

```cpp
template< ranges::input_range R, class T,
/* indirectly-binary-left-foldable */
<T, ranges::iterator_t<R>> F >
constexpr auto fold_left( R&& r, T init, F f );
```
_(since C++23) (until C++26)_

```cpp
template< ranges::input_range R, class T = ranges::range_value_t<R>,
/* indirectly-binary-left-foldable */
<T, ranges::iterator_t<R>> F >
constexpr auto fold_left( R&& r, T init, F f );
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

## Parameters
- `first, last`: the range of elements to fold
- `r`: the range of elements to fold
- `init`: the initial value of the fold
- `f`: the binary function object

## Return value
An object of type U that contains the result of left-[fold](https://en.wikipedia.org/wiki/Fold_(higher-order_function)) of the given range over f, where U is equivalent to [std::decay_t](/cpp/types/decay/)<[std::invoke_result_t](/cpp/types/result_of/)<F&, T, [std::iter_reference_t](/cpp/iterator/iter_t/)<I>>>.

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
#include <complex>
#include <functional>
#include <iostream>
#include <ranges>
#include <string>
#include <utility>
#include <vector>
 
int main()
{
    namespace ranges = std::ranges;
 
    std::vector v{1, 2, 3, 4, 5, 6, 7, 8};
 
    int sum = ranges::fold_left(v.begin(), v.end(), 0, std::plus<int>()); // (1)
    std::cout << "sum: " << sum << '\n';
 
    int mul = ranges::fold_left(v, 1, std::multiplies<int>()); // (2)
    std::cout << "mul: " << mul << '\n';
 
    // get the product of the std::pair::second of all pairs in the vector:
    std::vector<std::pair<char, float>> data {{'A', 2.f}, {'B', 3.f}, {'C', 3.5f}};
    float sec = ranges::fold_left
    (
        data | ranges::views::values, 2.0f, std::multiplies<>()
    );
    std::cout << "sec: " << sec << '\n';
 
    // use a program defined function object (lambda-expression):
    std::string str = ranges::fold_left
    (
        v, "A", [](std::string s, int x) { return s + ':' + std::to_string(x); }
    );
    std::cout << "str: " << str << '\n';
 
    using CD = std::complex<double>;
    std::vector<CD> nums{{1, 1}, {2, 0}, {3, 0}};
    #ifdef __cpp_lib_algorithm_default_value_type
        auto res = ranges::fold_left(nums, {7, 0}, std::multiplies{}); // (2)
    #else
        auto res = ranges::fold_left(nums, CD{7, 0}, std::multiplies{}); // (2)
    #endif
    std::cout << "res: " << res << '\n';
}
```

## See also
- [ranges::fold_left_first](/cpp/algorithm/ranges/fold_left_first/)
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
