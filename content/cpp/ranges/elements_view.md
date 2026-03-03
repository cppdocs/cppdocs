---
title: "std::ranges::views::elements, std::ranges::elements_view"
source_path: "cpp/ranges/elements_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) Accepts a [view](/cpp/ranges/view/) of tuple-like values, and issues a view with a value type of the Nth element of the adapted view's value-type.

## Declarations
```cpp
template< ranges::input_range V, std::size_t N >
requires ranges::view<V> &&
/*has-tuple-element*/<ranges::range_value_t<V>, N> &&
/*has-tuple-element*/<std::remove_reference_t<
ranges::range_reference_t<V>>, N> &&
/*returnable-element*/<ranges::range_reference_t<V>, N>
class elements_view
: public ranges::view_interface<elements_view<V, N>>;
```
_(since C++20)_

```cpp
namespace views {
template< std::size_t N >
constexpr /* unspecified */ elements = /* unspecified */;
}
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R >
requires /* see below */
constexpr ranges::view auto elements<N>( R&& r );
```
_(since C++20)_

```cpp
Helper concepts
```

```cpp
template< class T, std::size_t N >
concept /*has-tuple-element*/ =
requires(T t) {
typename std::tuple_size<T>::type;
requires N < std::tuple_size_v<T>;
typename std::tuple_element_t<N, T>;
{ std::get<N>(t) } -> std::convertible_to<
const std::tuple_element_t<N, T>&>;
};
```
_(until C++23) (exposition only*)_

```cpp
template< class T, std::size_t N >
concept /*has-tuple-element*/ =
/*tuple-like*/<T> && N < std::tuple_size_v<T>
```
_(since C++23) (exposition only*)_

```cpp
template< class T, std::size_t N >
concept returnable-element =
std::is_reference_v<T> || std::move_constructible<
std::tuple_element_t<N, T>>;
```
_(exposition only*)_

## Example
```cpp
#include <iostream>
#include <ranges>
#include <string>
#include <tuple>
#include <vector>
 
int main()
{
    const std::vector<std::tuple<int, char, std::string>> vt
    {
        {1, 'A', "α"},
        {2, 'B', "β"},
        {3, 'C', "γ"},
        {4, 'D', "δ"},
        {5, 'E', "ε"},
    };
 
    for (int const e : std::views::elements<0>(vt))
        std::cout << e << ' ';
    std::cout << '\n';
 
    for (char const e : vt | std::views::elements<1>)
        std::cout << e << ' ';
    std::cout << '\n';
 
    for (std::string const& e : std::views::elements<2>(vt))
        std::cout << e << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3494 | C++20 | elements_view was never a borrowed_range | it is a borrowed_rangeif its underlying view is |
| LWG 3502 | C++20 | dangling reference could be obtained from elements_view | such usage is forbidden |

## See also
- [ranges::keys_viewviews::keys](/cpp/ranges/keys_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::values_viewviews::values](/cpp/ranges/values_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::zip_viewviews::zip](/cpp/ranges/zip_view/)
- [view](/cpp/ranges/view/)
- [ranges::zip_transform_viewviews::zip_transform](/cpp/ranges/zip_transform_view/)
- [view](/cpp/ranges/view/)
- [slice](/cpp/numeric/valarray/slice/)
