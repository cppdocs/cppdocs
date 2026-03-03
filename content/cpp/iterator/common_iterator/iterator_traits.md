---
title: "std::iterator_traits<std::common_iterator>"
source_path: "cpp/iterator/common_iterator/iterator_traits"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

Provides the uniform interface to the properties of the [std::common_iterator](/cpp/iterator/common_iterator/) type.

## Declarations
```cpp
template< std::input_iterator I, class S >
struct iterator_traits<std::common_iterator<I, S>>;
```
_(since C++20)_

## Example
```cpp
#include <iterator>
#include <type_traits>
#include <vector>
 
int main()
{
    std::vector v{1, 2, 3, 4};
    using CV = std::common_iterator<
                    std::counted_iterator<std::vector<int>::iterator>,
                    std::default_sentinel_t>;
    CV i{std::counted_iterator{v.begin(), 3}};
    using TRCV = std::iterator_traits<decltype(i)>;
    static_assert(std::is_same<TRCV::iterator_concept, std::forward_iterator_tag>());
    static_assert(std::is_same<TRCV::iterator_category, std::forward_iterator_tag>());
    static_assert(std::is_same<TRCV::value_type, int>());
    static_assert(std::is_same<TRCV::difference_type,
                  std::vector<int>::difference_type>());
    static_assert(std::is_same<TRCV::pointer, decltype(i.operator->())>());
    static_assert(std::is_same<TRCV::reference, int&>());
 
    CV s{std::default_sentinel};
    using TRCS = std::iterator_traits<decltype(s)>;
    static_assert(std::is_same<TRCS::iterator_concept, std::forward_iterator_tag>());
    static_assert(std::is_same<TRCS::iterator_category, std::forward_iterator_tag>());
    static_assert(std::is_same<TRCS::value_type, int>());
    static_assert(std::is_same<TRCS::difference_type,
                  std::vector<int>::difference_type>());
    static_assert(std::is_same<TRCS::pointer, decltype(s.operator->())>());
    static_assert(std::is_same<TRCS::reference, int&>());
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3749 | C++20 | if std::iter_difference_t<I> is not an integer type,iterator_category was std::input_iterator_tag | iterator_category isundefined in this case |

## See also
- [iterator_traits](/cpp/iterator/iterator_traits/)
- [std::incrementable_traits<std::common_iterator>](/cpp/iterator/common_iterator/incrementable_traits/)
- [std::common_iterator](/cpp/iterator/common_iterator/)
