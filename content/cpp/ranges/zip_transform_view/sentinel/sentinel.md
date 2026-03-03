---
title: "std::ranges::zip_transform_view<F,Views...>::sentinel<Const>::sentinel"
source_path: "cpp/ranges/zip_transform_view/sentinel/sentinel"
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
std::convertible_to</*zentinel*/<false>, /*zentinel*/<Const>>;
```
_(since C++23)_

```cpp
constexpr explicit /*sentinel*/( /*zentinel*/<Const> inner );
```
_(exposition only*)_

## Parameters
- `i`: a /*sentinel*/<false>
- `inner`: an underlying object of type zentinel<Const>

## Example
This section is incompleteReason: no example
