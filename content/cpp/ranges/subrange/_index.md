---
title: "std::ranges::subrange"
source_path: "cpp/ranges/subrange"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) The subrange class template combines together an iterator and a sentinel into a single [view](/cpp/ranges/view/). It models [sized_range](/cpp/ranges/sized_range/) whenever the final template parameter is subrange_kind::sized (which happens when [std::sized_sentinel_for](/cpp/iterator/sized_sentinel_for/)<S, I> is satisfied or when size is passed explicitly as a constructor argument).

## Declarations
```cpp
template<
std::input_or_output_iterator I,
std::sentinel_for<I> S = I,
ranges::subrange_kind K = std::sized_sentinel_for<S, I> ?
ranges::subrange_kind::sized :
ranges::subrange_kind::unsized
>
requires (K == ranges::subrange_kind::sized ||
!std::sized_sentinel_for<S, I>)
class subrange
: public ranges::view_interface<subrange<I, S, K>>
```
_(since C++20)_

```cpp
Helper concepts
```

```cpp
template<class From, class To>
concept /*uses-nonqualification-pointer-conversion*/ =
/* see description */;
```
_(exposition only*)_

```cpp
template<class From, class To>
concept /*convertible-to-non-slicing*/ = /* see description */;
```
_(exposition only*)_

## Example
```cpp
#include <map>
#include <print>
#include <ranges>
 
void make_uppercase(char& v)
{
    v += 'A' - 'a';
}
 
void uppercase_transform(std::multimap<int, char>& m, int k)
{
    auto [first, last] = m.equal_range(k);
    for (auto& [_, v] : std::ranges::subrange(first, last))
        make_uppercase(v);
}
 
int main()
{
    std::multimap<int, char> mm{{4, 'a'}, {3, '-'}, {4, 'b'}, {5, '-'}, {4, 'c'}};
    std::println("Before: {}", mm);
    uppercase_transform(mm, 4);
    std::println("After:  {}", mm);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3470 | C++20 | convertible-to-non-slicing might reject qualification conversions | always accepts them |

## See also
- [ranges::view_interface](/cpp/ranges/view_interface/)
- [view](/cpp/ranges/view/)
- [curiously recurring template pattern](/cpp/language/crtp/)
