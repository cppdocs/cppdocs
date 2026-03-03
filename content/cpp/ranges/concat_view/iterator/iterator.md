---
title: "std::ranges::concat_view<Views...>::iterator<Const>::iterator"
source_path: "cpp/ranges/concat_view/iterator/iterator"
category: "ranges"
since: "C++26"
---

Constructs an iterator.

## Declarations
```cpp
/*iterator*/() = default;
```
_(since C++26)_

```cpp
constexpr /*iterator*/( /*iterator*/<!Const> it )
requires Const &&
(std::convertible_to<ranges::iterator_t<Views>,
ranges::iterator_t<const Views>> && ...);
```
_(since C++26)_

```cpp
template< class... Args >
constexpr explicit /*iterator*/
( /*maybe-const*/<Const, concat_view>* parent, Args&&... args )
requires std::constructible_from</*base-iter*/, Args&&...>;
```
_(since C++26) (exposition only*)_

## Parameters
- `it`: a mutable iterator
- `parent`: a pointer to ranges::concat_view
- `args`: the arguments to initialize it_

## Example
This section is incompleteReason: no example
