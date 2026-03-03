---
title: "std::ranges::views::transform, std::ranges::transform_view"
source_path: "cpp/ranges/transform_view"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

1) A range adaptor that represents [view](/cpp/ranges/view/) of an underlying sequence after applying a transformation function to each element.

## Declarations
```cpp
template< ranges::input_range V,
std::copy_constructible F >
requires ranges::view<V> &&
std::is_object_v<F> &&
std::regular_invocable<F&, ranges::range_reference_t<V>> &&
/* invoke_result_t<F&, range_reference_t<V>>& is a valid type */
class transform_view
: public ranges::view_interface<transform_view<V, F>>
```
_(since C++20) (until C++23)_

```cpp
template< ranges::input_range V,
std::move_constructible F >
requires ranges::view<V> &&
std::is_object_v<F> &&
std::regular_invocable<F&, ranges::range_reference_t<V>> &&
/* invoke_result_t<F&, range_reference_t<V>>& is a valid type */
class transform_view
: public ranges::view_interface<transform_view<V, F>>
```
_(since C++23)_

```cpp
namespace views {
inline constexpr /*unspecified*/ transform = /*unspecified*/;
}
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R, class F >
requires /* see below */
constexpr ranges::view auto transform( R&& r, F&& fun );
```
_(since C++20)_

```cpp
template< class F >
constexpr /*range adaptor closure*/ transform( F&& fun );
```
_(since C++20)_

## Example
```cpp
#include <algorithm>
#include <cstdio>
#include <iterator>
#include <ranges>
#include <string>
 
char rot13a(const char x, const char a)
{
    return a + (x - a + 13) % 26;
}
 
char rot13(const char x)
{
    if ('Z' >= x and x >= 'A')
        return rot13a(x, 'A');
 
    if ('z' >= x and x >= 'a')
        return rot13a(x, 'a');
 
    return x;
}
 
int main()
{
    auto show = [](const unsigned char x) { std::putchar(x); };
 
    std::string in{"cppreference.com\n"};
    std::ranges::for_each(in, show);
    std::ranges::for_each(in | std::views::transform(rot13), show);
 
    std::string out;
    std::ranges::copy(std::views::transform(in, rot13), std::back_inserter(out));
    std::ranges::for_each(out, show);
    std::ranges::for_each(out | std::views::transform(rot13), show);
}
```

## See also
- [ranges::transform](/cpp/algorithm/ranges/transform/)
