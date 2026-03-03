---
title: "std::ranges::join_view<V>::sentinel<Const>::sentinel"
source_path: "cpp/ranges/join_view/sentinel/sentinel"
category: "ranges"
since: "C++20"
---

Constructs a sentinel.

## Declarations
```cpp
/*sentinel*/() = default;
```
_(since C++20)_

```cpp
constexpr explicit /*sentinel*/( Parent& parent );
```
_(since C++20)_

```cpp
constexpr /*sentinel*/( /*sentinel*/<!Const> i )
requires Const &&
std::convertible_to<ranges::sentinel_t<V>, ranges::sentinel_t<Base>>;
```
_(since C++20)_

## Parameters
- `parent`: a (possibly const-qualified) ranges::join_view
- `i`: a /*sentinel*/<false>

## Example
This section is incompleteReason: no example
