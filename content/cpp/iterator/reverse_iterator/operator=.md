---
title: "std::reverse_iterator<Iter>::operator="
source_path: "cpp/iterator/reverse_iterator/operator"
category: "iterator"
---

Assigns other.[current](/cpp/iterator/reverse_iterator/#current) to [current](/cpp/iterator/reverse_iterator/#current).

## Declarations
```cpp
template< class U >
reverse_iterator& operator=( const reverse_iterator<U>& other );
```
_(constexpr since C++17)_

## Parameters
- `other`: iterator adaptor to assign

## Return value
*this

## Example
```cpp
#include <iostream>
#include <iterator>
 
int main()
{
    const int a1[]{0, 1, 2};
    int a2[]{0, 1, 2, 3};
    short a3[]{40, 41, 42};
 
    std::reverse_iterator<const int*> it1{std::crbegin(a1)};
    it1 = std::reverse_iterator<int*>{std::rbegin(a2)};   // OK
//  it1 = std::reverse_iterator<short*>{std::rbegin(a3)}; // Compilation error:
                                                          // incompatible pointer types
    std::reverse_iterator<const short*> it2{nullptr};
    it2 = std::rbegin(a3); // OK
//  it2 = std::begin(a3);  // Compilation error: no viable operator= overload
    std::cout << *it2 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 280 | C++98 | heterogeneous assignment was not allowed | allowed |
| LWG 3435 | C++20 | the converting assignment operator was not constrained | constrained |

## See also
- [(constructor)](/cpp/iterator/reverse_iterator/reverse_iterator/)
