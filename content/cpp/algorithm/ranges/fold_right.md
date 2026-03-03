---
title: "std::ranges::fold_right"
source_path: "cpp/algorithm/ranges/fold_right"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

Right-[folds](https://en.wikipedia.org/wiki/Fold_(higher-order_function)) the elements of given range, that is, returns the result of evaluation of the chain expression:f(x1, f(x2, ...f(xn, init))), where x1, x2, ..., xn are elements of the range.

## Declarations
```cpp
Call signature
```

```cpp
template< std::bidirectional_iterator I, std::sentinel_for<I> S, class T,
/* indirectly-binary-right-foldable */<T, I> F >
constexpr auto fold_right( I first, S last, T init, F f );
```
_(since C++23) (until C++26)_

```cpp
template< std::bidirectional_iterator I, std::sentinel_for<I> S,
class T = std::iter_value_t<I>,
/* indirectly-binary-right-foldable */<T, I> F >
constexpr auto fold_right( I first, S last, T init, F f );
```
_(since C++26)_

```cpp
template< ranges::bidirectional_range R, class T,
/* indirectly-binary-right-foldable */
<T, ranges::iterator_t<R>> F >
constexpr auto fold_right( R&& r, T init, F f );
```
_(since C++23) (until C++26)_

```cpp
template< ranges::bidirectional_range R, class T = ranges::range_value_t<R>,
/* indirectly-binary-right-foldable */
<T, ranges::iterator_t<R>> F >
constexpr auto fold_right( R&& r, T init, F f );
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
template< class F, class T, class I >
concept /* indirectly-binary-right-foldable */ = /* see description */;
```
_(exposition only*)_

## Parameters
- `first, last`: the range of elements to fold
- `r`: the range of elements to fold
- `init`: the initial value of the fold
- `f`: the binary function object

## Return value
An object of type U that contains the result of right-[fold](https://en.wikipedia.org/wiki/Fold_(higher-order_function)) of the given range over f, where U is equivalent to [std::decay_t](/cpp/types/decay/)<[std::invoke_result_t](/cpp/types/result_of/)<F&, [std::iter_reference_t](/cpp/iterator/iter_t/)<I>, T>>;.

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
 
using namespace std::literals;
namespace ranges = std::ranges;
 
int main()
{
    auto v = {1, 2, 3, 4, 5, 6, 7, 8};
    std::vector<std::string> vs{"A", "B", "C", "D"};
 
    auto r1 = ranges::fold_right(v.begin(), v.end(), 6, std::plus<>()); // (1)
    std::cout << "r1: " << r1 << '\n';
 
    auto r2 = ranges::fold_right(vs, "!"s, std::plus<>()); // (2)
    std::cout << "r2: " << r2 << '\n';
 
    // Use a program defined function object (lambda-expression):
    std::string r3 = ranges::fold_right
    (
        v, "A", [](int x, std::string s) { return s + ':' + std::to_string(x); }
    );
    std::cout << "r3: " << r3 << '\n';
 
    // Get the product of the std::pair::second of all pairs in the vector:
    std::vector<std::pair<char, float>> data{{'A', 2.f}, {'B', 3.f}, {'C', 3.5f}};
    float r4 = ranges::fold_right
    (
        data | ranges::views::values, 2.0f, std::multiplies<>()
    );
    std::cout << "r4: " << r4 << '\n';
 
    using CD = std::complex<double>;
    std::vector<CD> nums{{1, 1}, {2, 0}, {3, 0}};
    #ifdef __cpp_lib_algorithm_default_value_type
        auto r5 = ranges::fold_right(nums, {7, 0}, std::multiplies{});
    #else
        auto r5 = ranges::fold_right(nums, CD{7, 0}, std::multiplies{});
    #endif
    std::cout << "r5: " << r5 << '\n';
}
```

## See also
- [ranges::fold_right_last](/cpp/algorithm/ranges/fold_right_last/)
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
