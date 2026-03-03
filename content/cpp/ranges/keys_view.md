---
title: "std::ranges::views::keys, std::ranges::keys_view"
source_path: "cpp/ranges/keys_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

Takes a [view](/cpp/ranges/view/) of tuple-like values (e.g. [std::tuple](/cpp/utility/tuple/) or [std::pair](/cpp/utility/pair/)), and produces a view with a value-type of the first element of the adapted view's value-type.

## Declarations
```cpp
template< class R >
using keys_view = ranges::elements_view<R, 0>;
```
_(since C++20)_

```cpp
namespace views {
inline constexpr auto keys = ranges::elements<0>;
}
```
_(since C++20)_

## Notes
keys_view can be useful for extracting keys from associative containers, e.g.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <locale>
#include <ranges>
#include <string>
#include <tuple>
#include <vector>
 
int main()
{
    const std::vector<std::tuple<std::string, double, bool>> quark_mass_charge
    {
        // name, MeV/c², has positive electric-charge:
        {"up", 2.3, true}, {"down", 4.8, false},
        {"charm", 1275, true}, {"strange", 95, false},
        {"top", 173'210, true}, {"bottom", 4'180, false},
    };
 
    std::cout.imbue(std::locale("en_US.utf8"));
    std::cout << "Quark name:  │ ";
    for (std::string const& name : std::views::keys(quark_mass_charge))
        std::cout << std::setw(9) << name << " │ ";
 
    std::cout << "\n" "Mass MeV/c²: │ ";
    for (const double mass : std::views::values(quark_mass_charge))
        std::cout << std::setw(9) << mass << " │ ";
 
    std::cout << "\n" "E-charge:    │ ";
    for (const bool pos : std::views::elements<2>(quark_mass_charge))
        std::cout << std::setw(9) << (pos ? "+2/3" : "-1/3") << " │ ";
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3563 | C++20 | keys_view is unable to participate in CTAD due to its use of views::all_t | views::all_t removed |

## See also
- [ranges::values_viewviews::values](/cpp/ranges/values_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::elements_viewviews::elements](/cpp/ranges/elements_view/)
- [view](/cpp/ranges/view/)
- [tuple-like](/cpp/utility/tuple/tuple-like/)
- [view](/cpp/ranges/view/)
- [slice](/cpp/numeric/valarray/slice/)
