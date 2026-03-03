---
title: "std::ranges::iota_view<W, Bound>::iterator"
source_path: "cpp/ranges/iota_view/iterator"
category: "ranges"
---

1) [ranges::iota_view](/cpp/ranges/iota_view/)<W, Bound>::iterator is the type of the iterators returned by [begin()](/cpp/ranges/iota_view/begin/) and [end()](/cpp/ranges/iota_view/end/) of [ranges::iota_view](/cpp/ranges/iota_view/)<W, Bound>.

## Declarations
```cpp
struct /*iterator*/;
```
_(exposition only*)_

```cpp
Helper alias templates
```

```cpp
template< class I >
using /*iota-diff-t*/ = /* see below */;
```
_(exposition only*)_

```cpp
Helper concepts
```

```cpp
template< class I >
concept /*decrementable*/ =
std::incrementable<I> && requires(I i) {
{ --i } -> std::same_as<I&>;
{ i-- } -> std::same_as<I>;
};
```
_(exposition only*)_

```cpp
template< class I >
concept /*advanceable*/ =
/*decrementable*/<I> && std::totally_ordered<I> &&
requires(I i, const I j, const /*iota-diff-t*/<I> n) {
{ i += n } -> std::same_as<I&>;
{ i -= n } -> std::same_as<I&>;
I(j + n);
I(n + j);
I(j - n);
{ j - j } -> std::convertible_to</*iota-diff-t*/<I>>;
};
```
_(exposition only*)_

## Example
```cpp
#include <cassert>
#include <ranges>
 
int main()
{
    auto it{std::views::iota(6, 9).begin()};
    const int& r = *it; // binds with temporary
    assert(*it == 6 and r == 6);
    ++it;
    assert(*it == 7 and r == 6);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2259R1 | C++20 | member iterator_category is always defined | defined only if W satisfies incrementable |
| LWG 3580 | C++20 | bodies of operator+ and operator- rule out implicit move | made suitable for implicit move |
