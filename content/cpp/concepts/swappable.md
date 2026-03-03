---
title: "std::swappable, std::swappable_with"
source_path: "cpp/concepts/swappable"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The concept swappable<T> specifies that lvalues of type T are swappable.

## Declarations
```cpp
template< class T >
concept swappable =
requires(T& a, T& b) {
ranges::swap(a, b);
};
```
_(since C++20)_

```cpp
template< class T, class U >
concept swappable_with =
std::common_reference_with<T, U> &&
requires(T&& t, U&& u) {
ranges::swap(std::forward<T>(t), std::forward<T>(t));
ranges::swap(std::forward<U>(u), std::forward<U>(u));
ranges::swap(std::forward<T>(t), std::forward<U>(u));
ranges::swap(std::forward<U>(u), std::forward<T>(t));
};
```
_(since C++20)_
