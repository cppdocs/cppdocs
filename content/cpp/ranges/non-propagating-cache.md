---
title: "Non-propagating cache (C++20)"
source_path: "cpp/ranges/non-propagating-cache"
category: "ranges"
---

Some range adaptors such as [ranges::join_view](/cpp/ranges/join_view/) and [ranges::lazy_split_view](/cpp/ranges/lazy_split_view/) conditionally store value (e.g. an iterator) which is specified in terms of an exposition-only class template non-propagating-cache.

## Declarations
```cpp
template< class T >
requires std::is_object_v<T>
class /*non-propagating-cache*/;
```
_(since C++20) (exposition only*)_

## Notes
non-propagating-cache is used in implementations to cache the result of begin() to provide an amortized constant time complexity of the method.

## See also
- [ranges::join_viewviews::join](/cpp/ranges/join_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges](/cpp/ranges/range/)
- [ranges::join_with_viewviews::join_with](/cpp/ranges/join_with_view/)
- [view](/cpp/ranges/view/)
- [ranges::split_viewviews::split](/cpp/ranges/split_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::lazy_split_viewviews::lazy_split](/cpp/ranges/lazy_split_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::chunk_viewviews::chunk](/cpp/ranges/chunk_view/)
- [views](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
