---
title: "std::experimental::ranges::View"
source_path: "cpp/experimental/ranges/range/View"
header: "<experimental/ranges/range>"
category: "experimental"
---

The concept View<T> specifies the semiregular range T has constant-time copy, move, and assignment operations.

## Declarations
```cpp
template< class T >
concept bool View = Range<T> && Semiregular<T> && /* view-predicate<T> */;
```
_(ranges TS)_

```cpp
template< class T >
struct enable_view {};
```
_(ranges TS)_

```cpp
struct view_base {};
```
_(ranges TS)_
