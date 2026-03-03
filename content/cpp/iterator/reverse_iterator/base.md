---
title: "std::reverse_iterator<Iter>::base"
source_path: "cpp/iterator/reverse_iterator/base"
category: "iterator"
---

Returns the underlying iterator.

## Declarations
```cpp
iterator_type base() const;
```
_(constexpr since C++17)_

## Return value
[current](/cpp/iterator/reverse_iterator/#current)

## Notes
The base iterator refers to the element that is next (from the iterator_type perspective) to the element the reverse_iterator is currently pointing to. That is &*(this->base() - 1) == &*(*this).

## Example
```cpp
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    std::vector<int> v = {0, 1, 2, 3, 4, 5};
 
    using RevIt = std::reverse_iterator<std::vector<int>::iterator>;
 
    const auto it = v.begin() + 3;
    RevIt r_it{it};
 
    std::cout << "*it == " << *it << '\n'
              << "*r_it == " << *r_it << '\n'
              << "*r_it.base() == " << *r_it.base() << '\n'
              << "*(r_it.base() - 1) == " << *(r_it.base() - 1) << '\n';
 
    RevIt r_end{v.begin()};
    RevIt r_begin{v.end()};
 
    for (auto it = r_end.base(); it != r_begin.base(); ++it)
        std::cout << *it << ' ';
    std::cout << '\n';
 
    for (auto it = r_begin; it != r_end; ++it)
        std::cout << *it << ' ';
    std::cout << '\n';
}
```

## See also
- [operator*operator->](/cpp/iterator/reverse_iterator/operator/)
