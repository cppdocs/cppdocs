---
title: "std::ranges::views::cartesian_product, std::ranges::cartesian_product_view"
source_path: "cpp/ranges/cartesian_product_view"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

1) cartesian_product_view is a range adaptor that takes n [views](/cpp/ranges/view/), where n > 0, and produces a [view](/cpp/ranges/view/) of tuples calculated by the [n-ary cartesian product](https://en.wikipedia.org/wiki/Cartesian_product#n-ary_Cartesian_product) of the provided ranges. The size of produced view is a multiple of sizes of provided ranges, while each element is a tuple (of references) of the size n.

## Declarations
```cpp
template< ranges::input_range First, ranges::forward_range... Vs >
requires (ranges::view<First> && ... && ranges::view<Vs>)
class cartesian_product_view
: public ranges::view_interface<cartesian_product_view<First, Vs...>>
```
_(since C++23)_

```cpp
namespace views {
inline constexpr /*unspecified*/ cartesian_product = /*unspecified*/;
}
```
_(since C++23)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range... Rs >
requires /* see below */
constexpr ranges::view auto cartesian_product( Rs&&... rs );
```
_(since C++23)_

```cpp
Helper concepts
```

```cpp
template< bool Const, class First, class... Vs >
concept /*cartesian-product-is-random-access*/ =
(ranges::random_access_range</*maybe-const*/<Const, First>> && ... &&
(ranges::random_access_range</*maybe-const*/<Const, Vs>> &&
ranges::sized_range</*maybe-const*/<Const, Vs>>));
```
_(exposition only*)_

```cpp
template< class R >
concept /*cartesian-product-common-arg*/ =
ranges::common_range<R> ||
(ranges::sized_range<R> && ranges::random_access_range<R>);
```
_(exposition only*)_

```cpp
template< bool Const, class First, class... Vs >
concept /*cartesian-product-is-bidirectional*/ =
(ranges::bidirectional_range</*maybe-const*/<Const, First>> && ... &&
(ranges::bidirectional_range</*maybe-const*/<Const, Vs>> &&
/*cartesian-product-common-arg*/</*maybe-const*/<Const, Vs>>));
```
_(exposition only*)_

```cpp
template< class First, class... Vs >
concept /*cartesian-product-is-common*/ =
/*cartesian-product-common-arg*/<First>;
```
_(exposition only*)_

```cpp
template< class... Vs >
concept /*cartesian-product-is-sized*/ =
(ranges::sized_range<Vs> && ...);
```
_(exposition only*)_

```cpp
template< bool Const, template<class> class FirstSent, class First, class... Vs >
concept /*cartesian-is-sized-sentinel*/ =
(std::sized_sentinel_for<FirstSent</*maybe-const*/<Const, First>>,
ranges::iterator_t</*maybe-const*/<Const, First>>> && ... &&
(ranges::sized_range</*maybe-const*/<Const, Vs>> &&
std::sized_sentinel_for<ranges::iterator_t<
/*maybe-const*/<Const, Vs>>,
ranges::iterator_t</*maybe-const*/<Const, Vs>>>));
```
_(exposition only*)_

```cpp
Helper function templates
```

```cpp
template< /*cartesian-product-common-arg*/ R >
constexpr auto /*cartesian-common-arg-end*/( R& r )
{
if constexpr (ranges::common_range<R>)
return ranges::end(r);
else
return ranges::begin(r) + ranges::distance(r);
}
```
_(exposition only*)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_ranges_cartesian_product
202207L
(C++23)
std::ranges::cartesian_product_view

## Example
```cpp
#include <array>
#include <iostream>
#include <list>
#include <ranges>
#include <string>
#include <vector>
 
void print(std::tuple<char const&, int const&, std::string const&> t, int pos)
{
    const auto& [a, b, c] = t;
    std::cout << '(' << a << ' ' << b << ' ' << c << ')' << (pos % 4 ? " " : "\n");
}
 
int main()
{
    const auto x = std::array{'A', 'B'};
    const auto y = std::vector{1, 2, 3};
    const auto z = std::list<std::string>{"α", "β", "γ", "δ"};
 
    for (int i{1}; auto const& tuple : std::views::cartesian_product(x, y, z))
        print(tuple, i++);
}
```

## See also
- [ranges::zip_viewviews::zip](/cpp/ranges/zip_view/)
- [view](/cpp/ranges/view/)
