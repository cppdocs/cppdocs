---
title: "std::ranges::view_interface<D>::data"
source_path: "cpp/ranges/view_interface/data"
category: "ranges"
since: "C++20"
---

The default implementation of data() member function obtains the address denoted by the beginning iterator via std::to_address, which is also the lowest address of the contiguous storage (implied by [contiguous_iterator](/cpp/iterator/contiguous_iterator/)) referenced by the view of the derived type when the view is not empty.

## Declarations
```cpp
constexpr auto data()
requires std::contiguous_iterator<ranges::iterator_t<D>>;
```
_(since C++20)_

```cpp
constexpr auto data() const
requires ranges::range<const D> &&
std::contiguous_iterator<ranges::iterator_t<const D>>;
```
_(since C++20)_

## Return value
The address denoted by the beginning iterator.

## Notes
Following derived types may use the default implementation of data():

Following types are derived from [std::ranges::view_interface](/cpp/ranges/view_interface/) and do not declare their own data() member function, but they cannot use the default implementation, because their iterator types never satisfy [contiguous_iterator](/cpp/iterator/contiguous_iterator/):

## Example
```cpp
#include <array>
#include <iostream>
#include <ranges>
#include <string_view>
 
int main() {
    constexpr std::string_view str { "Hello, C++20!" };
    std::cout << (str | std::views::drop(7)).data() << '\n';
    constexpr static std::array a { 1,2,3,4,5 };
    constexpr auto v { a | std::views::take(3) };
    static_assert( &a[0] == v.data() );
}
```

## See also
- [data](/cpp/iterator/data/)
- [ranges::data](/cpp/ranges/data/)
- [ranges::cdata](/cpp/ranges/cdata/)
- [to_address](/cpp/memory/to_address/)
