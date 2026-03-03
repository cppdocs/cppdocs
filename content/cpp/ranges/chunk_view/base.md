---
title: "std::ranges::chunk_view<V>::base"
source_path: "cpp/ranges/chunk_view/base"
category: "ranges"
since: "C++23"
---

Returns a copy of the underlying view.

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
#include <print>
#include <ranges>
 
int main()
{
    static constexpr auto v = {1, 2, 3, 4};
    constexpr auto w{std::ranges::chunk_view(v, 2)};
    std::println("{}", w.base());
}
```
