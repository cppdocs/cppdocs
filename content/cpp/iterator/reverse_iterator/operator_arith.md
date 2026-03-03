---
title: "std::reverse_iterator<Iter>::operator++,+,+=,--,-,-="
source_path: "cpp/iterator/reverse_iterator/operator"
category: "iterator"
---

Increments or decrements the underlying iterator reversely.

## Declarations
```cpp
reverse_iterator& operator++();
```
_(constexpr since C++17)_

```cpp
reverse_iterator& operator--();
```
_(constexpr since C++17)_

```cpp
reverse_iterator operator++( int );
```
_(constexpr since C++17)_

```cpp
reverse_iterator operator--( int );
```
_(constexpr since C++17)_

```cpp
reverse_iterator operator+( difference_type n ) const;
```
_(constexpr since C++17)_

```cpp
reverse_iterator operator-( difference_type n ) const;
```
_(constexpr since C++17)_

```cpp
reverse_iterator& operator+=( difference_type n );
```
_(constexpr since C++17)_

```cpp
reverse_iterator& operator-=( difference_type n );
```
_(constexpr since C++17)_

## Parameters
- `n`: position relative to current location

## Return value
As described above.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <list>
#include <vector>
 
int main()
{
    std::vector v{0, 1, 2, 3, 4};
    auto rv = std::reverse_iterator{v.rbegin()};
    std::cout << *(++rv) << ' '; // 3
    std::cout << *(--rv) << ' '; // 4
    std::cout << *(rv + 3) << ' '; // 1
    rv += 3;
    std::cout << rv[0] << ' '; // 1
    rv -= 3;
    std::cout << rv[0] << '\n'; // 4
 
    std::list l{5, 6, 7, 8};
    auto rl = std::reverse_iterator{l.rbegin()};
    std::cout << *(++rl) << ' '; // OK: 3
    std::cout << *(--rl) << '\n'; // OK: 4
    // The following statements raise compilation error because the
    // underlying iterator does not model the random access iterator:
//  *(rl + 3) = 13;
//  rl += 3;
//  rl -= 3;
}
```

## See also
- [operator+]()
- [operator-]()
