---
title: "std::front_inserter"
source_path: "cpp/iterator/front_inserter"
header: "<iterator>"
category: "iterator"
---

front_inserter is a convenience function template that constructs a [std::front_insert_iterator](/cpp/iterator/front_insert_iterator/) for the container c with the type deduced from the type of the argument.

## Declarations
```cpp
template< class Container >
std::front_insert_iterator<Container> front_inserter( Container& c );
```
_(constexpr since C++20)_

## Parameters
- `c`: container that supports a push_front operation

## Return value
A [std::front_insert_iterator](/cpp/iterator/front_insert_iterator/) which can be used to add elements to the beginning of the container c.

## Example
```cpp
#include <algorithm>
#include <deque>
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    std::vector<int> v{1, 2, 3, 4, 5};
    std::deque<int> d;
    std::copy(v.begin(), v.end(), std::front_inserter(d));
    for (int n : d)
        std::cout << n << ' ';
    std::cout << '\n';
}
```

## See also
- [front_insert_iterator](/cpp/iterator/front_insert_iterator/)
- [back_inserter](/cpp/iterator/back_inserter/)
- [std::back_insert_iterator](/cpp/iterator/back_insert_iterator/)
- [inserter](/cpp/iterator/inserter/)
- [std::insert_iterator](/cpp/iterator/insert_iterator/)
