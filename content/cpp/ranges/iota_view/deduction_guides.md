---
title: "deduction guides for std::ranges::iota_view"
source_path: "cpp/ranges/iota_view/deduction_guides"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

This [deduction guide](/cpp/language/ctad/) is provided for [iota_view](/cpp/ranges/iota_view/) to allow deduction from an initial value and a bounding value.

## Declarations
```cpp
template< class W, class Bound >
requires (!/*is-integer-like*/<W> ||
!/*is-integer-like*/<Bound> ||
/*is-signed-integer-like*/<W> == /*is-signed-integer-like*/<Bound>)
iota_view( W, Bound ) -> iota_view<W, Bound>;
```
_(since C++20)_

## Example
```cpp
#include <cassert>
#include <ranges>
 
int main()
{
    auto io = std::ranges::iota_view(1L, 7L); // deduces W and Bound as “long”
    assert(io.front() == 1L and io.back() == 6L);
}
```
