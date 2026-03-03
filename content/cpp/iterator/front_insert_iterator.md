---
title: "std::front_insert_iterator"
source_path: "cpp/iterator/front_insert_iterator"
header: "<iterator>"
category: "iterator"
since: "C++17"
---

std::front_insert_iterator is a [LegacyOutputIterator](/cpp/named_req/outputiterator/) that prepends elements to a container for which it was constructed. The container's push_front() member function is called whenever the iterator (whether dereferenced or not) is assigned to. Incrementing the std::front_insert_iterator is a no-op.

## Declarations
```cpp
template< class Container >
class front_insert_iterator
: public std::iterator<std::output_iterator_tag, void, void, void, void>
```
_(until C++17)_

```cpp
template< class Container >
class front_insert_iterator;
```
_(since C++17)_

## Example
```cpp
#include <algorithm>
#include <deque>
#include <iostream>
#include <iterator>
#include <vector>
 
namespace stb
{
    void println(auto, auto const& d)
    {
        std::ranges::copy(d, std::ostream_iterator<int>(std::cout, " "));
        std::cout << '\n';
    }
}
 
int main()
{
    std::vector<int> v{1, 2, 3, 4, 5};
    std::deque<int> d;
 
    std::copy(v.begin(), v.end(),
              std::front_insert_iterator<std::deque<int>>(d));
              // or std::front_inserter(d)
 
    stb::println("{}", d);
}
```

## See also
- [front_inserter](/cpp/iterator/front_inserter/)
- [back_insert_iterator](/cpp/iterator/back_insert_iterator/)
- [insert_iterator](/cpp/iterator/insert_iterator/)
