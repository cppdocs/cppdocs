---
title: "std::deque<T,Allocator>::rend, std::deque<T,Allocator>::crend"
source_path: "cpp/container/deque/rend"
category: "container"
since: "C++11"
---

Returns a reverse iterator to the element following the last element of the reversed deque. It corresponds to the element preceding the first element of the non-reversed deque. This element acts as a placeholder, attempting to access it results in undefined behavior.

## Declarations
```cpp
reverse_iterator rend();
```
_(noexcept since C++11)_

```cpp
const_reverse_iterator rend() const;
```
_(noexcept since C++11)_

```cpp
const_reverse_iterator crend() const noexcept;
```
_(since C++11)_

## Return value
Reverse iterator to the element following the last element.

## Notes
libc++ backports crend() to C++98 mode.

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
    std::for_each(nums.rbegin(), nums.rend(), [](const int n) { std::cout << n << ' '; });
    std::cout << '\n';
 
    // Sums all integers in the deque nums (if any), printing only the result.
    std::cout << "Sum of nums: "
              << std::accumulate(nums.rbegin(), nums.rend(), 0) << '\n';
 
    // Prints the first fruit in the deque fruits, checking if there is any.
    if (!fruits.empty())
        std::cout << "First fruit: " << *fruits.rbegin() << '\n';
 
    if (empty.rbegin() == empty.rend())
        std::cout << "deque 'empty' is indeed empty.\n";
}
```

## See also
- [rbegincrbegin](/cpp/container/deque/rbegin/)
- [rendcrend](/cpp/iterator/rend/)
