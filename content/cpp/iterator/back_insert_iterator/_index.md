---
title: "std::back_insert_iterator"
source_path: "cpp/iterator/back_insert_iterator"
header: "<iterator>"
---

std::back_insert_iterator is a [LegacyOutputIterator](/cpp/named_req/OutputIterator/) that appends elements to a container for which it was constructed. The container's push_back() member function is called whenever the iterator (whether dereferenced or not) is assigned to. Incrementing the std::back_insert_iterator is a no-op.

## Declarations
```cpp
template< class Container >
class back_insert_iterator
: public std::iterator<std::output_iterator_tag, void, void, void, void>
```
_(until C++17)_

```cpp
template< class Container >
class back_insert_iterator;
```
_(since C++17)_

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    std::vector<int> v;
 
    std::generate_n(
        std::back_insert_iterator<std::vector<int>>(v),
            // Or use std::back_inserter helper
            // Or use std::back_insert_iterator(v) C++17's syntax
        10,
        [n = 0]() mutable { return ++n; }
    );
 
    for (int n : v)
        std::cout << n << ' ';
    std::cout << '\n';
}
```

## See also
- [back_inserter](/cpp/iterator/back_inserter/)
- [front_insert_iterator](/cpp/iterator/front_insert_iterator/)
- [insert_iterator](/cpp/iterator/insert_iterator/)
