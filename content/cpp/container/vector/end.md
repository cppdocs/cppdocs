---
title: "std::vector<T,Allocator>::end, std::vector<T,Allocator>::cend"
source_path: "cpp/container/vector/end"
category: "container"
since: "C++11"
---

Returns an iterator to the element following the last element of the vector.

## Declarations
```cpp
iterator end();
```
_(until C++11)_

```cpp
iterator end() noexcept;
```
_(since C++11) (constexpr since C++20)_

```cpp
const_iterator end() const;
```
_(until C++11)_

```cpp
const_iterator end() const noexcept;
```
_(since C++11) (constexpr since C++20)_

```cpp
const_iterator cend() const noexcept;
```
_(since C++11) (constexpr since C++20)_

## Return value
Iterator to the element following the last element.

## Notes
libc++ backports cend() to C++98 mode.

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
- [begincbegin](/cpp/container/vector/begin/)
- [endcend](/cpp/iterator/end/)
