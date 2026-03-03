---
title: "std::deque<T,Allocator>::begin, std::deque<T,Allocator>::cbegin"
source_path: "cpp/container/deque/begin"
category: "container"
since: "C++11"
---

Returns an iterator to the first element of the deque.

## Declarations
```cpp
iterator begin();
```
_(noexcept since C++11)_

```cpp
const_iterator begin() const;
```
_(noexcept since C++11)_

```cpp
const_iterator cbegin() const noexcept;
```
_(since C++11)_

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
#include <deque>
 
int main()
{
    std::deque<int> nums{1, 2, 4, 8, 16};
    std::deque<std::string> fruits{"orange", "apple", "raspberry"};
    std::deque<char> empty;
 
    // Print deque.
    std::for_each(nums.begin(), nums.end(), [](const int n) { std::cout << n << ' '; });
    std::cout << '\n';
 
    // Sums all integers in the deque nums (if any), printing only the result.
    std::cout << "Sum of nums: "
              << std::accumulate(nums.begin(), nums.end(), 0) << '\n';
 
    // Prints the first fruit in the deque fruits, checking if there is any.
    if (!fruits.empty())
        std::cout << "First fruit: " << *fruits.begin() << '\n';
 
    if (empty.begin() == empty.end())
        std::cout << "deque 'empty' is indeed empty.\n";
}
```

## See also
- [endcend](/cpp/container/deque/end/)
- [begincbegin](/cpp/iterator/begin/)
