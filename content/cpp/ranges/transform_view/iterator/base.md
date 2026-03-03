---
title: "std::ranges::transform_view<V,F>::iterator<Const>::base"
source_path: "cpp/ranges/transform_view/iterator/base"
category: "ranges"
since: "C++20"
---

Returns the underlying iterator.

## Declarations
```cpp
constexpr const ranges::iterator_t<Base>& base() const & noexcept;
```
_(since C++20)_

```cpp
constexpr ranges::iterator_t<Base> base() &&;
```
_(since C++20)_

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <ranges>
 
int main()
{
    const auto v = { 0, 1, 2, 3, 4 };
    auto x2 = [](int x) { return x << 1; };
    std::ranges::transform_view tv{ v, x2 };
    std::ostream_iterator<int> ostr{ std::cout, " " };
 
    std::ranges::copy(v, ostr), std::cout << '\n';
    std::ranges::copy(tv.base(), ostr), std::cout << '\n';
    std::ranges::copy(tv, ostr), std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3533 | C++20 | the const& overload of base returns a copy of the underlying iterator | returns a reference |
| LWG 3593 | C++20 | the const& overload of base might not be noexcept | made noexcept |
