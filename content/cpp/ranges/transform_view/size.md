---
title: "std::ranges::transform_view<V,F>::size"
source_path: "cpp/ranges/transform_view/size"
category: "ranges"
since: "C++20"
---

Returns the number of elements.

## Declarations
```cpp
constexpr auto size() requires ranges::sized_range<V>;
```
_(since C++20)_

```cpp
constexpr auto size() const requires ranges::sized_range<const V>;
```
_(since C++20)_

## Return value
The number of elements.

## Notes
If V does not model [forward_range](/cpp/ranges/forward_range/), size() might not be well-defined after a call to [begin()](/cpp/ranges/transform_view/begin/).

## Example
```cpp
#include <cassert>
#include <cctype>
#include <iostream>
#include <ranges>
#include <string>
 
int main()
{
    std::string s{"The length of this string is 42 characters"};
    auto to_upper = [](unsigned char c) -> char { return std::toupper(c); };
    auto tv = std::ranges::transform_view{s, to_upper};
    assert(tv.size() == 42);
    for (auto x : tv)
        std::cout << x;
}
```

## See also
- [ranges::size](/cpp/ranges/size/)
- [ranges::ssize](/cpp/ranges/ssize/)
