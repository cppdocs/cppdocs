---
title: "std::remove_extent"
source_path: "cpp/types/remove_extent"
header: "<type_traits>"
category: "types"
since: "C++11"
---

If T is an array of some type X, provides the member typedef type equal to X, otherwise type is T. Note that if T is a multidimensional array, only the first dimension is removed.

## Declarations
```cpp
template< class T >
struct remove_extent;
```
_(since C++11)_

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <type_traits>
 
template<class A>
    std::enable_if_t<std::rank_v<A> == 1>
print_1d(const A& a)
{
    std::copy(a, a + std::extent_v<A>,
        std::ostream_iterator<std::remove_extent_t<A>>(std::cout, " "));
    std::cout << '\n';
}
 
int main()
{
    int a[][3] = {{1, 2, 3}, {4, 5, 6}};
//  print_1d(a); // compile-time error
    print_1d(a[1]);
}
```

## See also
- [is_array](/cpp/types/is_array/)
- [rank](/cpp/types/rank/)
- [extent](/cpp/types/extent/)
- [remove_all_extents](/cpp/types/remove_all_extents/)
