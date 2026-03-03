---
title: "std::ranges::iota_view<W, Bound>::iota_view"
source_path: "cpp/ranges/iota_view/iota_view"
category: "ranges"
since: "C++20"
---

Constructs an [iota_view](/cpp/ranges/iota_view/).

## Declarations
```cpp
iota_view() requires std::default_initializable<W> = default;
```
_(since C++20)_

```cpp
constexpr explicit iota_view( W value );
```
_(since C++20)_

```cpp
constexpr explicit iota_view( std::type_identity_t<W> value,
std::type_identity_t<Bound> bound );
```
_(since C++20)_

```cpp
constexpr explicit iota_view( /*iterator*/ first, /* see below */ last );
```
_(since C++20)_

## Parameters
- `value`: the starting value
- `bound`: the bound
- `first`: the iterator denoting the starting value
- `last`: the iterator or sentinel denoting the bound

## Example
```cpp
#include <cassert>
#include <iostream>
#include <iterator>
#include <ranges>
 
int main()
{
    const auto l = {1, 2, 3, 4};
 
    auto i1 = std::ranges::iota_view<int, int>(); // overload (1)
    assert(i1.empty() and i1.size() == 0);
 
    auto i2 = std::ranges::iota_view(1); // overload (2)
    assert(not i2.empty() and i2.front() == 1);
    for (std::cout << "1) "; auto e : i2 | std::views::take(3))
        std::cout << e << ' ';
    std::cout << '\n';
 
    auto i3 = std::ranges::iota_view(std::begin(l)); // overload (2)
    assert(not i3.empty() and i3.front() == l.begin());
    for (std::cout << "2) "; auto e : i3 | std::views::take(4))
        std::cout << *e << ' ';
    std::cout << '\n';
 
    auto i4 = std::ranges::iota_view(1, 8); // overload (3)
    assert(not i4.empty() and i4.front() == 1 and i4.back() == 7);
    for (std::cout << "3) "; auto e : i4)
        std::cout << e << ' ';
    std::cout << '\n';
 
    auto i5 = std::ranges::iota_view(l.begin(), l.end()); // overload (4)
    for (std::cout << "4) "; auto e : i5)
        std::cout << *e << ' ';
    std::cout << '\n';
 
    auto i6 = std::ranges::iota_view(l.begin(), std::unreachable_sentinel); // (4)
    for (std::cout << "5) "; auto e : i6 | std::views::take(3))
        std::cout << *e << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3523 | C++20 | overload (4) might use wrong sentinel type | corrected |
| P2711R1 | C++20 | overloads (3,4) were not explicit | made explicit |
