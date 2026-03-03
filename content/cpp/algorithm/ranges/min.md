---
title: "std::ranges::min"
source_path: "cpp/algorithm/ranges/min"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Returns the smaller of the given projected elements.

## Declarations
```cpp
Call signature
```

```cpp
template< class T, class Proj = std::identity,
std::indirect_strict_weak_order<
std::projected<const T*, Proj>> Comp = ranges::less >
constexpr const T&
min( const T& a, const T& b, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< std::copyable T, class Proj = std::identity,
std::indirect_strict_weak_order<
std::projected<const T*, Proj>> Comp = ranges::less >
constexpr T
min( std::initializer_list<T> r, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R, class Proj = std::identity,
std::indirect_strict_weak_order<
std::projected<ranges::iterator_t<R>, Proj>> Comp = ranges::less >
requires std::indirectly_copyable_storable<ranges::iterator_t<R>,
ranges::range_value_t<R>*>
constexpr ranges::range_value_t<R>
min( R&& r, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `a, b`: the values to compare
- `r`: the range of values to compare
- `comp`: comparison to apply to the projected elements
- `proj`: projection to apply to the elements

## Notes
Capturing the result of std::ranges::min by reference produces a dangling reference if one of the parameters is a temporary and that parameter is returned:

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <string>
 
int main()
{
    namespace ranges = std::ranges;
    using namespace std::string_view_literals;
 
    std::cout << "smaller of 1 and 9999: " << ranges::min(1, 9999) << '\n'
              << "smaller of 'a', and 'b': '" << ranges::min('a', 'b') << "'\n"
              << "shortest of \"foo\", \"bar\", and \"hello\": \""
              << ranges::min({"foo"sv, "bar"sv, "hello"sv}, {},
                             &std::string_view::size) << "\"\n";
}
```

## See also
- [ranges::max](/cpp/algorithm/ranges/max/)
- [ranges::minmax](/cpp/algorithm/ranges/minmax/)
- [ranges::min_element](/cpp/algorithm/ranges/min_element/)
- [ranges::clamp](/cpp/algorithm/ranges/clamp/)
- [min](/cpp/algorithm/min/)
