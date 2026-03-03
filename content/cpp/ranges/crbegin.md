---
title: "std::ranges::crbegin"
source_path: "cpp/ranges/crbegin"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

const [std::remove_reference_t](/cpp/types/remove_reference/)<T>& if the argument is an lvalue (i.e. T is an lvalue reference type),

## Declarations
```cpp
inline namespace /* unspecified */ {
inline constexpr /* unspecified */ crbegin = /* unspecified */;
}
```
_(since C++20) (customization point object)_

```cpp
Call signature
```

```cpp
template< class T >
requires /* see below */
constexpr /* see below */ auto crbegin( T&& t );
```
_(since C++20)_

## Example
```cpp
#include <cassert>
#include <iterator>
#include <span>
#include <vector>
 
int main()
{
    std::vector<int> v{3, 1, 4};
    auto vi = std::ranges::crbegin(v);
    assert(*vi == 4);
    ++vi; // OK, iterator object is mutable
    assert(*vi == 1);
    // *vi = 13; // Error: underlying element is read-only
 
    int a[]{-5, 10, 15};
    auto ai = std::ranges::crbegin(a);
    assert(*ai == 15);
 
    // auto x_x = std::ranges::crbegin(std::vector<int>{6, 6, 6});
    // ill-formed: the argument is an rvalue (see Notes ↑)
 
    auto si = std::ranges::crbegin(std::span{a}); // OK
    assert(*si == 15);
    static_assert
    (
        std::ranges::enable_borrowed_range<std::remove_cv_t<decltype(std::span{a})>>
    );
}
```

## See also
- [ranges::rbegin](/cpp/ranges/rbegin/)
- [rbegincrbegin](/cpp/iterator/rbegin/)
