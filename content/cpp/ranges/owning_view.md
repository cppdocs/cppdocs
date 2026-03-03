---
title: "std::ranges::owning_view"
source_path: "cpp/ranges/owning_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

owning_view is a [view](/cpp/ranges/view/) that has unique ownership of a [range](/cpp/ranges/range/). It is move-only and stores that range within it.

## Declarations
```cpp
template< ranges::range R >
requires std::movable<R> && (!/*is-initializer-list*/<R>)
class owning_view
: public ranges::view_interface<owning_view<R>>
```
_(since C++20)_

## Parameters
- `other`: another owning_view to move from
- `t`: range to move from

## Return value
*this

## Example
```cpp
#include <cassert>
#include <iostream>
#include <ranges>
#include <string>
 
int main()
{
    using namespace std::literals;
    std::ranges::owning_view ov{"cosmos"s}; // the deduced type of R is std::string;
                                            // `ov` is the only owner of this string
    assert(
        ov.empty() == false &&
        ov.size() == 6 &&
        ov.size() == ov.base().size() &&
        ov.front() == 'c' &&
        ov.front() == *ov.begin() &&
        ov.back() == 's' &&
        ov.back() == *(ov.end() - 1) &&
        ov.data() == ov.base()
    );
 
    std::cout << "sizeof(ov): " << sizeof ov << '\n' // typically equal to sizeof(R)
              << "range-for: ";
    for (const char ch : ov)
        std::cout << ch;
    std::cout << '\n';
 
    std::ranges::owning_view<std::string> ov2;
    assert(ov2.empty());
//  ov2 = ov; // compile-time error: copy assignment operator is deleted
    ov2 = std::move(ov); // OK
    assert(ov2.size() == 6);
}
```

## See also
- [ranges::ref_view](/cpp/ranges/ref_view/)
- [view](/cpp/ranges/view/)
- [range](/cpp/ranges/range/)
- [views::all_tviews::all](/cpp/ranges/all_view/)
- [view](/cpp/ranges/view/)
- [range](/cpp/ranges/range/)
