---
title: "std::iota"
source_path: "cpp/algorithm/iota"
header: "<numeric>"
category: "algorithm"
---

Fills the range [first,last) with sequentially increasing values, starting with value and repetitively evaluating ++value.

## Declarations
```cpp
template< class ForwardIt, class T >
void iota( ForwardIt first, ForwardIt last, T value );
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `first, last`: the range of elements to fill with sequentially increasing values starting with value
- `value`: initial value to store

## Notes
The function is named after the integer function ⍳ from the programming language [APL](https://en.wikipedia.org/wiki/APL_(programming_language)). It was one of the [STL components](https://web.archive.org/web/20220816102741/http://www.martinbroadhurst.com/stl/iota.html) that were not included in C++98, but made it into the standard library in C++11.

## Example
```cpp
#include <algorithm>
#include <iomanip>
#include <iostream>
#include <list>
#include <numeric>
#include <random>
#include <vector>
 
class BigData // inefficient to copy
{
    int data[1024]; /* some raw data */
public:
    explicit BigData(int i = 0) { data[0] = i; /* ... */ }
    operator int() const { return data[0]; }
    BigData& operator=(int i) { data[0] = i; return *this; }
    /* ... */
};
 
int main()
{
    std::list<BigData> l(10);
    std::iota(l.begin(), l.end(), -4);
 
    std::vector<std::list<BigData>::iterator> v(l.size());
    std::iota(v.begin(), v.end(), l.begin());
    // Vector of iterators (to original data) is used to avoid expensive copying,
    // and because std::shuffle (below) cannot be applied to a std::list directly.
 
    std::shuffle(v.begin(), v.end(), std::mt19937{std::random_device{}()});
 
    std::cout << "Original contents of the list l:\t";
    for (const auto& n : l)
        std::cout << std::setw(2) << n << ' ';
    std::cout << '\n';
 
    std::cout << "Contents of l, viewed via shuffled v:\t";
    for (const auto i : v)
        std::cout << std::setw(2) << *i << ' ';
    std::cout << '\n';
}
```

## See also
- [ranges::iota_viewviews::iota](/cpp/ranges/iota_view/)
- [view](/cpp/ranges/view/)
- [fill](/cpp/algorithm/fill/)
- [ranges::fill](/cpp/algorithm/ranges/fill/)
- [generate](/cpp/algorithm/generate/)
- [ranges::generate](/cpp/algorithm/ranges/generate/)
- [ranges::iota](/cpp/algorithm/ranges/iota/)
