---
title: "std::ranges::iota, std::ranges::iota_result"
source_path: "cpp/algorithm/ranges/iota"
header: "<numeric>"
category: "algorithm"
since: "C++23"
---

Fills the range [first,last) with sequentially increasing values, starting with value and repetitively evaluating ++value.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_or_output_iterator O, std::sentinel_for<O> S,
std::weakly_incrementable T >
requires std::indirectly_writable<O, const T&>
constexpr iota_result<O, T>
iota( O first, S last, T value );
```
_(since C++23)_

```cpp
template< std::weakly_incrementable T, ranges::output_range<const T&> R >
constexpr iota_result<ranges::borrowed_iterator_t<R>, T>
iota( R&& r, T value );
```
_(since C++23)_

```cpp
Helper types
```

```cpp
template< class O, class T >
using iota_result = ranges::out_value_result<O, T>;
```
_(since C++23)_

## Parameters
- `first, last`: the range of elements to fill with sequentially increasing values starting with value
- `value`: initial value to store; the expression ++value must be well-formed

## Return value
{last, value + [ranges::distance](/cpp/iterator/ranges/distance/)(first, last)}

## Notes
The function is named after the integer function ⍳ from the programming language [APL](https://en.wikipedia.org/wiki/APL_(programming_language)).

## Example
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <list>
#include <numeric>
#include <random>
#include <vector>
 
template <typename Proj = std::identity>
void println(auto comment, std::ranges::input_range auto&& range, Proj proj = {})
{
    for (std::cout << comment; auto const &element : range)
        std::cout << proj(element) << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::list<int> list(8);
 
    // Fill the list with ascending values: 0, 1, 2, ..., 7
    std::ranges::iota(list, 0);
    println("List: ", list);
 
    // A vector of iterators (see the comment to Example)
    std::vector<std::list<int>::iterator> vec(list.size());
 
    // Fill with iterators to consecutive list's elements
    std::ranges::iota(vec.begin(), vec.end(), list.begin());
 
    std::ranges::shuffle(vec, std::mt19937 {std::random_device {}()});
    println("List viewed via vector: ", vec, [](auto it) { return *it; });
}
```

## See also
- [fill](/cpp/algorithm/fill/)
- [ranges::fill](/cpp/algorithm/ranges/fill/)
- [generate](/cpp/algorithm/generate/)
- [ranges::generate](/cpp/algorithm/ranges/generate/)
- [ranges::iota_viewviews::iota](/cpp/ranges/iota_view/)
- [view](/cpp/ranges/view/)
- [iota](/cpp/algorithm/iota/)
