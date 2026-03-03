---
title: "std::array<T,N>::begin, std::array<T,N>::cbegin"
source_path: "cpp/container/array/begin"
category: "container"
---

Returns an iterator to the first element of the array.

## Declarations
```cpp
iterator begin() noexcept;
```
_(since C++11) (constexpr since C++17)_

```cpp
const_iterator begin() const noexcept;
```
_(since C++11) (constexpr since C++17)_

```cpp
const_iterator cbegin() const noexcept;
```
_(since C++11) (constexpr since C++17)_

## Return value
Iterator to the first element.

## Example
```cpp
#include <algorithm>
#include <array>
#include <iomanip>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    std::array<int, 0> empty;
    std::cout << "1) "
              << (empty.begin() == empty.end()) << ' '     // true
              << (empty.cbegin() == empty.cend()) << '\n'; // true
    // *(empty.begin()) = 42; // => undefined behavior at run-time
 
 
    std::array<int, 4> numbers{5, 2, 3, 4};
    std::cout << "2) "
              << (numbers.begin() == numbers.end()) << ' '    // false
              << (numbers.cbegin() == numbers.cend()) << '\n' // false
              << "3) "
              << *(numbers.begin()) << ' '    // 5
              << *(numbers.cbegin()) << '\n'; // 5
 
    *numbers.begin() = 1;
    std::cout << "4) " << *(numbers.begin()) << '\n'; // 1
    // *(numbers.cbegin()) = 42; // compile-time error: 
                                 // read-only variable is not assignable
 
    // print out all elements
    std::cout << "5) ";
    std::for_each(numbers.cbegin(), numbers.cend(), [](int x)
    {
        std::cout << x << ' ';
    });
    std::cout << '\n';
 
    constexpr std::array constants{'A', 'B', 'C'};
    static_assert(constants.begin() != constants.end());   // OK
    static_assert(constants.cbegin() != constants.cend()); // OK
    static_assert(*constants.begin() == 'A');              // OK
    static_assert(*constants.cbegin() == 'A');             // OK
    // *constants.begin() = 'Z'; // compile-time error: 
                                 // read-only variable is not assignable
}
```

## See also
- [endcend](/cpp/container/array/end/)
- [begincbegin](/cpp/iterator/begin/)
