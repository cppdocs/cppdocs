---
title: "std::ranges::slide_view<V>::iterator<Const>::iterator"
source_path: "cpp/ranges/slide_view/iterator/iterator"
category: "ranges"
since: "C++23"
---

Construct an iterator.

## Declarations
```cpp
/*iterator*/();
```
_(since C++23)_

```cpp
constexpr /*iterator*/( /*iterator*/<!Const> i )
requires Const &&
std::convertible_to<ranges::iterator_t<V>, ranges::iterator_t<Base>>
```
_(since C++23)_

```cpp
private:
constexpr /*iterator*/( ranges::iterator_t<Base> current,
ranges::range_difference_t<Base> n )
requires (!/*slide-caches-first*/<Base>);
```
_(exposition only*)_

```cpp
private:
constexpr /*iterator*/( ranges::iterator_t<Base> current,
ranges::iterator_t<Base> last_ele,
ranges::range_difference_t<Base> n )
requires /*slide-caches-first*/<Base>;
```
_(exposition only*)_

## Parameters
- `i`: an /*iterator*/<false>
- `current`: an iterator to current element of slide_view
- `last_ele`: an iterator to last element of slide_view
- `n`: the slide window width of slide_view

## Example
This section is incompleteReason: no example
