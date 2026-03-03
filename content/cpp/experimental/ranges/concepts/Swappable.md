---
title: "std::experimental::ranges::Swappable, std::experimental::ranges::SwappableWith"
source_path: "cpp/experimental/ranges/concepts/Swappable"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept Swappable<T> specifies that lvalues of type T are swappable.

## Declarations
```cpp
template< class T >
concept bool Swappable =
requires(T& a, T& b) {
ranges::swap(a, b);
};
```
_(ranges TS)_

```cpp
template< class T, class U >
concept bool SwappableWith =
CommonReference<
const std::remove_reference_t<T>&,
const std::remove_reference_t<U>&> &&
requires(T&& t, U&& u) {
ranges::swap(std::forward<T>(t), std::forward<T>(t));
ranges::swap(std::forward<U>(u), std::forward<U>(u));
ranges::swap(std::forward<T>(t), std::forward<U>(u));
ranges::swap(std::forward<U>(u), std::forward<T>(t));
};
```
_(ranges TS)_
