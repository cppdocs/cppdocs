---
title: "std::ranges::elements_view<V,F>::sentinel<Const>::sentinel"
source_path: "cpp/ranges/elements_view/sentinel/sentinel"
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
constexpr explicit /*sentinel*/( ranges::sentinel_t<Base> end );
```
_(since C++20)_

```cpp
constexpr /*sentinel*/( /*sentinel*/<!Const> i )
requires Const && std::convertible_to<ranges::sentinel_t<V>,
ranges::sentinel_t<Base>>;
```
_(since C++20)_

## Parameters
- `end`: a sentinel representing the end of (possibly const-qualified) V
- `i`: a /*sentinel*/<false>

## Example
This section is incompleteReason: no example
