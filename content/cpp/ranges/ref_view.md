---
title: "std::ranges::ref_view"
source_path: "cpp/ranges/ref_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

ref_view is a [view](/cpp/ranges/view/) of the elements of some other [range](/cpp/ranges/range/). It wraps a reference to that range.

## Declarations
```cpp
template< ranges::range R >
requires std::is_object_v<R>
class ref_view
: public ranges::view_interface<ref_view<R>>
```
_(since C++20)_

## Parameters
- `t`: range to reference

## Example
```cpp
#include <iostream>
#include <ranges>
 
int main()
{
    const std::string s{"cosmos"};
 
    const std::ranges::take_view tv{s, 3};
    const std::ranges::ref_view rv{tv};
 
    std::cout
        << std::boolalpha
        << "call empty() : " << rv.empty() << '\n'
        << "call size()  : " << rv.size() << '\n'
        << "call begin() : " << *rv.begin() << '\n'
        << "call end()   : " << *(rv.end() - 1) << '\n'
        << "call data()  : " << rv.data() << '\n'
        << "call base()  : " << rv.base().size() << '\n' // ~> tv.size()
        << "range-for    : ";
 
    for (const auto c : rv)
        std::cout << c;
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2325R3 | C++20 | default constructor was provided as viewmust be default_initializable | removed along with the requirement |

## See also
- [reference_wrapper](/cpp/utility/functional/reference_wrapper/)
- [CopyConstructible](/cpp/named_req/copyconstructible/)
- [CopyAssignable](/cpp/named_req/copyassignable/)
- [ranges::owning_view](/cpp/ranges/owning_view/)
- [view](/cpp/ranges/view/)
- [range](/cpp/ranges/range/)
- [views::all_tviews::all](/cpp/ranges/all_view/)
- [view](/cpp/ranges/view/)
- [range](/cpp/ranges/range/)
