---
title: "std::span"
source_path: "cpp/container/span"
header: "<span>"
since: "C++20"
---

The class template span describes an object that can refer to a contiguous sequence of objects with the first element of the sequence at position zero. A span can either have a static extent, in which case the number of elements in the sequence is known at compile-time and encoded in the type, or a dynamic extent.

## Declarations
```cpp
template<
class T,
std::size_t Extent = std::dynamic_extent
> class span;
```
_(since C++20)_

## Notes
Specializations of std::span are already trivially copyable types in all existing implementations, even before the formal requirement introduced in C++23.

## Example
```cpp
#include <algorithm>
#include <cstddef>
#include <iostream>
#include <span>
 
template<class T, std::size_t N>
[[nodiscard]]
constexpr auto slide(std::span<T, N> s, std::size_t offset, std::size_t width)
{
    return s.subspan(offset, offset + width <= s.size() ? width : 0U);
}
 
template<class T, std::size_t N, std::size_t M>
constexpr bool starts_with(std::span<T, N> data, std::span<T, M> prefix)
{
    return data.size() >= prefix.size()
        && std::equal(prefix.begin(), prefix.end(), data.begin());
}
 
template<class T, std::size_t N, std::size_t M>
constexpr bool ends_with(std::span<T, N> data, std::span<T, M> suffix)
{
    return data.size() >= suffix.size()
        && std::equal(data.end() - suffix.size(), data.end(),
                      suffix.end() - suffix.size());
}
 
template<class T, std::size_t N, std::size_t M>
constexpr bool contains(std::span<T, N> span, std::span<T, M> sub)
{
    return std::ranges::search(span, sub).begin() != span.end();
}
 
void println(const auto& seq)
{
    for (const auto& elem : seq)
        std::cout << elem << ' ';
    std::cout << '\n';
}
 
int main()
{
    constexpr int a[]{0, 1, 2, 3, 4, 5, 6, 7, 8};
    constexpr int b[]{8, 7, 6};
    constexpr static std::size_t width{6};
 
    for (std::size_t offset{}; ; ++offset)
        if (auto s = slide(std::span{a}, offset, width); !s.empty())
            println(s);
        else
            break;
 
    static_assert(""
        && starts_with(std::span{a}, std::span{a, 4})
        && starts_with(std::span{a + 1, 4}, std::span{a + 1, 3})
        && !starts_with(std::span{a}, std::span{b})
        && !starts_with(std::span{a, 8}, std::span{a + 1, 3})
        && ends_with(std::span{a}, std::span{a + 6, 3})
        && !ends_with(std::span{a}, std::span{a + 6, 2})
        && contains(std::span{a}, std::span{a + 1, 4})
        && !contains(std::span{a, 8}, std::span{a, 9})
    );
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3203 | C++20 | it was unclear when the pointers, iterators, andreferences to elements of span are invalidated | made clear |
| LWG 3903 | C++20 | the declaration of span's destructor was unnecessary | removed the declaration |
| P2325R3 | C++20 | a span of non-zero static extents was not a view | any span is a view |

## See also
- [mdspan](/cpp/container/mdspan/)
- [ranges::subrange](/cpp/ranges/subrange/)
- [view](/cpp/ranges/view/)
- [initializer_list](/cpp/utility/initializer_list/)
- [list-initialization](/cpp/language/list_initialization/)
- [basic_string_view](/cpp/string/basic_string_view/)
