---
title: "std::ranges::chunk_view<V>::size"
source_path: "cpp/ranges/chunk_view/size"
category: "ranges"
since: "C++23"
---

Returns the number of elements, which is the smallest integer value that is not less than the quotient of dividing the size of underlying view [base_](/cpp/ranges/chunk_view/#Data_members) by the underlying data member [n_](/cpp/ranges/chunk_view/#Data_members), that holds the number passed to the constructor (0 if default constructed). Equivalent to

## Declarations
```cpp
constexpr auto size() requires ranges::sized_range<V>;
```
_(since C++23)_

```cpp
constexpr auto size() const requires ranges::sized_range<const V>;
```
_(since C++23)_

## Return value
The number of elements.

## Example
```cpp
#include <ranges>
 
int main()
{
    constexpr static auto v = {1, 2, 3, 4, 5};
    constexpr auto w{ std::ranges::chunk_view(v, 2) };
    static_assert(w.size() == (5 / 2 + (5 % 2 ? 1 : 0)));
}
```

## See also
- [ranges::size](/cpp/ranges/size/)
- [ranges::ssize](/cpp/ranges/ssize/)
