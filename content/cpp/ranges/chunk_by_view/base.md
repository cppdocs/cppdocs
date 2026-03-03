---
title: "std::ranges::chunk_by_view<V,Pred>::base"
source_path: "cpp/ranges/chunk_by_view/base"
category: "ranges"
since: "C++23"
---

Returns a copy of the underlying view [base_](/cpp/ranges/chunk_by_view/#base).

## Declarations
```cpp
constexpr V base() const& requires std::copy_constructible<V>;
```
_(since C++23)_

```cpp
constexpr V base() &&;
```
_(since C++23)_

## Return value
A copy of the underlying view.

## Example
```cpp
#include <algorithm>
#include <functional>
#include <ranges>
 
int main()
{
    static constexpr auto v = {1, 1, 2, 2, 3, 3, 3};
    constexpr auto chunks = v | std::views::chunk_by(std::equal_to{});
    static_assert(std::ranges::equal(v, chunks.base()));
}
```
