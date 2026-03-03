---
title: "std::reverse_iterator<Iter>::operator[]"
source_path: "cpp/iterator/reverse_iterator/operator_at"
aliases:
  - "/cpp/iterator/reverse_iterator/operator&/"
category: "iterator"
---

Returns a reference to the element at specified relative location.

## Declarations
```cpp
/* unspecified */ operator[]( difference_type n ) const;
```
_(constexpr since C++17)_

## Parameters
- `n`: position relative to current location

## Return value
[current](/cpp/iterator/reverse_iterator/#current)[-n - 1]

## Notes
The return type was changed by [LWG issue 386](https://cplusplus.github.io/LWG/issue386) to be unspecified because the return type of the underlying iterator's operator[] was also unspecified at the time.

However, as of [N3066](https://wg21.link/N3066), the return type of a [LegacyRandomAccessIterator](/cpp/named_req/randomaccessiterator/)'s operator[] is required to be convertible to reference. In all common implementations, the return type is declared to be reference. See also [LWG issue 2595](https://cplusplus.github.io/LWG/issue2595).

## Example
```cpp
#include <array>
#include <cstddef>
#include <iostream>
#include <iterator>
#include <list>
#include <vector>
 
int main()
{
    int a[]{0, 1, 2, 3};
    std::reverse_iterator<int*> iter1{std::rbegin(a)};
    for (std::size_t i{}; i != std::size(a); ++i)
        std::cout << iter1[i] << ' '; // decltype(iter1[i]) is int&
    std::cout << '\n';
 
    std::vector v{0, 1, 2, 3};
    std::reverse_iterator<std::vector<int>::iterator> iter2{std::rbegin(v)};
    for (std::size_t i{}; i != std::size(v); ++i)
        std::cout << iter2[i] << ' '; // decltype(iter2[i]) is int&
    std::cout << '\n';
 
    // constexpr context
    constexpr static std::array<int, 4> z{0, 1, 2, 3};
    constexpr std::reverse_iterator<decltype(z)::const_iterator> iter3{std::crbegin(z)};
    static_assert(iter3[1] == 2);
 
    std::list li{0, 1, 2, 3};
    std::reverse_iterator<std::list<int>::iterator> iter4{std::rbegin(li)};
    *iter4 = 42;   // OK
//  iter4[0] = 13; // Compilation error: the underlying iterator
                   // does not model the random access iterator
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 386 | C++98 | the return type was reference | made unspecified |

## See also
- [operator*operator->](/cpp/iterator/reverse_iterator/operator/)
