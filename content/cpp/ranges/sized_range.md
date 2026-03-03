---
title: "std::ranges::sized_range, std::ranges::disable_sized_range"
source_path: "cpp/ranges/sized_range"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) The sized_range concept specifies the requirements of a [range](/cpp/ranges/range/) type that knows its size in constant time with the size function.

## Declarations
```cpp
template< class T >
concept sized_range = ranges::range<T> &&
requires(T& t) {
ranges::size(t);
};
```
_(since C++20)_

```cpp
template< class >
constexpr bool disable_sized_range = false;
```
_(since C++20)_

## Notes
disable_sized_range cannot be used to opt-out a range whose iterator and sentinel satisfy [sized_sentinel_for](/cpp/iterator/sized_sentinel_for/); [std::disable_sized_sentinel_for](/cpp/iterator/sized_sentinel_for/) must be used instead.

disable_sized_range cannot be specialized for array types or reference types.

## Example
```cpp
#include <forward_list>
#include <list>
#include <ranges>
 
static_assert
(
    std::ranges::sized_range<std::list<int>> and
    not std::ranges::sized_range<std::forward_list<int>>
);
 
int main() {}
```

## See also
- [ranges::random_access_range](/cpp/ranges/random_access_range/)
- [random_access_iterator](/cpp/iterator/random_access_iterator/)
- [ranges::contiguous_range](/cpp/ranges/contiguous_range/)
- [contiguous_iterator](/cpp/iterator/contiguous_iterator/)
