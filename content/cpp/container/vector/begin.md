---
title: "std::vector<T,Allocator>::begin, std::vector<T,Allocator>::cbegin"
source_path: "cpp/container/vector/begin"
category: "container"
since: "C++11"
---

Returns an iterator to the first element of the vector.

## Declarations
```cpp
iterator begin();
```
_(noexcept since C++11)(constexpr since C++20)_

```cpp
const_iterator begin() const;
```
_(noexcept since C++11)(constexpr since C++20)_

```cpp
const_iterator cbegin() const noexcept;
```
_(since C++11) (constexpr since C++20)_

## Return value
Iterator to the first element.

## Notes
libc++ backports cbegin() to C++98 mode.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <numeric>
#include <string>
#include <vector>
 
int main()
{
    std::vector<int> nums{1, 2, 4, 8, 16};
    std::vector<std::string> fruits{"orange", "apple", "raspberry"};
    std::vector<char> empty;
 
    // Print vector.
    std::for_each(nums.begin(), nums.end(), [](const int n) { std::cout << n << ' '; });
    std::cout << '\n';
 
    // Sums all integers in the vector nums (if any), printing only the result.
    std::cout << "Sum of nums: "
              << std::accumulate(nums.begin(), nums.end(), 0) << '\n';
 
    // Prints the first fruit in the vector fruits, checking if there is any.
    if (!fruits.empty())
        std::cout << "First fruit: " << *fruits.begin() << '\n';
 
    if (empty.begin() == empty.end())
        std::cout << "vector 'empty' is indeed empty.\n";
}
```

## See also
- [endcend](/cpp/container/vector/end/)
- [begincbegin](/cpp/iterator/begin/)
