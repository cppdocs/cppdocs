---
title: "std::ranges::random_access_range"
source_path: "cpp/ranges/random_access_range"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

The random_access_range concept is a refinement of [range](/cpp/ranges/range/) for which ranges::begin returns a model of [random_access_iterator](/cpp/iterator/random_access_iterator/).

## Declarations
```cpp
template< class T >
concept random_access_range =
ranges::bidirectional_range<T> && std::random_access_iterator<ranges::iterator_t<T>>;
```
_(since C++20)_

## Example
```cpp
#include <array>
#include <deque>
#include <list>
#include <ranges>
#include <set>
#include <valarray>
#include <vector>
 
template<typename T> concept RAR = std::ranges::random_access_range<T>;
 
int main()
{
    int a[4];
    static_assert(
            RAR<std::vector<int>> and
            RAR<std::vector<bool>> and
            RAR<std::deque<int>> and
            RAR<std::valarray<int>> and
            RAR<decltype(a)> and
        not RAR<std::list<int>> and
        not RAR<std::set<int>> and
            RAR<std::array<std::list<int>,42>>
    );
}
```

## See also
- [ranges::sized_range](/cpp/ranges/sized_range/)
- [ranges::contiguous_range](/cpp/ranges/contiguous_range/)
- [contiguous_iterator](/cpp/iterator/contiguous_iterator/)
