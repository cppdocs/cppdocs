---
title: "std::ranges::prev_permutation, std::ranges::prev_permutation_result"
source_path: "cpp/algorithm/ranges/prev_permutation"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Transforms the range [first,last) into the previous [permutation](https://en.wikipedia.org/wiki/permutation), where the set of all permutations is ordered [lexicographically](https://en.wikipedia.org/wiki/Lexicographic_order) with respect to binary comparison function object comp and projection function object proj.

## Declarations
```cpp
Call signature
```

```cpp
template< std::bidirectional_iterator I, std::sentinel_for<I> S,
class Comp = ranges::less, class Proj = std::identity >
requires std::sortable<I, Comp, Proj>
constexpr prev_permutation_result<I>
prev_permutation( I first, S last, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::bidirectional_range R, class Comp = ranges::less,
class Proj = std::identity >
requires std::sortable<ranges::iterator_t<R>, Comp, Proj>
constexpr prev_permutation_result<ranges::borrowed_iterator_t<R>>
prev_permutation( R&& r, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
Helper type
```

```cpp
template< class I >
using prev_permutation_result = ranges::in_found_result<I>;
```
_(since C++20)_

## Parameters
- `first, last`: the range of elements to "permute"
- `r`: the range of elements to "permute"
- `comp`: comparison function object which returns true if the first argument is less than the second
- `proj`: projection to apply to the elements

## Notes
Implementations (e.g. [MSVC STL](https://github.com/microsoft/STL/blob/main/stl/src/vector_algorithms.cpp)) may enable vectorization when the iterator type models [contiguous_iterator](/cpp/iterator/contiguous_iterator/) and swapping its value type calls neither non-trivial special member function nor [ADL](/cpp/language/adl/)-found swap.

## Example
```cpp
#include <algorithm>
#include <array>
#include <compare>
#include <functional>
#include <iostream>
#include <string>
 
struct S
{
    char c{};
    int i{};
    auto operator<=>(const S&) const = default;
    friend std::ostream& operator<<(std::ostream& os, const S& s)
    {
        return os << "{'" << s.c << "', " << s.i << "}";
    }
};
 
auto print = [](auto const& v, char term = ' ')
{
    std::cout << "{ ";
    for (const auto& e : v)
        std::cout << e << ' ';
    std::cout << '}' << term;
};
 
int main()
{
    std::cout << "Generate all permutations (iterators case):\n";
    std::string s{"cba"};
    do print(s);
    while (std::ranges::prev_permutation(s.begin(), s.end()).found);
 
    std::cout << "\nGenerate all permutations (range case):\n";
    std::array a{'c', 'b', 'a'};
    do print(a);
    while (std::ranges::prev_permutation(a).found);
 
    std::cout << "\nGenerate all permutations using comparator:\n";
    using namespace std::literals;
    std::array z{"▁"s, "▄"s, "█"s};
    do print(z);
    while (std::ranges::prev_permutation(z, std::greater()).found);
 
    std::cout << "\nGenerate all permutations using projection:\n";
    std::array<S, 3> r{S{'C',1}, S{'B',2}, S{'A',3}};
    do print(r, '\n');
    while (std::ranges::prev_permutation(r, {}, &S::c).found);
}
```

## See also
- [ranges::next_permutation](/cpp/algorithm/ranges/next_permutation/)
- [ranges::is_permutation](/cpp/algorithm/ranges/is_permutation/)
- [next_permutation](/cpp/algorithm/next_permutation/)
- [prev_permutation](/cpp/algorithm/prev_permutation/)
- [is_permutation](/cpp/algorithm/is_permutation/)
