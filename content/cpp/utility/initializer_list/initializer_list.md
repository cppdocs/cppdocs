---
title: "std::initializer_list<T>::initializer_list"
source_path: "cpp/utility/initializer_list/initializer_list"
category: "utility"
---

Constructs an empty initializer list.

## Declarations
```cpp
initializer_list() noexcept;
```
_(since C++11) (constexpr since C++14)_

## Notes
Despite a lack of constructors, it is possible to create non-empty initializer lists. Instances of std::initializer_list are implicitly constructed when:

## Example
```cpp
#include <initializer_list>
#include <iostream>
 
int main()
{
    std::initializer_list<int> empty_list;
    std::cout << "empty_list.size(): " << empty_list.size() << '\n';
 
    // create initializer lists using list-initialization
    std::initializer_list<int> digits{1, 2, 3, 4, 5};
    std::cout << "digits.size(): " << digits.size() << '\n';
 
    // special rule for auto means 'fractions' has the
    // type std::initializer_list<double>
    auto fractions = {3.14159, 2.71828};
    std::cout << "fractions.size(): " << fractions.size() << '\n';
 
    // create constexpr initializer list (since C++14)
    static constexpr auto ab = {'a', 'b'};
    static_assert(ab.size() == 2 and *ab.begin() == 'a');
}
```
