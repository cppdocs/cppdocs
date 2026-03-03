---
title: "std::ranges::bidirectional_range"
source_path: "cpp/ranges/bidirectional_range"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

The bidirectional_range concept is a refinement of [range](/cpp/ranges/range/) for which ranges::begin returns a model of [bidirectional_iterator](/cpp/iterator/bidirectional_iterator/).

## Declarations
```cpp
template< class T >
concept bidirectional_range =
ranges::forward_range<T> && std::bidirectional_iterator<ranges::iterator_t<T>>;
```
_(since C++20)_

## Example
```cpp
#include <forward_list>
#include <list>
#include <ranges>
#include <set>
#include <unordered_set>
 
int main()
{
    static_assert(
            std::ranges::bidirectional_range<std::set<int>> and
        not std::ranges::bidirectional_range<std::unordered_set<int>> and
            std::ranges::bidirectional_range<std::list<int>> and
        not std::ranges::bidirectional_range<std::forward_list<int>>
    );
}
```

## See also
- [ranges::forward_range](/cpp/ranges/forward_range/)
- [forward_iterator](/cpp/iterator/forward_iterator/)
- [ranges::random_access_range](/cpp/ranges/random_access_range/)
- [random_access_iterator](/cpp/iterator/random_access_iterator/)
