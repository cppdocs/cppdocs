---
title: "std::ranges::cbegin"
source_path: "cpp/ranges/cbegin"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

const [std::remove_reference_t](/cpp/types/remove_reference/)<T>& if the argument is an lvalue (i.e. T is an lvalue reference type),

## Declarations
```cpp
inline namespace /* unspecified */ {
inline constexpr /* unspecified */ cbegin = /* unspecified */;
}
```
_(since C++20) (customization point object)_

```cpp
Call signature
```

```cpp
template< class T >
requires /* see below */
constexpr /* see below */ auto cbegin( T&& t );
```
_(since C++20)_

## Notes
For an lvalue range e of type T, ranges::cbegin(e) is equivalent to

[ranges::begin](/cpp/ranges/begin/)([std::as_const](/cpp/utility/as_const/)(e)).

## Example
```cpp
#include <cassert>
#include <ranges>
#include <vector>
 
int main()
{
    std::vector v{3, 1, 4};
    auto vi = std::ranges::cbegin(v);
    assert(3 == *vi);
    ++vi; // OK, constant-iterator object is mutable
    assert(1 == *vi);
    // *vi = 13; // Error: constant-iterator points to an immutable element
 
    int a[]{3, 1, 4};
    auto ai = std::ranges::cbegin(a); // cbegin works with C-arrays as well
    assert(3 == *ai and *(ai + 1) == 1);
    // *ai = 13; // Error: read-only variable is not assignable
}
```

## See also
- [ranges::begin](/cpp/ranges/begin/)
- [begincbegin](/cpp/iterator/begin/)
