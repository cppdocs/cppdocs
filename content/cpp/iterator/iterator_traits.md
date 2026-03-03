---
title: "std::iterator_traits"
source_path: "cpp/iterator/iterator_traits"
header: "<iterator>"
category: "iterator"
---

std::iterator_traits is the type trait class that provides uniform interface to the properties of [LegacyIterator](/cpp/named_req/iterator/) types. This makes it possible to implement algorithms only in terms of iterators.

## Declarations
```cpp
template< class Iter >
struct iterator_traits;
```

```cpp
template< class T >
struct iterator_traits<T*>;
```

```cpp
template< class T >
struct iterator_traits<const T*>;
```
_(removed in C++20)_

## Example
```cpp
#include <iostream>
#include <iterator>
#include <list>
#include <vector>
 
template<class BidirIt>
void my_reverse(BidirIt first, BidirIt last)
{
    typename std::iterator_traits<BidirIt>::difference_type n = std::distance(first, last);
    for (--n; n > 0; n -= 2)
    {
        typename std::iterator_traits<BidirIt>::value_type tmp = *first;
        *first++ = *--last;
        *last = tmp;
    }
}
 
int main()
{
    std::vector<int> v{1, 2, 3, 4, 5};
    my_reverse(v.begin(), v.end());
    for (int n : v)
        std::cout << n << ' ';
    std::cout << '\n';
 
    std::list<int> l{1, 2, 3, 4, 5};
    my_reverse(l.begin(), l.end());
    for (int n : l)
        std::cout << n << ' ';
    std::cout << '\n';
 
    int a[]{1, 2, 3, 4, 5};
    my_reverse(a, a + std::size(a));
    for (int n : a)
        std::cout << n << ' ';
    std::cout << '\n';
 
//  std::istreambuf_iterator<char> i1(std::cin), i2;
//  my_reverse(i1, i2); // compilation error: i1, i2 are input iterators
}
```

## See also
- [iterator](/cpp/iterator/iterator/)
- [input_iterator_tagoutput_iterator_tagforward_iterator_tagbidirectional_iterator_tagrandom_access_iterator_tagcontiguous_iterator_tag](/cpp/iterator/iterator_tags/)
- [iter_value_titer_reference_titer_const_reference_titer_difference_titer_rvalue_reference_titer_common_reference_t](/cpp/iterator/iter_t/)
