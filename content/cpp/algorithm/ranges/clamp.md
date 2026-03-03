---
title: "std::ranges::clamp"
source_path: "cpp/algorithm/ranges/clamp"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

If the value of v is within [lo,hi], returns v; otherwise returns the nearest boundary.

## Declarations
```cpp
Call signature
```

```cpp
template< class T, class Proj = std::identity,
std::indirect_strict_weak_order<std::projected<const T*, Proj>> Comp =
ranges::less >
constexpr const T&
clamp( const T& v, const T& lo, const T& hi, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `v`: the value to clamp
- `lo, hi`: the boundaries to clamp v to
- `comp`: the comparison to apply to the projected elements
- `proj`: the projection to apply to v, lo and hi

## Return value
Reference to lo if the projected value of v is less than the projected value of lo, reference to hi if the projected value of hi is less than the projected value of v, otherwise reference to v.

## Notes
If v compares equivalent to either bound, returns a reference to v, not the bound.

This function should not be used with both a projection the returns by value and comparator that takes arguments by value unless a move from the projection result type to the comparator parameter type is equivalent to a copy. If the comparison via [std::invoke](/cpp/utility/functional/invoke/) would change the result of projection, the behavior is undefined due to [the semantic requirements of std::regular_invocable](/cpp/concepts/invocable/) (subsumed by [std::indirect_strict_weak_order](/cpp/iterator/indirect_strict_weak_order/)).

The standard requires that the value category of the result of the projection be preserved, and proj can only be called on v once, which means that a projection result that is a prvalue has to be cached and moved from twice for the two calls to the comparator.

## Example
```cpp
#include <algorithm>
#include <cstdint>
#include <iomanip>
#include <iostream>
#include <string>
 
using namespace std::literals;
namespace ranges = std::ranges;
 
int main()
{
    std::cout << "[raw] [" << INT8_MIN << ',' << INT8_MAX << "] "
                 "[0" << ',' << UINT8_MAX << "]\n";
    for (int const v : {-129, -128, -1, 0, 42, 127, 128, 255, 256})
        std::cout << std::setw(4) << v
                  << std::setw(11) << ranges::clamp(v, INT8_MIN, INT8_MAX)
                  << std::setw(8) << ranges::clamp(v, 0, UINT8_MAX) << '\n';
    std::cout << std::string(23, '-') << '\n';
 
    // Projection function
    const auto stoi = [](std::string s) { return std::stoi(s); };
 
    // Same as above, but with strings
    for (std::string const v : {"-129", "-128", "-1", "0", "42",
                                "127", "128", "255", "256"})
        std::cout << std::setw(4) << v
                  << std::setw(11) << ranges::clamp(v, "-128"s, "127"s, {}, stoi)
                  << std::setw(8) << ranges::clamp(v, "0"s, "255"s, {}, stoi)
                  << '\n';
}
```

## See also
- [ranges::min](/cpp/algorithm/ranges/min/)
- [ranges::max](/cpp/algorithm/ranges/max/)
- [in_range](/cpp/utility/in_range/)
- [clamp](/cpp/algorithm/clamp/)
