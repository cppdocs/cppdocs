---
title: "std::ranges::max"
source_path: "cpp/algorithm/ranges/max"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Returns the greater of the given projected values.

## Declarations
```cpp
Call signature
```

```cpp
template< class T, class Proj = std::identity,
std::indirect_strict_weak_order<
std::projected<const T*, Proj>> Comp = ranges::less >
constexpr const T&
max( const T& a, const T& b, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< std::copyable T, class Proj = std::identity,
std::indirect_strict_weak_order<
std::projected<const T*, Proj>> Comp = ranges::less >
constexpr T
max( std::initializer_list<T> r, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R, class Proj = std::identity,
std::indirect_strict_weak_order<
std::projected<ranges::iterator_t<R>, Proj>> Comp = ranges::less >
requires std::indirectly_copyable_storable<ranges::iterator_t<R>,
ranges::range_value_t<R>*>
constexpr ranges::range_value_t<R>
max( R&& r, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `a, b`: the values to compare
- `r`: the range of values to compare
- `comp`: comparison to apply to the projected elements
- `proj`: projection to apply to the elements

## Notes
Capturing the result of std::ranges::max by reference produces a dangling reference if one of the parameters is a temporary and that parameter is returned:

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <string>
 
static_assert(std::ranges::max({0B10, 0X10, 010, 10}) == 16); // overload (2)
 
int main()
{
    namespace ranges = std::ranges;
    using namespace std::string_view_literals;
 
    std::cout << "larger of 1 and 9999: " << ranges::max(1, 9999) << '\n'
              << "larger of 'a', and 'b': '" << ranges::max('a', 'b') << "'\n"
              << "longest of \"foo\", \"bar\", and \"hello\": \""
              << ranges::max({"foo"sv, "bar"sv, "hello"sv}, {},
                             &std::string_view::size) << "\"\n";
}
```

## See also
- [ranges::min](/cpp/algorithm/ranges/min/)
- [ranges::minmax](/cpp/algorithm/ranges/minmax/)
- [ranges::max_element](/cpp/algorithm/ranges/max_element/)
- [ranges::clamp](/cpp/algorithm/ranges/clamp/)
- [max](/cpp/algorithm/max/)
