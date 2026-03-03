---
title: "std::ranges::concat_view<Views...>::iterator"
source_path: "cpp/ranges/concat_view/iterator"
category: "ranges"
---

1) [ranges::concat_view](/cpp/ranges/concat_view/)<Views...>::iterator is the type of the iterators returned by [begin()](/cpp/ranges/concat_view/begin/) and [end()](/cpp/ranges/concat_view/end/) of [ranges::concat_view](/cpp/ranges/concat_view/)<Views...>.

## Declarations
```cpp
template< bool Const >
class /*iterator*/
```
_(exposition only*)_

```cpp
Helper concepts
```

```cpp
template< bool Const, class... Rs >
concept /*concat-is-random-access*/ = /* see description */;
```
_(exposition only*)_

```cpp
template< bool Const, class... Rs >
concept /*concat-is-bidirectional*/ = /* see description */;
```
_(exposition only*)_

## Example
```cpp
#include <iostream>
#include <iterator>
#include <ranges>
 
int main()
{
    namespace views = std::views;
    static constexpr int p[]{1, 2, 3};
    static constexpr auto e = {4, 5};
    auto t = views::iota(6, 9);
    auto cat = views::concat(p, e, t);
    auto dog = views::concat(cat, cat);
    for (auto i{dog.begin()}; i != std::default_sentinel; ++i)
        std::cout << *i << ' ';
    std::cout << '\n';
}
```
