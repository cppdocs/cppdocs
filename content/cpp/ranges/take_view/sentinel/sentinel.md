---
title: "std::ranges::take_view<V>::sentinel<Const>::sentinel"
source_path: "cpp/ranges/take_view/sentinel/sentinel"
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
constexpr /*sentinel*/( /*sentinel*/<!Const> s )
requires Const &&
std::convertible_to<ranges::sentinel_t<V>, ranges::sentinel_t<Base>>;
```
_(since C++20)_

## Parameters
- `end`: a sentinel representing the end of (possibly const-qualified) V
- `s`: a /*sentinel*/<false>

## Example
This section is incompleteReason: no example
