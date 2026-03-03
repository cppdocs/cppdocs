---
title: "std::common_iterator"
source_path: "cpp/iterator/common_iterator"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

std::common_iterator is an iterator I / sentinel S adaptor that may represent a non-common range (where the types of I and S differ) as a [common_range](/cpp/ranges/common_range/), by containing either an iterator or a sentinel, and defining the appropriate equality comparison operators operator==.

## Declarations
```cpp
template< std::input_or_output_iterator I, std::sentinel_for<I> S >
requires ( !std::same_as<I, S> && std::copyable<I> )
class common_iterator;
```
_(since C++20)_

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <list>
#include <string>
 
template<class ForwardIter>
void fire(ForwardIter first, ForwardIter last)
{
    std::copy(first, last, std::ostream_iterator<std::string>{std::cout, " "});    
}
 
int main()
{
    std::list<std::string> stars{"Pollux", "Arcturus", "Mira", "Aldebaran", "Sun"};
 
    using IT = std::common_iterator<
                   std::counted_iterator<std::list<std::string>::iterator>,
                   std::default_sentinel_t>;
 
    fire(IT(std::counted_iterator(stars.begin(), stars.size() - 1)),
         IT(std::default_sentinel));
}
```

## See also
- [ranges::common_range](/cpp/ranges/common_range/)
- [ranges::common_viewviews::common](/cpp/ranges/common_view/)
- [view](/cpp/ranges/view/)
- [common_range](/cpp/ranges/common_range/)
