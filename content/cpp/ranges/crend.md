---
title: "std::ranges::crend"
source_path: "cpp/ranges/crend"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

Returns a sentinelfor the constant iterator(since C++23) indicating the end of a const-qualified(until C++23) range that is treated as a reversed sequence.

## Declarations
```cpp
inline namespace /* unspecified */ {
inline constexpr /* unspecified */ crend = /* unspecified */;
}
```
_(since C++20) (customization point object)_

```cpp
Call signature
```

```cpp
template< class T >
requires /* see below */
constexpr /* see below */ auto crend( T&& t );
```
_(since C++20)_

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    int a[]{4, 6, -3, 9, 10};
    std::cout << "Array backwards: ";
    namespace ranges = std::ranges;
    ranges::copy(ranges::rbegin(a), ranges::rend(a),
                 std::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
 
    std::cout << "Vector backwards: ";
    std::vector v{4, 6, -3, 9, 10};
    ranges::copy(ranges::rbegin(v), ranges::rend(v),
                 std::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
}
```

## See also
- [ranges::rend](/cpp/ranges/rend/)
- [rendcrend](/cpp/iterator/rend/)
