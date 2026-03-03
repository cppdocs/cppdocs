---
title: "std::experimental::ranges::dangling, std::experimental::ranges::safe_iterator_t"
source_path: "cpp/experimental/ranges/iterator/dangling"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

The class template dangling is a simple wrapper around an object to indicate that the wrapped object may be dangling, that is, it refers to another object whose lifetime may have ended.

## Declarations
```cpp
template< CopyConstructible T >
class dangling {
public:
dangling() requires DefaultConstructible<T>();
dangling(T t);
T get_unsafe() const;
};
```
_(ranges TS)_

```cpp
template< Range R >
using safe_iterator_t = std::conditional_t<std::is_lvalue_reference<R>::value,
ranges::iterator_t<R>,
ranges::dangling<ranges::iterator_t<R>>;
```
_(ranges TS)_
