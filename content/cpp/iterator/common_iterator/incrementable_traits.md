---
title: "std::incrementable_traits<std::common_iterator>"
source_path: "cpp/iterator/common_iterator/incrementable_traits"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

Provides the uniform interface to the associated difference type of the [std::common_iterator](/cpp/iterator/common_iterator/) type.

## Declarations
```cpp
template< class I, class S >
struct incrementable_traits<std::common_iterator<I, S>> {
using difference_type = std::iter_difference_t<I>;
};
```
_(since C++20)_

## Example
```cpp
#include <cstddef>
#include <iterator>
#include <list>
#include <string>
#include <type_traits>
 
int main()
{
    using CI = std::common_iterator<
                   std::counted_iterator<int*>,
                   std::default_sentinel_t>;
    using CL = std::common_iterator<
                   std::counted_iterator<std::list<std::string>::iterator>,
                   std::default_sentinel_t>;
    CL cl{std::default_sentinel};
    static_assert(
        std::same_as<std::incrementable_traits<CI>::difference_type, std::ptrdiff_t> &&
        std::same_as<std::incrementable_traits<CL>::difference_type, std::ptrdiff_t> &&
        std::same_as<std::incrementable_traits<decltype(cl)>::difference_type,
                     std::ptrdiff_t>);
}
```

## See also
- [incrementable_traits](/cpp/iterator/incrementable_traits/)
- [weakly_incrementable](/cpp/iterator/weakly_incrementable/)
- [iter_value_titer_reference_titer_const_reference_titer_difference_titer_rvalue_reference_titer_common_reference_t](/cpp/iterator/iter_t/)
- [std::iterator_traits<std::common_iterator>](/cpp/iterator/common_iterator/iterator_traits/)
- [std::common_iterator](/cpp/iterator/common_iterator/)
