---
title: "std::ranges::lexicographical_compare"
source_path: "cpp/algorithm/ranges/lexicographical_compare"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Checks if the first range [first1,last1) is lexicographically less than the second range [first2,last2).

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I1, std::sentinel_for<I1> S1,
std::input_iterator I2, std::sentinel_for<I2> S2,
class Proj1 = std::identity, class Proj2 = std::identity,
std::indirect_strict_weak_order<
std::projected<I1, Proj1>,
std::projected<I2, Proj2>> Comp = ranges::less >
constexpr bool
lexicographical_compare( I1 first1, S1 last1, I2 first2, S2 last2,
Comp comp = {}, Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R1, ranges::input_range R2,
class Proj1 = std::identity, class Proj2 = std::identity,
std::indirect_strict_weak_order<
std::projected<ranges::iterator_t<R1>, Proj1>,
std::projected<ranges::iterator_t<R2>, Proj2>> Comp = ranges::less >
constexpr bool
lexicographical_compare( R1&& r1, R2&& r2, Comp comp = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

## Parameters
- `first1, last1`: the first range of elements to examine
- `r1`: the first range of elements to examine
- `first2, last2`: the second range of elements to examine
- `r2`: the second range of elements to examine
- `comp`: comparison function to apply to the projected elements
- `proj1`: projection to apply to the first range of elements
- `proj2`: projection to apply to the second range of elements

## Return value
true if the first range is lexicographically less than the second.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <random>
#include <vector>
 
int main()
{
    std::vector<char> v1 {'a', 'b', 'c', 'd'};
    std::vector<char> v2 {'a', 'b', 'c', 'd'};
 
    namespace ranges = std::ranges;
    auto os = std::ostream_iterator<char>(std::cout, " ");
 
    std::mt19937 g {std::random_device {}()};
    while (not ranges::lexicographical_compare(v1, v2))
    {
        ranges::copy(v1, os);
        std::cout << ">= ";
        ranges::copy(v2, os);
        std::cout << '\n';
 
        ranges::shuffle(v1, g);
        ranges::shuffle(v2, g);
    }
 
    ranges::copy(v1, os);
    std::cout << "<  ";
    ranges::copy(v2, os);
    std::cout << '\n';
}
```

## See also
- [ranges::equal](/cpp/algorithm/ranges/equal/)
- [lexicographical_compare](/cpp/algorithm/lexicographical_compare/)
