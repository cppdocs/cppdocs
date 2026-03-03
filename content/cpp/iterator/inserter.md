---
title: "std::inserter"
source_path: "cpp/iterator/inserter"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

inserter is a convenience function template that constructs a [std::insert_iterator](/cpp/iterator/insert_iterator/) for the container c and its iterator i with the type deduced from the type of the argument.

## Declarations
```cpp
template< class Container >
std::insert_iterator<Container>
inserter( Container& c, typename Container::iterator i );
```
_(until C++20)_

```cpp
template< class Container >
constexpr std::insert_iterator<Container>
inserter( Container& c, ranges::iterator_t<Container> i );
```
_(since C++20)_

## Parameters
- `c`: container that supports an insert operation
- `i`: iterator in c indicating the insertion position

## Return value
A [std::insert_iterator](/cpp/iterator/insert_iterator/) which can be used to insert elements into the container c at the position indicated by i.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <set>
#include <vector>
 
int main()
{
    std::multiset<int> s{1, 2, 3};
 
    // std::inserter is commonly used with multi-sets
    std::fill_n(std::inserter(s, s.end()), 5, 2);
 
    for (int n : s)
        std::cout << n << ' ';
    std::cout << '\n';
 
    std::vector<int> d{100, 200, 300};
    std::vector<int> v{1, 2, 3, 4, 5};
 
    // when inserting in a sequence container, insertion point advances
    // because each std::insert_iterator::operator= updates the target iterator
    std::copy(d.begin(), d.end(), std::inserter(v, std::next(v.begin())));
 
    for (int n : v)
        std::cout << n << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 561 | C++98 | the type of i was independent of Container | it is the iterator type of Container |

## See also
- [insert_iterator](/cpp/iterator/insert_iterator/)
- [back_inserter](/cpp/iterator/back_inserter/)
- [std::back_insert_iterator](/cpp/iterator/back_insert_iterator/)
- [front_inserter](/cpp/iterator/front_inserter/)
- [std::front_insert_iterator](/cpp/iterator/front_insert_iterator/)
