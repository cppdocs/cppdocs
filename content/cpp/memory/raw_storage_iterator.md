---
title: "std::raw_storage_iterator"
source_path: "cpp/memory/raw_storage_iterator"
header: "<memory>"
category: "memory"
---

The output iterator std::raw_storage_iterator makes it possible for standard algorithms to store results in uninitialized memory. Whenever the algorithm writes an object of type T to the dereferenced iterator, the object is copy-constructed into the location in the uninitialized storage pointed to by the iterator. The template parameter OutputIt is any type that meets the requirements of [LegacyOutputIterator](/cpp/named_req/outputiterator/) and has operator* defined to return an object, for which operator& returns an object of type T*. Usually, the type T* is used as OutputIt.

## Declarations
```cpp
template< class OutputIt, class T >
class raw_storage_iterator
: public std::iterator<std::output_iterator_tag, void, void, void, void>;
```
_(until C++17)_

```cpp
template< class OutputIt, class T >
class raw_storage_iterator;
```
_(since C++17) (deprecated in C++17) (removed in C++20)_

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <memory>
#include <string>
 
int main()
{
    const std::string s[] = {"This", "is", "a", "test", "."};
    std::string* p = std::allocator<std::string>().allocate(5);
 
    std::copy(std::begin(s), std::end(s),
              std::raw_storage_iterator<std::string*, std::string>(p));
 
    for (std::string* i = p; i != p + 5; ++i)
    {
        std::cout << *i << '\n';
        i->~basic_string<char>();
    }
    std::allocator<std::string>().deallocate(p, 5);
}
```

## See also
- [allocator_traits](/cpp/memory/allocator_traits/)
- [scoped_allocator_adaptor](/cpp/memory/scoped_allocator_adaptor/)
- [uses_allocator](/cpp/memory/uses_allocator/)
