---
title: "std::back_inserter"
source_path: "cpp/iterator/back_inserter"
header: "<iterator>"
category: "iterator"
---

back_inserter is a convenience function template that constructs a [std::back_insert_iterator](/cpp/iterator/back_insert_iterator/) for the container c with the type deduced from the type of the argument.

## Declarations
```cpp
template< class Container >
std::back_insert_iterator<Container> back_inserter( Container& c );
```
_(constexpr since C++20)_

## Parameters
- `c`: container that supports a push_back operation

## Return value
A [std::back_insert_iterator](/cpp/iterator/back_insert_iterator/) which can be used to add elements to the end of the container c.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    std::vector<int> v{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    std::fill_n(std::back_inserter(v), 3, -1);
    for (int n : v)
        std::cout << n << ' ';
    std::cout << '\n';
}
```

## See also
- [back_insert_iterator](/cpp/iterator/back_insert_iterator/)
- [front_inserter](/cpp/iterator/front_inserter/)
- [std::front_insert_iterator](/cpp/iterator/front_insert_iterator/)
- [inserter](/cpp/iterator/inserter/)
- [std::insert_iterator](/cpp/iterator/insert_iterator/)
