---
title: "std::list<T,Allocator>::end, std::list<T,Allocator>::cend"
source_path: "cpp/container/list/end"
category: "container"
since: "C++11"
---

Returns an iterator to the element following the last element of the list.

## Declarations
```cpp
iterator end();
```
_(noexcept since C++11)_

```cpp
const_iterator end() const;
```
_(noexcept since C++11)_

```cpp
const_iterator cend() const noexcept;
```
_(since C++11)_

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
#include <list>
 
int main()
{
    std::list<int> nums{1, 2, 4, 8, 16};
    std::list<std::string> fruits{"orange", "apple", "raspberry"};
    std::list<char> empty;
 
    // Print list.
    std::for_each(nums.begin(), nums.end(), [](const int n) { std::cout << n << ' '; });
    std::cout << '\n';
 
    // Sums all integers in the list nums (if any), printing only the result.
    std::cout << "Sum of nums: "
              << std::accumulate(nums.begin(), nums.end(), 0) << '\n';
 
    // Prints the first fruit in the list fruits, checking if there is any.
    if (!fruits.empty())
        std::cout << "First fruit: " << *fruits.begin() << '\n';
 
    if (empty.begin() == empty.end())
        std::cout << "list 'empty' is indeed empty.\n";
}
```

## See also
- [begincbegin](/cpp/container/list/begin/)
- [endcend](/cpp/iterator/end/)
