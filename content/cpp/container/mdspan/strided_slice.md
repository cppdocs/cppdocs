---
title: "std::strided_slice"
source_path: "cpp/container/mdspan/strided_slice"
header: "<mdspan>"
category: "container"
since: "C++26"
---

An instance of every specialization of strided_slice is a slice specifier used in std::submdspan to select a subset of elements using a set of regularly spaced indices at a specified dimension in [std::mdspan](/cpp/container/mdspan/).

## Declarations
```cpp
template< class OffsetType, class ExtentType, class StrideType >
struct strided_slice;
```
_(since C++26)_

## Notes
Every specialization of strided_slice is an aggregate class which allows [aggregate initialization](/cpp/language/aggregate_initialization/) (including designated initialization) of data members (for instance, std::strided_slice{.offset = 2, .extent = 10, .stride = 3}).

The slice specification of strided_slice takes advantage of the data member extent, as opposed to other slice specifications that use end to indicate the upper bound value. This is because it can directly generate a static extent for subview of std::mdspan if both extent and stride are of types that satisfy [integral-constant-like](/cpp/header/span/#Concept_integral-constant-like). This enables efficient extraction of subviews with static extents by mixing compile time values with a runtime value of offset.

## Example
```cpp
#include <mdspan>
#include <print>
 
template <typename View, typename O = int, typename E = int, typename S = int>
    requires (View::extents_type::rank() == 1)
void print_sliced_view(View v, std::strided_slice<O, E, S> s)
{
    using index_type = View::index_type;
    auto subview = std::submdspan(v, s);
    const auto& submap = subview.mapping();
 
    std::print("[");
    bool uses_comma = false;
    for (index_type i = 0; i != subview.extent(0); ++i)
    {
        if (uses_comma)
            std::print(", ");
        std::print("{}", subview[i]);
        uses_comma = true;
    }
    uses_comma = false;
    std::print("] extracted from indices [");
    for (index_type i = 0; i != subview.extent(0); ++i)
    {
        if (uses_comma)
            std::print(", ");
        std::print("{}", submap(i) + s.offset);
        uses_comma = true;
    }
    std::println("]");
}
 
int main()
{
    static constexpr char letters[]
    {
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
    };
    constexpr std::mdspan md(letters, 26);
    print_sliced_view(md, {.offset = 0, .extent = 10, .stride = 1});
    print_sliced_view(md, {.offset = 2, .extent = 10, .stride = 1});
    print_sliced_view(md, {.offset = 0, .extent = 5,  .stride = 1});
    print_sliced_view(md, {.offset = 2, .extent = 5,  .stride = 1});
    print_sliced_view(md, {.offset = 0, .extent = 10, .stride = 2});
    print_sliced_view(md, {.offset = 2, .extent = 10, .stride = 3});
    print_sliced_view(md, {.offset = 0, .extent = 15, .stride = 5});
    print_sliced_view(md, {.offset = 6, .extent = 15, .stride = 5});
}
```

## See also
- [slice](/cpp/numeric/valarray/slice/)
