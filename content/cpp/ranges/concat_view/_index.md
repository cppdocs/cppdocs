---
title: "std::ranges::views::concat, std::ranges::concat_view"
source_path: "cpp/ranges/concat_view"
header: "<ranges>"
category: "ranges"
since: "C++26"
---

concat_view presents a [view](/cpp/ranges/view/) factory that takes an arbitrary number of ranges as an argument list, and provides a view that starts at the first element of the first range, ends at the last element of the last range, with all range elements sequenced in between respectively in the order given in the arguments, effectively concatenating, or chaining together the argument ranges.

## Declarations
```cpp
template< ranges::input_range... Views >
requires (ranges::view<Views> && ...) && (sizeof...(Views) > 0) &&
/*concatable*/<Views...>
class concat_view
: public ranges::view_interface<concat_view<Views...>>
```
_(since C++26)_

```cpp
namespace views {
inline constexpr /* unspecified */ concat = /* unspecified */;
}
```
_(since C++26)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range... Rs >
requires /* see below */
constexpr ranges::view auto concat( Rs&&... rs );
```
_(since C++26)_

```cpp
Helper type aliases
```

```cpp
template< class... Rs >
using /*concat-reference-t*/ =
ranges::common_reference_t<ranges::range_reference_t<Rs>...>;
```
_(exposition only*)_

```cpp
template< class... Rs >
using /*concat-value-t*/ = std::common_type_t<ranges::range_value_t<Rs>...>;
```
_(exposition only*)_

```cpp
template< class... Rs >
using /*concat-rvalue-reference-t*/ =
ranges::common_reference_t<ranges::range_rvalue_reference_t<Rs>...>;
```
_(exposition only*)_

```cpp
Helper concepts
```

```cpp
template< class Ref, class RRef, class It >
concept /*concat-indirectly-readable-impl*/ = /* see description */;
```
_(exposition only*)_

```cpp
template< class... Rs >
concept /*concatable*/ = /* see description */;
```
_(exposition only*)_

## Notes
No argument views::concat() is ill-formed, because there is no reasonable way to determine an element type T. Single argument views::concat(r) is expression equivalent to [views::all](/cpp/ranges/all_view/)(r).

## Example
```cpp
#include <cassert>
#include <list>
#include <print>
#include <ranges>
#include <vector>
 
int main()
{
    std::vector<int> v0{1, 2, 3}, v1{4, 5};
    int a[]{6, 7};
    int i{8};
    auto ie{std::views::single(i)};
 
    auto con = std::views::concat(v0, v1, a, ie);
    assert(con.size() == v0.size() + v1.size() + std::size(a) + ie.size());
    std::println("con.size(): {}", con.size());
    std::println("con: {}", con);
    con[6] = 42; // con is random_access_range, operator[] returns a reference
    assert(a[1] == 42); // a[1] was modified via con[6]
    std::println("con: {}", con);
 
    std::list<int> l{7, 8}; // list is bidirectional range
    auto cat = std::views::concat(v0, l);
    std::println("cat: {}", cat);
    // cat[0] = 13; // compile-time error: cat is bidirectional => no operator[]
}
```

## See also
- [ranges::join_viewviews::join](/cpp/ranges/join_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges](/cpp/ranges/range/)
- [ranges::join_with_viewviews::join_with](/cpp/ranges/join_with_view/)
- [view](/cpp/ranges/view/)
- [ranges::zip_viewviews::zip](/cpp/ranges/zip_view/)
- [view](/cpp/ranges/view/)
- [ranges::cartesian_product_viewviews::cartesian_product](/cpp/ranges/cartesian_product_view/)
- [view](/cpp/ranges/view/)
