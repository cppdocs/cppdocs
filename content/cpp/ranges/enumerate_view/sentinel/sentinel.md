---
title: "std::ranges::enumerate_view<V>::sentinel<Const>::sentinel"
source_path: "cpp/ranges/enumerate_view/sentinel/sentinel"
category: "ranges"
since: "C++23"
---

Constructs a [sentinel](/cpp/ranges/enumerate_view/sentinel/).

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

```cpp
private:
constexpr explicit /*sentinel*/( ranges::sentinel_t<Base> end );
```
_(exposition only*)_

## Parameters
- `i`: a /*sentinel*/<false>

## Example
This section is incompleteReason: no example
