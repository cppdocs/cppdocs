---
title: "std::ranges::contiguous_range"
source_path: "cpp/ranges/contiguous_range"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

The contiguous_range concept is a refinement of [range](/cpp/ranges/range/) for which ranges::begin returns a model of [contiguous_iterator](/cpp/iterator/contiguous_iterator/) and the customization point ranges::data is usable.

## Declarations
```cpp
template< class T >
concept contiguous_range =
ranges::random_access_range<T> &&
std::contiguous_iterator<ranges::iterator_t<T>> &&
requires(T& t) {
{ ranges::data(t) } ->
std::same_as<std::add_pointer_t<ranges::range_reference_t<T>>>;
};
```
_(since C++20)_

## Example
```cpp
#include <array>
#include <deque>
#include <list>
#include <mdspan>
#include <ranges>
#include <set>
#include <span>
#include <string_view>
#include <valarray>
#include <vector>
 
template<typename T>
concept CR = std::ranges::contiguous_range<T>;
 
// zstring being a ranges::contiguous_range doesn't have to be a ranges::sized_range
struct zstring
{
    struct sentinel
    {
        friend constexpr bool operator==(const char* str, sentinel) noexcept
        { return *str == '\0'; }
    };
 
    const char* str;
 
    const char* begin() const noexcept { return str; }
    sentinel end() const noexcept { return {}; }
};
 
int main()
{
    int a[4];
    static_assert(
            CR<std::vector<int>> and
        not CR<std::vector<bool>> and
        not CR<std::deque<int>> and
            CR<std::valarray<int>> and
            CR<decltype(a)> and
        not CR<std::list<int>> and
        not CR<std::set<int>> and
            CR<std::array<std::list<int>,42>> and
            CR<std::string_view> and
            CR<zstring> and
            CR<std::span<const int>> and
        not CR<std::mdspan<int, std::dims<1>>>
    );
}
```

## See also
- [ranges::sized_range](/cpp/ranges/sized_range/)
- [ranges::random_access_range](/cpp/ranges/random_access_range/)
- [random_access_iterator](/cpp/iterator/random_access_iterator/)
