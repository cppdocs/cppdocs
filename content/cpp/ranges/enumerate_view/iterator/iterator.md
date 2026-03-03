---
title: "std::ranges::enumerate_view<V>::iterator<Const>::iterator"
source_path: "cpp/ranges/enumerate_view/iterator/iterator"
category: "ranges"
since: "C++23"
---

Construct an iterator.

## Declarations
```cpp
/*iterator*/()
requires std::default_initializable<ranges::iterator_t<Base>> = default;
```
_(since C++23)_

```cpp
constexpr /*iterator*/( /*iterator*/<!Const> i )
requires Const &&
std::convertible_to<ranges::iterator_t<V>, ranges::iterator_t<Base>>;
```
_(since C++23)_

```cpp
private:
constexpr explicit /*iterator*/( ranges::iterator_t<Base> current,
difference_type pos);
```
_(exposition only*)_

## Parameters
- `i`: an /*iterator*/<false>

## Example
This section is incompleteReason: no example
