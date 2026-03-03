---
title: "std::ranges::range_adaptor_closure"
source_path: "cpp/ranges/range_adaptor_closure"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

std::ranges::range_adaptor_closure is a helper class template for defining a [RangeAdaptorClosureObject](/cpp/named_req/rangeadaptorclosureobject/).

## Declarations
```cpp
template< class D >
requires std::is_object_v<D> && std::same_as<D, std::remove_cv_t<D>>
class range_adaptor_closure {};
```
_(since C++23)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_ranges
202202L
(C++23)
std::ranges::range_adaptor_closure

## Example
```cpp
#include <ranges>
#include <string_view>
 
// Define Slice as a range adaptor closure
struct Slice : std::ranges::range_adaptor_closure<Slice>
{
    std::size_t start = 0;
    std::size_t end = std::string_view::npos;
 
    constexpr std::string_view operator()(std::string_view sv) const
    {
        return sv.substr(start, end - start);
    }
};
 
int main()
{
    constexpr std::string_view str = "01234567";
 
    constexpr Slice slicer{.start = 1, .end = 6};
 
    // use slicer as a normal function object
    constexpr auto sv1 = slicer(str);
    static_assert(sv1 == "12345");
 
    // use slicer as a range adaptor closure object
    constexpr auto sv2 = str | slicer;
    static_assert(sv2 == "12345");
 
    // range adaptor closures can be composed
    constexpr auto slice_and_drop = slicer | std::views::drop(2);
    static_assert(std::string_view(str | slice_and_drop) == "345");
}
```
