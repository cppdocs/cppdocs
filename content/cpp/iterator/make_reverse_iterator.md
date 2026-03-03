---
title: "std::make_reverse_iterator"
source_path: "cpp/iterator/make_reverse_iterator"
header: "<iterator>"
category: "iterator"
---

make_reverse_iterator is a convenience function template that constructs a [std::reverse_iterator](/cpp/iterator/reverse_iterator/) for the given iterator i (which must be a [LegacyBidirectionalIterator](/cpp/named_req/bidirectionaliterator/)) with the type deduced from the type of the argument.

## Declarations
```cpp
template< class Iter >
std::reverse_iterator<Iter> make_reverse_iterator( Iter i );
```
_(since C++14) (constexpr since C++17)_

## Parameters
- `i`: iterator to be converted to reverse iterator

## Return value
[std::reverse_iterator](/cpp/iterator/reverse_iterator/)<Iter>(i)

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_make_reverse_iterator
201402L
(C++14)
std::make_reverse_iterator

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    std::vector<int> v{1, 3, 10, 8, 22};
 
    std::sort(v.begin(), v.end());
    std::copy(v.begin(), v.end(), std::ostream_iterator<int>(std::cout, ", "));
    std::cout << '\n';
 
    std::copy(std::make_reverse_iterator(v.end()),
              std::make_reverse_iterator(v.begin()),
              std::ostream_iterator<int>(std::cout, ", "));
    std::cout << '\n';
}
```

## See also
- [reverse_iterator](/cpp/iterator/reverse_iterator/)
- [rbegincrbegin](/cpp/iterator/rbegin/)
- [rendcrend](/cpp/iterator/rend/)
