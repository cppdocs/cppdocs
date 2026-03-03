---
title: "std::ranges::adjacent_transform_view<V,F,N>::sentinel<Const>::sentinel"
source_path: "cpp/ranges/adjacent_transform_view/sentinel/sentinel"
category: "ranges"
since: "C++23"
---

Construct a sentinel.

## Declarations
```cpp
/*sentinel*/() = default;
```
_(since C++23)_

```cpp
constexpr /*sentinel*/( /*sentinel*/<!Const> i )
requires Const &&
std::convertible_to</*inner-sentinel*/<false>, /*inner-sentinel*/<Const>>;
```
_(since C++23)_

```cpp
private:
constexpr explicit /*sentinel*/( /*inner-sentinel*/<Const> inner );
```
_(exposition only*)_

## Parameters
- `i`: an /*sentinel*/<false>
- `inner`: a sentinel of type adjacent_transform_view::inner_sentinel

## Example
This section is incompleteReason: no example
