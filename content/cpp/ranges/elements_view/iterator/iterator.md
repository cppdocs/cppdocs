---
title: "std::ranges::elements_view<V,F>::iterator<Const>::iterator"
source_path: "cpp/ranges/elements_view/iterator/iterator"
category: "ranges"
since: "C++20"
---

Construct an iterator.

## Declarations
```cpp
/*iterator*/() requires std::default_initializable<ranges::iterator_t<Base>>
= default;
```
_(since C++20)_

```cpp
constexpr explicit /*iterator*/( ranges::iterator_t<Base> current );
```
_(since C++20)_

```cpp
constexpr /*iterator*/( /*iterator*/<!Const> i ) requires Const &&
std::convertible_to<ranges::iterator_t<V>, ranges::iterator_t<Base>>;
```
_(since C++20)_

## Parameters
- `current`: an iterator into (possibly const-qualified) V
- `i`: an /*iterator*/<false>

## Example
This section is incompleteReason: no example
