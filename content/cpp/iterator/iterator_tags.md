---
title: "std::input_iterator_tag, std::output_iterator_tag, std::forward_iterator_tag, std::bidirectional_iterator_tag, std::random_access_iterator_tag, std::contiguous_iterator_tag"
source_path: "cpp/iterator/iterator_tags"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

Defines the category of an iterator. Each tag is an empty type.

## Declarations
```cpp
struct input_iterator_tag {};
```

```cpp
struct output_iterator_tag {};
```

```cpp
struct forward_iterator_tag : public input_iterator_tag {};
```

```cpp
struct bidirectional_iterator_tag : public forward_iterator_tag {};
```

```cpp
struct random_access_iterator_tag : public bidirectional_iterator_tag {};
```

```cpp
struct contiguous_iterator_tag : public random_access_iterator_tag {};
```
_(since C++20)_

## Notes
There is no separate tag for [LegacyContiguousIterator](/cpp/named_req/contiguousiterator/). That is, it is not possible to tell a [LegacyContiguousIterator](/cpp/named_req/contiguousiterator/) based on its iterator_category. To define specialized algorithm for contiguous iterators, use the [contiguous_iterator](/cpp/iterator/contiguous_iterator/) concept.(since C++20)

There are no correspondences between output_iterator_tag and the [output_iterator](/cpp/iterator/output_iterator/) concept. Setting iterator_concept to output_iterator_tag only indicates that the type does not model [input_iterator](/cpp/iterator/input_iterator/).

## Example
```cpp
#include <iostream>
#include <iterator>
#include <list>
#include <vector>
 
// Using concepts (tag checking is part of the concepts themselves)
 
template<std::bidirectional_iterator BDIter>
void alg(BDIter, BDIter)
{
    std::cout << "1. alg() \t called for bidirectional iterator\n";
}
 
template<std::random_access_iterator RAIter>
void alg(RAIter, RAIter)
{
    std::cout << "2. alg() \t called for random-access iterator\n";
}
 
// Legacy, using tag dispatch
 
namespace legacy
{
    // Quite often implementation details are hidden in a dedicated namespace
    namespace implementation_details
    {
        template<class BDIter>
        void alg(BDIter, BDIter, std::bidirectional_iterator_tag)
        {
            std::cout << "3. legacy::alg() called for bidirectional iterator\n";
        }
 
        template<class RAIter>
        void alg(RAIter, RAIter, std::random_access_iterator_tag)
        {
            std::cout << "4. legacy::alg() called for random-access iterator\n";
        }
    } // namespace implementation_details
 
    template<class Iter>
    void alg(Iter first, Iter last)
    {
        implementation_details::alg(first, last,
            typename std::iterator_traits<Iter>::iterator_category());
    }
} // namespace legacy
 
int main()
{
    std::list<int> l;
    alg(l.begin(), l.end()); // 1.
    legacy::alg(l.begin(), l.end()); // 3.
 
    std::vector<int> v;
    alg(v.begin(), v.end()); // 2.
    legacy::alg(v.begin(), v.end()); // 4.
 
//  std::istreambuf_iterator<char> i1(std::cin), i2;
//  alg(i1, i2);         // compile error: no matching function for call
//  legacy::alg(i1, i2); // compile error: no matching function for call
}
```

## See also
- [iterator](/cpp/iterator/iterator/)
- [iterator_traits](/cpp/iterator/iterator_traits/)
