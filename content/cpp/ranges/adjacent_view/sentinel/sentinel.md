---
title: "std::ranges::adjacent_view<V,N>::sentinel<Const>::sentinel"
source_path: "cpp/ranges/adjacent_view/sentinel/sentinel"
category: "ranges"
since: "C++23"
---

Constructs a sentinel.

## Declarations
```cpp
/*sentinel*/() = default;
```
_(since C++23)_

```cpp
constexpr /*sentinel*/( /*sentinel*/<!Const> i )
requires Const &&
std::convertible_to<ranges::sentinel_t<V>, ranges::sentinel_t<Base>>;
```
_(since C++23)_

## Parameters
- `i`: a /*sentinel*/<false>

## Example
This section is incompleteReason: no example
