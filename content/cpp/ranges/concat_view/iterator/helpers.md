---
title: "std::ranges::concat_view<Views...>::iterator<Const>::satisfy, prev, advance-fwd, advance-bwd"
source_path: "cpp/ranges/concat_view/iterator/helpers"
category: "ranges"
---

The following exposition-only member function templates simplify the description.

## Declarations
```cpp
template< std::size_t N >
constexpr auto /*get-iter*/();
```
_(exposition only*)_

```cpp
template< std::size_t I >
constexpr auto /*get-view*/();
```
_(exposition only*)_

```cpp
template< std::size_t I >
constexpr auto /*get-begin*/();
```
_(exposition only*)_

```cpp
template< std::size_t I >
constexpr auto /*get-end*/();
```
_(exposition only*)_

```cpp
template< std::size_t N >
constexpr auto /*to-underlying-diff-type*/( difference_type value );
```
_(exposition only*)_

## Parameters
- `offset`: the offset of the current (global) position from the beginning of range it_ currently refers into
- `steps`: the number of steps to advance forward
