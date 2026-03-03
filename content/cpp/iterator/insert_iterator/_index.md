---
title: "std::insert_iterator"
source_path: "cpp/iterator/insert_iterator"
header: "<iterator>"
---

std::insert_iterator is a [LegacyOutputIterator](/cpp/named_req/OutputIterator/) that inserts elements into a container for which it was constructed, at the position pointed to by the supplied iterator. The container's insert() member function is called whenever the iterator (whether dereferenced or not) is assigned to. Incrementing the std::insert_iterator is a no-op.

## Declarations
```cpp
template< class Container >
class insert_iterator : public std::iterator<std::output_iterator_tag,
void, void, void, void>
```
_(until C++17)_

```cpp
template< class Container >
class insert_iterator;
```
_(since C++17)_

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <list>
#include <vector>
 
int main()
{
    std::vector<int> v{1, 2, 3, 4, 5};
    std::list<int> l{-1, -2, -3};
    std::copy(v.begin(), v.end(), // may be simplified with std::inserter
              std::insert_iterator<std::list<int>>(l, std::next(l.begin()))); 
    for (int n : l)
        std::cout << n << ' ';
    std::cout << '\n';
}
```

## See also
- [inserter](/cpp/iterator/inserter/)
- [back_insert_iterator](/cpp/iterator/back_insert_iterator/)
- [front_insert_iterator](/cpp/iterator/front_insert_iterator/)
