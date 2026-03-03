---
title: "std::reverse_iterator<Iter>::reverse_iterator"
source_path: "cpp/iterator/reverse_iterator/reverse_iterator"
category: "iterator"
---

Constructs a new reverse_iterator.

## Declarations
```cpp
reverse_iterator();
```
_(constexpr since C++17)_

```cpp
explicit reverse_iterator( iterator_type x );
```
_(constexpr since C++17)_

```cpp
template< class U >
reverse_iterator( const reverse_iterator<U>& other );
```
_(constexpr since C++17)_

## Parameters
- `x`: iterator to adapt
- `other`: iterator adaptor to copy

## Example
```cpp
#include <cassert>
#include <concepts>
#include <iterator>
#include <vector>
 
int main()
{
    std::vector v{0, 1, 2, 3, 4};
 
    using ReverseIt = std::reverse_iterator<std::vector<int>::const_iterator>;
 
    ReverseIt i1; // overload (1)
    i1 = v.crbegin();
    assert(*i1 == 4);
 
    ReverseIt i2(i1); // overload (2)
    assert(i2[0] == 4);
 
    int x[]{1, 2, 3};
    auto i3 = std::reverse_iterator<int*>(x + std::size(x)); // overload (1)
    i3[0] = -3;
    assert(x[2] == -3);
    std::reverse_iterator<int const*> i4(i3); // overload (3): int => const int
    static_assert(std::convertible_to<decltype(i3)::value_type,
                                      decltype(i4)::value_type>);
    // i4[0] = 5; // Error: assignment of read-only location
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 235 | C++98 | the effect of overload (1) was not specified | specified |
| LWG 1012 | C++98 | overload (1) default-initialized current | it is value-initialized |
| LWG 3435 | C++20 | overload (3) was not constrained | constrained |

## See also
- [operator=](/cpp/iterator/reverse_iterator/operator/)
- [make_reverse_iterator](/cpp/iterator/make_reverse_iterator/)
- [std::reverse_iterator](/cpp/iterator/reverse_iterator/)
