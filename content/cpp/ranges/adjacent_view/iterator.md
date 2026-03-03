---
title: "std::ranges::adjacent_view<V,N>::iterator"
source_path: "cpp/ranges/adjacent_view/iterator"
category: "ranges"
---

The return type of [adjacent_view::begin](/cpp/ranges/adjacent_view/begin/), and of [adjacent_view::end](/cpp/ranges/adjacent_view/end/) when the underlying view V is a [common_range](/cpp/ranges/common_range/).

## Declarations
```cpp
template< bool Const >
class /*iterator*/
```
_(since C++23) (exposition only*)_

## Example
```cpp
#include <cassert>
#include <concepts>
#include <list>
#include <ranges>
#include <tuple>
#include <utility>
#include <vector>
 
int main()
{
    auto v = std::vector{0, 1, 2, 3, 4, 5};
    auto i = (v | std::views::adjacent<3>).begin();
    using I = decltype(i);
    static_assert(std::same_as<I::value_type, std::tuple<int, int, int>>);
    static_assert(std::same_as<I::iterator_concept, std::random_access_iterator_tag>);
    // some of available operators:
    ++i; i++; --i; i--; i += 2; i -= 2;
    assert(i[2] == std::tuple(2, 3, 4));
    using DI = decltype(*i);
    static_assert(std::same_as<DI, std::tuple<int&, int&, int&>>);
    std::get<1>(*i) = 42; // modifies v[1] via iterator i
    assert(v[1] == 42);
 
    auto l = std::list{0, 1, 2, 3, 4, 5};
    auto j = (l | std::views::adjacent<3>).begin();
    using J = decltype(j);
    static_assert(std::same_as<J::value_type, std::tuple<int, int, int>>);
    static_assert(std::same_as<J::iterator_concept, std::bidirectional_iterator_tag>);
    ++j; --j; j++; j--; // some of available operators
    // j += 2; j -= 2;       // error: these operator are not available
    // std::ignore() = j[1]; //        for bidirectional iterator
}
```
