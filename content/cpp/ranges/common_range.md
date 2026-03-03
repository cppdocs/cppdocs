---
title: "std::ranges::common_range"
source_path: "cpp/ranges/common_range"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

The common_range concept is a refinement of [range](/cpp/ranges/range/) for which [std::ranges::begin()](/cpp/ranges/begin/) and [std::ranges::end()](/cpp/ranges/end/) return the same type (e.g. all standard library containers).

## Declarations
```cpp
template< class T >
concept common_range =
ranges::range<T> && std::same_as<ranges::iterator_t<T>, ranges::sentinel_t<T>>;
```
_(since C++20)_

## Example
```cpp
#include <ranges>
 
struct A
{
    char* begin();
    char* end();
};
static_assert( std::ranges::common_range<A> );
 
struct B
{
    char* begin();
    bool end();
};  // not a common_range: begin/end have different types
static_assert( not std::ranges::common_range<B> );
 
struct C
{
    char* begin();
};  // not a common_range, not even a range: has no end()
static_assert( not std::ranges::common_range<C> );
 
int main() {}
```

## See also
- [ranges::common_viewviews::common](/cpp/ranges/common_view/)
- [view](/cpp/ranges/view/)
