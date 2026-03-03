---
title: "std::ranges::count, std::ranges::count_if"
source_path: "cpp/algorithm/ranges/count"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

Returns the number of elements in the range [first,last) satisfying specific criteria.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class T, class Proj = std::identity >
requires std::indirect_binary_predicate
<ranges::equal_to, std::projected<I, Proj>, const T*>
constexpr std::iter_difference_t<I>
count( I first, S last, const T& value, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
class T = std::projected_value_t<I, Proj> >
requires std::indirect_binary_predicate
<ranges::equal_to, std::projected<I, Proj>, const T*>
constexpr std::iter_difference_t<I>
count( I first, S last, const T& value, Proj proj = {} );
```
_(since C++26)_

```cpp
template< ranges::input_range R, class T, class Proj = std::identity >
requires std::indirect_binary_predicate
<ranges::equal_to,
std::projected<ranges::iterator_t<R>, Proj>, const T*>
constexpr ranges::range_difference_t<R>
count( R&& r, const T& value, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< ranges::input_range R, class Proj = std::identity,
class T = std::projected_value_t<ranges::iterator_t<R>, Proj> >
requires std::indirect_binary_predicate
<ranges::equal_to,
std::projected<ranges::iterator_t<R>, Proj>, const T*>
constexpr ranges::range_difference_t<R>
count( R&& r, const T& value, Proj proj = {} );
```
_(since C++26)_

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
std::indirect_unary_predicate<std::projected<I, Proj>> Pred >
constexpr std::iter_difference_t<I>
count_if( I first, S last, Pred pred, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R, class Proj = std::identity,
std::indirect_unary_predicate<
std::projected<ranges::iterator_t<R>, Proj>> Pred >
constexpr ranges::range_difference_t<R>
count_if( R&& r, Pred pred, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: the range of elements to examine
- `r`: the range of the elements to examine
- `value`: the value to search for
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
Number of elements satisfying the condition.

## Notes
For the number of elements in the range without any additional criteria, see std::ranges::distance.

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <complex>
#include <iostream>
#include <vector>
 
int main()
{
    std::vector<int> v{1, 2, 3, 4, 4, 3, 7, 8, 9, 10};
 
    namespace ranges = std::ranges;
 
    // determine how many integers in a std::vector match a target value.
    int target1 = 3;
    int target2 = 5;
    int num_items1 = ranges::count(v.begin(), v.end(), target1);
    int num_items2 = ranges::count(v, target2);
    std::cout << "number: " << target1 << " count: " << num_items1 << '\n';
    std::cout << "number: " << target2 << " count: " << num_items2 << '\n';
 
    // use a lambda expression to count elements divisible by 3.
    int num_items3 = ranges::count_if(v.begin(), v.end(), [](int i){ return i % 3 == 0; });
    std::cout << "number divisible by three: " << num_items3 << '\n';
 
    // use a lambda expression to count elements divisible by 11.
    int num_items11 = ranges::count_if(v, [](int i){ return i % 11 == 0; });
    std::cout << "number divisible by eleven: " << num_items11 << '\n';
 
    std::vector<std::complex<double>> nums{{4, 2}, {1, 3}, {4, 2}};
    #ifdef __cpp_lib_algorithm_default_value_type
        auto c = ranges::count(nums, {4, 2});
    #else
        auto c = ranges::count(nums, std::complex<double>{4, 2});
    #endif
    assert(c == 2);
}
```

## See also
- [ranges::distance](/cpp/iterator/ranges/distance/)
- [views::counted](/cpp/ranges/counted_view/)
- [ranges::filter_viewviews::filter](/cpp/ranges/filter_view/)
- [view](/cpp/ranges/view/)
- [range](/cpp/ranges/range/)
- [countcount_if](/cpp/algorithm/count/)
