---
title: "std::forward_list<T,Allocator>::begin, std::forward_list<T,Allocator>::cbegin"
source_path: "cpp/container/forward_list/begin"
category: "container"
since: "C++11"
---

Returns an iterator to the first element of the forward_list.

## Declarations
```cpp
iterator begin() noexcept;
```
_(since C++11)_

```cpp
const_iterator begin() const noexcept;
```
_(since C++11)_

```cpp
const_iterator cbegin() const noexcept;
```
_(since C++11)_

## Return value
Iterator to the first element.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <numeric>
#include <string>
#include <forward_list>
 
int main()
{
    std::forward_list<int> nums{1, 2, 4, 8, 16};
    std::forward_list<std::string> fruits{"orange", "apple", "raspberry"};
    std::forward_list<char> empty;
 
    // Print forward_list.
    std::for_each(nums.begin(), nums.end(), [](const int n) { std::cout << n << ' '; });
    std::cout << '\n';
 
    // Sums all integers in the forward_list nums (if any), printing only the result.
    std::cout << "Sum of nums: "
              << std::accumulate(nums.begin(), nums.end(), 0) << '\n';
 
    // Prints the first fruit in the forward_list fruits, checking if there is any.
    if (!fruits.empty())
        std::cout << "First fruit: " << *fruits.begin() << '\n';
 
    if (empty.begin() == empty.end())
        std::cout << "forward_list 'empty' is indeed empty.\n";
}
```

## See also
- [endcend](/cpp/container/forward_list/end/)
- [begincbegin](/cpp/iterator/begin/)
